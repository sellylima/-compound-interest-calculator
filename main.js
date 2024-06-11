// document.getElementById pra pegar o Id do calculate e pegar o evento (click) criar uma função
// a função para clicar no botao de calcular acontecer alguma coisa
document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

    const total = value * (1 + fee)**time;      //formula do calculo

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});     


