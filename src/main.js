document.addEventListener('DOMContentLoaded', function() {
    const inputCode = document.querySelector('#input-code'); 
    const labelInput = document.querySelector('#label-input');
    const inputSubmit = document.querySelector('#input-submit');
    const ruleta = document.getElementById('ruleta');

    const prueba = document.querySelector('.prueba-svg');
    



    const player = new Plyr('#video-ganador', {
        fluid: true,
        ratio: '16:9',

        speed: {
            options: [0.5, 1, 1.5, 2]

        }
    });


    const campoPremios = {
        iphone: 'premio-iphone',
        soles50: 'premio-50so',
        soles100: 'premio-100so',
        opc100: 'premio-100opc',
        opc500: 'premio-500opc',
        opc200: 'girar-200opc',
        opc1000: 'premio-1000opc',
        soles20: 'premio-20so',
    }

    const premiosPosible = {
        iphone: 'girar-iphone',
        soles50: 'girar-soles50',
        soles100: 'girar-soles100',
        opc100: 'girar-100opc',
        opc500: 'girar-500opc',
        opc200: 'girar-200opc',
        opc1000: 'girar-1000opc',
        soles20: 'girar-soles20',
    }

    inputSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        const { 
            iphone, 
            soles50, 
            soles100, 
            opc100, 
            opc500, 
            opc200,
            opc1000,
            soles20

        } = premiosPosible;

        if(inputCode.value.trim() !== '') {
            ruleta.classList.add(`${iphone}`); 
        }

        setTimeout(() => {
            document.querySelector(`.${campoPremios.iphone}`).classList.remove('cls-11')
            document.querySelector(`.${campoPremios.iphone}`).classList.add('bg-premio')
        }, 10000);

    })

    document.getElementById('confettiButton').addEventListener('click', function () {
        // Obtener el canvas dentro del card
        const canvas = document.getElementById('confettiCanvas');
        const card = document.querySelector('.hola');
      
        // Configurar el tamaño del canvas para que coincida con el card
        canvas.width = card.offsetWidth;
        canvas.height = card.offsetHeight;
      
        // Crear un contexto específico para el canvas
        const confettiCtx = confetti.create(canvas, { resize: false });
      
        // Generar confeti dentro del card
        confettiCtx({
          particleCount: 150, // Número de partículas
          spread: 70, // Ángulo de dispersión
          startVelocity: 30, // Velocidad inicial
          gravity: 0.4, // Gravedad para caída más lenta
          origin: {
            x: 0.5, // Centro horizontal
            y: 0.5, // Centro vertical dentro del card
          },
          colors: ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'], // Colores personalizados
          scalar: 1.2, // Tamaño de las partículas
        });
      
        // Opcional: Limpiar el canvas después de unos segundos
        setTimeout(() => confettiCtx.reset(), 5000); // Detener confeti después de 5 segundos
      });
        



    

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

    


    // Opcion mas simple 
    // const thumbnailVideo = document.querySelector('#thumbnail-video');
    // const video = document.querySelector('#video-ganador');

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
    // thumbnailVideo.addEventListener('click', showVideo)
})

