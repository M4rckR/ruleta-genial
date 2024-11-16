document.addEventListener('DOMContentLoaded', function() {
    const inputCode = document.querySelector('#input-code'); 
    const labelInput = document.querySelector('#label-input');
    const inputSubmit = document.querySelector('#input-submit');
    // const thumbnailVideo = document.querySelector('#thumbnail-video');
    // const video = document.querySelector('#video-ganador');
    const player = new Plyr('#video-ganador', {
        fluid: true,
        ratio: '16:9',

        speed: {
            options: [0.5, 1, 1.5, 2]
        }
    });
      
      function mostrarPremio() {
        const segmentoGanador = ruleta.getIndicatedSegment();
        const premio = premiosConfig.find(p => p.text === segmentoGanador.text);
        const premioImg = document.getElementById('premio');
        premioImg.src = premio.premio;
        premioImg.classList.remove('hidden');
      }
      
      document.getElementById('form-ruleta').addEventListener('submit', function(e) {
        e.preventDefault();
        ruleta.startAnimation();
      });

    inputSubmit.addEventListener('click', function(e) {
        if(inputCode.value.trim() !== '') {
            console.log('hola');
        }else {
            console.log('adios');
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

