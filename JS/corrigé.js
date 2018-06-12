// on a une armoire avec des vêtements
let armoire = {
    name: "armoire",
    contenu: [
        "pull",
        "chaussettes",
        "pantalon",
        "sous-vêtements",
        "shorts",
        "veste",
        "chaussures",
        "t-shirt",
        "maillot de bain",
        "chapeau"
    ]
}
// Deux valises
let valise1 = {
    name: "valise",
    contenu: [],
    limite: 1
}
let valise2 = {
    name: "valise",
    contenu: [],
    limite: 1
}

// Function pour remplir les valises
function remplirValise(rangement, suitcase1, suitcase2) {
    let i = 0;
    rangement.contenu.forEach(element => {
        if (suitcase1.contenu.length < suitcase1.limite) {
            suitcase1.contenu.push(element);
        } else if (suitcase2.contenu.length < suitcase2.limite) {
            suitcase2.contenu.push(element);
        }
        // incrémenté
        i++;
    });
}

remplirValise(armoire, valise1, valise2);