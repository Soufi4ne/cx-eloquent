function Majuscule(mot) {
    var tableau = mot.split(' ');
    var array = [];

    for (var x = 0; x < tableau.length; x++) {
        array.push(tableau[x].charAt(0).toUpperCase() + tableau[x].slice(1));
    }
    return array.join(' ');
}
console.log(Majuscule("the quick brown fox"));