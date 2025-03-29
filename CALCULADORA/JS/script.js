function somar(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    let resulted = numero1 + numero2;

    document.getElementById('resulted').textContent = resulted;
}

function subtrair(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resulted = numero1 - numero2;

    document.getElementById('resulted').textContent = resulted;
}

function multiplicar(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let resulted = numero1 * numero2;

    document.getElementById('resulted').textContent = resulted;
}

function dividir(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if(numero2 === 0){
        document.getElementById('resulted').innerText = "Divisão por zero";
    }else{
        let resulted = numero1 / numero2;
        document.getElementById('resulted').innerText = resulted;
    }

}