module.exports = function reverse (n) {
    let newN = "";
    n.toString().split("").reverse().map((n) => newN += n);
    return parseInt(newN);
}
