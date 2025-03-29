function fuja(){
    var button = document.getElementById('nao')

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - button.offsetWidth;
    var maxY = alturaJanela - button.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";

}