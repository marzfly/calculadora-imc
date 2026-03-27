//declarar as variáveis

let imc;
const campoAlturaEmCm = document.getElementById('altura');
const campoPeso = document.getElementById('peso');

//input do usuário
calcular.addEventListener('click', () =>{
    let alturaCm = Number(campoAlturaEmCm.value);
    let peso = Number(campoPeso.value);

    //determinar a conversao de cm pra m
    let alturaM = alturaCm / 100;

    //cálculo do imc
    let imc = peso / (alturaM * alturaM);
    console.log(imc);

    //exibir o resultado do imc no site
    document.getElementById('output').innerText = imc.toFixed(2);

    //decidir qual caixa de texto vai aparecer
    const abaixoDoPeso = document.getElementById('abaixo-do-peso');
    const normal = document.getElementById('normal');
    const sobrepeso = document.getElementById('sobrepeso');
    const obesidade = document.getElementById('obesidade');

    if(imc < 18.5){
        abaixoDoPeso.classList.remove('hidden');
    } else if(imc >= 18.5 && imc < 25.0){
        normal.classList.remove('hidden');
    } else if(imc >= 25.0 && imc < 30.0){
        sobrepeso.classList.remove('hidden');
    } else {
        obesidade.classList.remove('hidden');
    }
})