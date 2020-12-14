function TrierAlphabetique(mot) {
    return mot.split("").sort().join("")
}

console.log(TrierAlphabetique("webmasteur"));