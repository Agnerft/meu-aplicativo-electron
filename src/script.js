
var online = false;


document.getElementById('executarEndpoint').addEventListener('click', function () {
    var endpointUrl = document.getElementById('endpointInput').value;
    var resultado = document.getElementById('resultado');

    var ramais_h1 = document.getElementById('ramais_h1');

    if (!endpointUrl) {
        console.error('Por favor, insira a URL do Endpoint.');

        resultado.innerHTML = 'TESTE';
        ramais_h1.textContent = '';

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
    var resultado = document.getElementById('resultado');
    var ramais_h1 = document.getElementById('ramais_h1');
    var popup = document.querySelector('.popup');

    endpointUrl.value = '';
    resultado.innerHTML = '';
    ramais_h1.innerHTML = '';

    popup.innerHTML = '';
    // popup.style.boxShadow = null;

    // console.log("Click");
    // console.log(resultado);
    // console.log(ramais_h1);
    // console.log(popup);


})

document.getElementById('resultado').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-select')) {


        var resultado = document.getElementById('resultado');
        var sipValue = event.target.parentNode.textContent.replace('Selecionar', '').trim();
        var cpfValue = document.getElementById('endpointInput').value;
        console.log(`Botão clicado é do sip: ${sipValue}`)
        console.log(`Cnpj: ${cpfValue}`)


        var exist = resultado.querySelector('.popup')

        if (exist !== null) {
            // console.log('exite');
        } else {
            var popup = document.createElement('div');
            popup.classList.add('popup');
            resultado.appendChild(popup);
            // console.log('Não Existe')

        }

        // resultado.appendChild(popup);

        // Adiciona dois botões ao pop-up
        var button1 = document.createElement('button');
        // button1.textContent = 'Instalar';
        button1.classList.add('btn-1');
        button1.innerHTML = `
        <p class="paragraph-1">Instalar</p>
        <span class="icon-wrapper-1">
        <svg class="icon-1" width="32px" height="32px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M41.4004 11.551L36.3332 5H11.6666L6.58398 11.551" stroke="#828282" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 13C6 11.8954 6.89543 11 8 11H40C41.1046 11 42 11.8954 42 13V40C42 41.6569 40.6569 43 39 43H9C7.34315 43 6 41.6569 6 40V13Z" fill="#2F88FF" stroke="#828282" stroke-width="4" stroke-linejoin="round"></path> <path d="M32 27L24 35L16 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M23.9917 19V35" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </span>
        `

        popup.appendChild(button1);

        // Adiciona dois botões ao pop-up
        var button2 = document.createElement('button');
        // button2.textContent = 'Remover';
        button2.classList.add('btn-2');
        button2.innerHTML = `
        <p class="paragraph-2">Remover</p>
        <span class="icon-wrapper-2">
        <svg class="icon-2" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:#1a73e8;}.cls-2{fill:#ffffff;}.cls-3{fill:#828282;}</style> </defs> <g id="Icons"> <path class="cls-1" d="M20,5V20a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5Z"></path> <path class="cls-2" d="M20,5V15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5Z"></path> </g> <g data-name="Layer 4" id="Layer_4"> <path class="cls-3" d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"></path> <path class="cls-3" d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"></path> <path class="cls-3" d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"></path> <path class="cls-3" d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"></path> </g> </g></svg>
        </span>
        `;


        popup.appendChild(button2);

    }

})





document.getElementById('resultado').addEventListener('click', function (event) {
    // var popup = document.querySelector('.popup');
    if (!event.target.classList.contains('button1')) {
        console.log('click')

        //     urlAcess = `http://localhost:8080/${cpfValue}/${sipValue}/install/1`

        //     console.log(urlAcess)

        //     fetch(urlAcess, {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     }).then(response => response.json())
        //         .then(data => { console.log(JSON.stringify(data)) })

        // })

    }
})



// urlAcess = `http://localhost:8080/${cpfValue}/${sipValue}/install/1`

// console.log(urlAcess)

// fetch(urlAcess, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// }).then(response => response.json())
//     .then(data => { console.log(JSON.stringify(data)) })
