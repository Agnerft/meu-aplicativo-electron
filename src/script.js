
let dadosRecebidos;

function executarEndPoint() {

    var endpointUrl = document.getElementById('endpointInput').value;
    var resultado = document.getElementById('resultado');
    document.getElementById('endpointInput').addEventListener('click', Clear)
    var banner = document.querySelector('.banter-loader');
    banner.style.display = 'block';
    var ramais_h1 = document.getElementById('ramais_h1');
    var i = 500
    if (!endpointUrl) {
        console.error('Por favor, insira a URL do Endpoint.');
        document.querySelector('.banter-loader').style.display = 'block';

        // resultado.innerHTML = 'TESTE';
        ramais_h1.textContent = '';

        return;
    }
    else {
        setTimeout(function () {
            banner.style.display = 'none';

        }, i);

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
            var ramaisRegistrados = data.json2.ramais || [];

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


}




document.getElementById('executarEndpoint').addEventListener('click', executarEndPoint);


