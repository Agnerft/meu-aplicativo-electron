document.getElementById('btn-whatsapp').addEventListener('click', function () {
    console.log('TESTE-CLICK')
    var resultado = document.getElementById('resultado');
    var cpfValue = document.getElementById('endpointInput').value;
    let banana;
    Teste(cpfValue).then(dadosRecebidos => {
        console.log(dadosRecebidos)

        banana = dadosRecebidos
        // Isso imprimirá os dados recebidos no console
    });

    console.log(banana)
    // var sipValue = event.target.parentNode.textContent.replace('Selecionar', '').trim();
    if (resultado.classList.contains('btn-select')) {
        console.log('Banana')
    }
    console.log(cpfValue)
    // console.log(sipValue)

})


async function Teste(cnpj) {
    var urlAcess = `http://localhost:8080/${cnpj}`

    try {
        const response = await fetch(urlAcess, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        console.log(data); // Aqui os dados estão disponíveis

        return data;
    } catch (error) {
        console.error(`Erro ao executar o Endpoint: ${error}`);
    }
}