document.getElementById('resultado').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-select')) {


        var resultado = document.getElementById('resultado');
        var sipValue = event.target.parentNode.textContent.replace('Selecionar', '').trim();
        var cpfValue = document.getElementById('endpointInput').value;
        console.log(`Botão clicado é do sip: ${sipValue}`)
        console.log(`Cnpj: ${cpfValue}`)


        var exist = resultado.querySelector('.popup')
        var popup = document.createElement('div');
        var ramalNumber = document.createElement('p');
        var divRamalandClose = document.createElement('div');
        ramalNumber.innerHTML = `Ramal selecionado ${sipValue}`
        divRamalandClose.appendChild(ramalNumber);




        if (exist !== null) {
        } else {


            var teste = sipValue
            popup.classList.add('popup');
            resultado.appendChild(popup);
            var buttonClose = document.createElement('button');
            buttonClose.classList.add('btn-close');
            divRamalandClose.classList.add('divRamalandClose');
            popup.appendChild(divRamalandClose);
            ramalNumber.classList.add('ramalNumber');
            popup.appendChild(buttonClose);

            console.log(teste)
            buttonClose.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="#94d9f7" stroke-width="4" stroke-linejoin="round"></path> <path d="M29.6569 18.3431L18.3432 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.3432 18.3431L29.6569 29.6568" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;

            if (teste === 'undefined') {
                console.log("Banana")
            }



            var button1 = document.createElement('button');
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

            button2.classList.add('btn-2');
            button2.innerHTML = `
            <p class="paragraph-2">Remover</p>
            <span class="icon-wrapper-2">
            <svg class="icon-2" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:#1a73e8;}.cls-2{fill:#ffffff;}.cls-3{fill:#828282;}</style> </defs> <g id="Icons"> <path class="cls-1" d="M20,5V20a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5Z"></path> <path class="cls-2" d="M20,5V15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5Z"></path> </g> <g data-name="Layer 4" id="Layer_4"> <path class="cls-3" d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"></path> <path class="cls-3" d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"></path> <path class="cls-3" d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"></path> <path class="cls-3" d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"></path> </g> </g></svg>
            </span>
            `;

            popup.appendChild(button2);


            var text = document.createElement('p');
            text.classList.add('text-result');

            popup.appendChild(text);


        }

    }

    button1.addEventListener('click', function () {

        var urlAcess = `http://localhost:8080/${cpfValue}/${sipValue}/install/1`
        var text = popup.querySelector('.text-result');
        text.innerHTML = '';

        fetch(urlAcess, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
            .then(data => {
                var cliente = data.cliente;
                var ramal = data.ramal;

                if (data.status === true) {
                    text.innerHTML = `
                    <svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" id="check-circle" xmlns="http://www.w3.org/2000/svg" class="icon multi-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><ellipse id="secondary-fill" cx="10.5" cy="12" rx="7.5" ry="8.88" style="fill: #94d9f7; stroke-width: 2;"></ellipse><path id="primary-stroke" d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12ZM8,12l3,3,5-5" style="fill: none; stroke: #828282; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                    <p class="text-result-p-1">O ramal ${ramal} foi instalado</p>`;

                } else {
                    text.innerHTML = `
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#94d9f7;" d="M401.392,171.232H432c44,0,80,35.936,80,79.872v15.968c0,43.92-36,79.872-80,79.872H80 c-44,0-80-35.936-80-79.872v-15.968c0-40.96,31.424-74.592,71.328-78.992c-0.784-5.52-1.328-11.12-1.328-16.848 c0-65.616,53.28-118.8,118.992-118.8c50.464,0,93.488,31.424,110.8,75.68c0,0,26.672-12.24,60.016-0.448 C401.264,126.368,401.392,171.232,401.392,171.232z"></path> <path d="M419.984,456.248V234.424c0-5.304-4.336-9.648-9.648-9.648H101.792c-5.304,0-9.648,4.336-9.648,9.648V456.24 C92.144,456.248,420.792,456.248,419.984,456.248z"></path> <rect x="106.616" y="237.64" style="fill:#1a73e8;" width="298.88" height="218.608"></rect> <rect x="63.112" y="456.24" style="fill:#cdcdcd;" width="385.76" height="6.432"></rect> <polygon style="fill:#828282;" points="429.6,475.536 82.4,475.536 63.112,462.68 448.888,462.68 "></polygon> <g> <rect x="151.168" y="298.88" style="fill:#FFFFFF;" width="209.68" height="8"></rect> <rect x="151.168" y="339.728" style="fill:#FFFFFF;" width="209.68" height="8"></rect> <rect x="151.168" y="380.552" style="fill:#FFFFFF;" width="209.68" height="8"></rect> </g> </g></svg>
                    <p class="text-result-p-1">Desculpe não conseguimos instalar, por favor remova e tente novamente</p>
                    `
                }

                console.log(data);

            });

    });


    button2.addEventListener('click', function () {

        var text = popup.querySelector('.text-result');


        text.innerHTML = '';

        console.log(text)

        var urlAcess = `http://localhost:8080/${cpfValue}/uninstall`

        fetch(urlAcess, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(response => response.json())
            .then(data => {

                console.log(data.removido)

                if (data.removido == false) {
                    text.innerHTML = `
                    <div class="div-text-result">
                        <svg class="text-result-svg-1" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2.83364C11.7897 2.75595 11.1622 2.75005 10.0325 2.75005C8.11516 2.75005 6.75231 2.75163 5.71904 2.88987C4.70675 3.02531 4.12505 3.27937 3.70224 3.70204C3.27888 4.12526 3.02515 4.70489 2.88984 5.71093C2.75163 6.73858 2.75004 8.09322 2.75004 10.0001V11.9397C2.75004 12.0247 2.75006 12.0794 2.75071 12.1201C2.75115 12.1474 2.75179 12.1594 2.75193 12.1622C2.77303 12.3333 2.95788 12.4327 3.11269 12.355C3.11507 12.3535 3.12546 12.3474 3.14844 12.3326C3.18268 12.3106 3.22827 12.2802 3.29895 12.2331C4.32966 11.5462 5.67238 11.5462 6.70309 12.2331C7.48963 12.7573 8.51437 12.7573 9.30092 12.2331C10.3316 11.5462 11.6743 11.5462 12.705 12.2331C13.4916 12.7573 14.5163 12.7573 15.3029 12.2331C16.3336 11.5462 17.6763 11.5462 18.707 12.2331C19.4749 12.7449 20.4699 12.757 21.2486 12.2694C21.2331 11.5536 21.1872 11.1061 21.0822 10.7501H17.9464C16.8135 10.7501 15.8878 10.7501 15.1569 10.6518C14.393 10.5491 13.7306 10.3268 13.2019 9.79815C12.6732 9.26945 12.451 8.60712 12.3483 7.84317C12.25 7.1123 12.25 6.18657 12.25 5.05374V2.83364ZM13.75 3.60621V5.00005C13.75 6.19976 13.7516 7.0241 13.8349 7.64329C13.9152 8.24091 14.0591 8.53395 14.2626 8.73749C14.4661 8.94103 14.7592 9.08486 15.3568 9.16521C15.976 9.24846 16.8003 9.25005 18 9.25005H20.0256C19.729 8.96252 19.3491 8.61801 18.8558 8.17415L14.8957 4.61125C14.4079 4.17239 14.0455 3.84897 13.75 3.60621ZM10.1781 1.25002C11.5632 1.24966 12.458 1.24942 13.2815 1.56532C14.105 1.88124 14.7671 2.47726 15.7916 3.3995C15.827 3.43133 15.8628 3.46354 15.899 3.49615L19.8591 7.05904C19.9012 7.09698 19.9429 7.13443 19.984 7.17143C21.1681 8.23605 21.9337 8.92449 22.3456 9.84894C22.665 10.566 22.7314 11.3208 22.7498 12.3135C22.7586 12.7861 22.5228 13.224 22.1367 13.4813C20.8464 14.3412 19.1655 14.3412 17.8751 13.4813C17.3482 13.1301 16.6617 13.1301 16.1347 13.4813C14.8444 14.3412 13.1635 14.3412 11.8732 13.4813C11.3462 13.1301 10.6597 13.1301 10.1328 13.4813C8.84247 14.3412 7.16153 14.3412 5.87122 13.4813C5.34428 13.1301 4.65776 13.1301 4.13082 13.4813C4.12065 13.4881 4.11049 13.4949 4.10035 13.5016C3.99516 13.5719 3.89221 13.6406 3.8042 13.6861C2.7139 14.2496 1.39658 13.5453 1.26078 12.3251C1.24982 12.2266 1.24992 12.1028 1.25002 11.9764C1.25003 11.9642 1.25004 11.952 1.25004 11.9397L1.25004 9.94362C1.25002 8.10587 1.25001 6.65023 1.40323 5.511C1.56091 4.33853 1.89315 3.38956 2.64175 2.64121C3.3909 1.8923 4.34326 1.56058 5.52012 1.40312C6.66442 1.25002 8.12775 1.25003 9.9762 1.25005L10.0325 1.25005C10.0816 1.25005 10.1302 1.25004 10.1781 1.25002ZM5.87122 17.4813C5.34428 17.1301 4.65776 17.1301 4.13082 17.4813L3.50462 17.8986C3.23667 18.0772 3.09148 18.1755 2.99303 18.2599C2.95012 18.2967 2.93103 18.3188 2.92289 18.3294C2.91659 18.3375 2.91459 18.3416 2.91241 18.3472L2.91189 18.3485C2.90502 18.366 2.89911 18.3809 2.90519 18.4446C2.91456 18.5426 2.94383 18.6724 3.00787 18.941C3.15512 19.5588 3.37674 19.9727 3.70224 20.2981C4.12563 20.7213 4.70555 20.975 5.71204 21.1103C6.74008 21.2485 8.09522 21.2501 10.0027 21.2501H14.004C15.9114 21.2501 17.2665 21.2485 18.2946 21.1103C19.3011 20.975 19.881 20.7213 20.3044 20.2981C20.7777 19.8249 21.0337 19.1631 21.1559 17.9503C20.0657 18.2922 18.8573 18.1358 17.8751 17.4813C17.3482 17.1301 16.6617 17.1301 16.1347 17.4813C14.8444 18.3412 13.1635 18.3412 11.8732 17.4813C11.3462 17.1301 10.6597 17.1301 10.1328 17.4813C8.84247 18.3412 7.16153 18.3412 5.87122 17.4813ZM3.29895 16.2331C4.32966 15.5462 5.67238 15.5462 6.70309 16.2331C7.48963 16.7573 8.51437 16.7573 9.30092 16.2331C10.3316 15.5462 11.6743 15.5462 12.705 16.2331C13.4916 16.7573 14.5163 16.7573 15.3029 16.2331C16.3336 15.5462 17.6763 15.5462 18.707 16.2331C19.4936 16.7573 20.5183 16.7573 21.3048 16.2331C21.9217 15.822 22.7521 16.2805 22.7211 17.0289C22.643 18.9115 22.3944 20.3297 21.3649 21.3589C20.6163 22.1072 19.6671 22.4393 18.4944 22.5969C17.3548 22.7501 15.8988 22.7501 14.0604 22.7501H9.94622C8.10785 22.7501 6.65178 22.7501 5.51223 22.5969C4.3395 22.4393 3.39032 22.1072 2.64175 21.3589C2.07476 20.7921 1.74372 20.1068 1.54875 19.2888C1.54199 19.2604 1.53504 19.2318 1.52803 19.2029C1.42725 18.7868 1.31309 18.3156 1.51639 17.7984C1.63157 17.5054 1.81385 17.2951 2.01648 17.1214C2.19255 16.9703 2.41575 16.8216 2.6442 16.6694L3.29895 16.2331Z" fill="#828282"></path> </g></svg>
                        <p class="text-result-p-1">Sem arquivo para Remover</p>
                    </div>
                    `;
                } else {
                    text.innerHTML = `
                    <div class="div-text-result">
                        <svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" id="check-circle" xmlns="http://www.w3.org/2000/svg" class="icon multi-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><ellipse id="secondary-fill" cx="10.5" cy="12" rx="7.5" ry="8.88" style="fill: #94d9f7; stroke-width: 2;"></ellipse><path id="primary-stroke" d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12ZM8,12l3,3,5-5" style="fill: none; stroke: #828282; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                        <p class="text-result-p-1">Removido com sucesso</p>
                    </div>
                    `;

                }




            });

    });

    buttonClose.addEventListener('click', mixEvent)


});


function mixEvent() {
    var resultado = document.getElementById('resultado');
    var exist = resultado.querySelector('.resultado-list');

    if (exist !== null) {
        Clear2()
    }

    executarEndPoint()
}

