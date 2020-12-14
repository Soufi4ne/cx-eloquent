function GenererCombinaison(mot) {
    var tableauDeMot = [];
    for (var x = 0, n = 1; x < mot.length; x++, n++) {
        tableauDeMot[x] = mot.substring(x, n);
    }
    var combinaison = [];
    var variable = "";
    var tailleDuMot = Math.pow(2, tableauDeMot.length);

    for (var i = 0; i < tailleDuMot; i++) {
        variable = "";
        for (var j = 0; j < tableauDeMot.length; j++) {
            if ((i & Math.pow(2, j))) {
                variable += tableauDeMot[j];
            }
        }
        if (variable !== "") {
            combinaison.push(variable);
        }
    }
    console.log(combinaison.join(","));
}

GenererCombinaison("dog");