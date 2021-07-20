use neon::prelude::*;

fn suffix_table(input: &String) -> Vec<u32> {
    let mut ca: Vec<(char, usize)> = input
        .chars()
        .into_iter()
        .enumerate()
        .map(|(i, c)| (c, i))
        .collect();
    ca.sort_by(|a, b| b.0.partial_cmp(&a.0).unwrap());
    ca.iter().map(|&(_, i)| i as u32).collect()
}

fn bwt(input: &String) -> String {
    let st = suffix_table(input);
    let len = input.chars().count();
    st.iter()
        .map(|&x| {
            let f = match x {
                0 => len - 1,
                x => x as usize - 1,
            };
            input.chars().nth(f).unwrap()
        })
        .into_iter()
        .collect()
}

fn rle(input: &String) -> String {
    let mut res = String::new();
    let mut prev = input.chars().nth(0).unwrap();
    for c in input.chars() {
        if c == prev {
            res.push_str(&c.to_string());
        } else {
            res.push_str(&prev.to_string());
            res.push_str(&c.to_string());
        }
        prev = c;
    }
    res
}

fn spam_score(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let input = cx.argument::<JsString>(0)?.value(&mut cx);
    let len = input.chars().count();
    let two_path_bwt = bwt(&bwt(&input));
    let cmp_bwt = rle(&two_path_bwt);
    let score = cmp_bwt.chars().count() as f64 / 2.0;
    Ok(cx.number(-1.0 * (score / len as f64).log2()))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("spamScore", spam_score)?;
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        assert_eq!(bwt(&"banana".to_string()), "aaabnn");
        assert_eq!(bwt(&"くくそそ".to_string()), "くそそく");
    }
}
