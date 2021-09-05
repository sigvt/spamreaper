const { spamScore } = require("./index.node");

/**
 * Calculate spam score from the list of string.
 *
 * @param {string[]} inputs
 * @return {number}
 */
function concatinatedScore(inputs) {
  return spamScore(inputs.join(""));
}

/**
 * Returns provided string is spam or not.
 *
 * @param {string[]} inputs
 * @param {number} [threshold]
 * @return {boolean}
 */
function isSpam(inputs, threshold = 0.6) {
  const score = concatinatedScore(inputs);
  return score > threshold;
}

exports.spamScore = spamScore;
exports.concatinatedScore = concatinatedScore;
exports.isSpam = isSpam;
