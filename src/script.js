document.getElementById('executarEndpoint').addEventListener('click', function () {
    var endpointUrl = document.getElementById('endpointInput').value;
    var resultado = document.getElementById('resultado');

    var ramais_h1 = document.getElementById('ramais_h1');

    if (!endpointUrl) {
        console.error('Por favor, insira a URL do Endpoint.');

        resultado.innerHTML = 'TESTE';

        return;
    }

    var urlAcess = `http://localhost:8080/${endpointUrl}`
    // var urlAcess = `http://localhost:8080/22668601000100`

    // Utilizando template literals para incorporar a variável endpointUrl na string
    fetch(urlAcess, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(`Resposta do Endpoint: ${JSON.stringify(data)}`);
            cliente = data.json1.cliente;
            ramais_h1.textContent = `Ramais do Cliente ${cliente}`

            resultado.innerHTML = '';
            var resultadoDiv = document.getElementById('resultado');
            resultadoDiv.classList.add('resultado')
            var resultadoUl = document.createElement('ul');
            resultadoUl.classList.add('resultado-list')
            var ramaisRegistrados = data.json2.ramais_registrados || [];

            ramaisRegistrados.forEach(ramal => {
                if (ramal.sip) {
                    var liElement = document.createElement('li');
                    liElement.classList.add('resultado-item')
                    liElement.textContent = `${ramal.sip}`
                    var selectBtn = document.createElement('button');

                    selectBtn.classList.add('btn-select')
                    selectBtn.textContent = 'Selecionar'


                    liElement.appendChild(selectBtn);
                    resultadoUl.appendChild(liElement);
                }
            });

            resultadoDiv.appendChild(resultadoUl)

            resultado.appendChild(resultadoDiv)
        })

        .catch(error => {
            console.error(`Erro ao executar o Endpoint: ${error}`);
        });
});


document.getElementById('btn-clear').addEventListener('click', function () {

    var endpointUrl = document.getElementById('endpointInput');

    endpointUrl.value = ''

})

document.getElementById('resultado').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-select')) {

        var sipValue = event.target.parentNode.textContent.replace('Selecionar', '').trim();

        console.log(`Botão clicado é do sip: ${sipValue}`)
    }
})