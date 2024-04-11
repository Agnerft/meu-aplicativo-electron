
function Clear() {


    var endpointUrl = document.getElementById('endpointInput');
    var resultado = document.getElementById('resultado');
    var ramais_h1 = document.getElementById('ramais_h1');
    var popup = document.querySelector('.popup');



    endpointUrl.value = '';
    resultado.innerHTML = '';
    ramais_h1.innerHTML = '';

    popup.innerHTML = '';

}

document.getElementById('btn-clear').addEventListener('click', Clear);

function Clear2() {
    var popup = document.querySelector('.popup');
    var resultado = document.getElementById('resultado');
    var ramais_h1 = document.getElementById('ramais_h1');
    // document.querySelector('.banter-loader').style.display = 'none';

    popup.innerHTML = '';
    resultado.innerHTML = '';
    ramais_h1.innerHTML = '';
}


