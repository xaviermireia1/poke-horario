window.onload = function() {
    saludo();
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