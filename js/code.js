window.onload = function() {
    saludo();
    console.log(getListRandom(10, 1, 10));
}

function saludo() {
    var hoy = new Date();
    var hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        document.getElementById('mensaje').innerHTML = "¡Buenas noches!"
        document.body.style.backgroundColor = "#3E3730"
    } else {
        document.getElementById('mensaje').innerHTML = "¡Buenos días!"
        document.body.style.backgroundColor = "rgb(238, 107, 47)"
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {
    var array = []
    for (let i = 0; i < n; i++) {
        let numr = getRndInteger(min, max);
        if (array.includes(numr)) {
            i--;
        } else {
            array.push(numr);
        }
    }
    return array;
}