document.addEventListener('DOMContentLoaded', function() {
    const inputCode = document.querySelector('#input-code'); 
    const labelInput = document.querySelector('#label-input');
    const inputSubmit = document.querySelector('#input-submit');
    const ruleta = document.getElementById('ruleta');
    // const thumbnailVideo = document.querySelector('#thumbnail-video');
    // const video = document.querySelector('#video-ganador');


    const player = new Plyr('#video-ganador', {
        fluid: true,
        ratio: '16:9',

        speed: {
            options: [0.5, 1, 1.5, 2]

        }
    });

    const premiosPosible = {
        iphone: 'girar-iphone',
        soles50: 'girar-soles50',
        soles100: 'girar-soles100',
        opc100: 'girar-100opc',
    }

    inputSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        const {iphone, soles50, soles100, opc100} = premiosPosible;

        if(inputCode.value.trim() !== '') {
            ruleta.classList.add(`${opc100}`); 
        }
    })


        



    // // Función para mostrar el video en el thumbnail
    // function showVideo() {
    //     thumbnailVideo.classList.toggle('opacity-0');
    //     if (video.paused) {
    //         video.play();
    //     } else {
    //         video.pause();
    //     }
    // }

    // // Escucha el evento 'click' para mostrar el video
    // thumbnailVideo.addEventListener('click', showVideo);


    

    // Función para verificar el contenido del input y habilitar/deshabilitar el botón
    function checkInput() {
        if (inputCode.value.trim() !== '') {
            inputSubmit.removeAttribute('disabled');
        } else {
            inputSubmit.setAttribute('disabled', true);
        }
    }

    // Escucha los eventos 'focus' y 'blur' para cambiar el estado del label
    inputCode.addEventListener('focus', function() {
        labelInput.classList.add('top-0', '-translate-y-1/2');
        labelInput.classList.remove('top-1/2', 'translate-y-1/2');
    });
    
    inputCode.addEventListener('blur', function() {
        if (inputCode.value.trim() === '') {
            labelInput.classList.remove('top-0', 'translate-y-1/2');
            labelInput.classList.add('top-1/2', '-translate-y-1/2');
            inputCode.value = '';
        }
    });

    // Escucha los eventos 'input' para verificar el contenido mientras se escribe
    inputCode.addEventListener('input', checkInput);
    checkInput();

    
})

