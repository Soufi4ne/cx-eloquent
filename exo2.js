let EstUnPalindrome = function (mot) {
    const inverser = mot.split("").reverse().join("");
    return mot === inverser;
};

console.log(EstUnPalindrome("madam"))
console.log(EstUnPalindrome("madame"));