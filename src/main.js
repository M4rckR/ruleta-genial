document.addEventListener('DOMContentLoaded', function() {

    // Input para el código
    const inputCode = document.querySelector('#input-code'); 

    // Label del input
    const labelInput = document.querySelector('#label-input');

    // Botón para enviar el código
    const inputSubmit = document.querySelector('#input-submit');

    // Ruleta
    const ruleta = document.getElementById('ruleta');

    // Título del premio
    const titlePremio = document.getElementById('title-premio-modal');

    // Descripción del premio
    const descPremio = document.getElementById('description-premio-modal');

    // Botón para cerrar el modal
    const closeModal = document.getElementById('close-modal');

    // Modal del premio
    const modal = document.getElementById('modal-premio');


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


    const player = new Plyr('#video-ganador', {
        fluid: true,
        ratio: '16:9',

        speed: {
            options: [0.5, 1, 1.5, 2]

        }
    });
    let premio = 4;


    closeModal.addEventListener('click', function() {
        modal.classList.add('opacity-0', 'invisible');
        modal.classList.remove('opacity-100', 'visible');

        setTimeout(() => {  
            location.reload();
        }, 1000);
    });




    inputSubmit.addEventListener('click', function(e) {
        e.preventDefault();
         
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });

        // Deshabilitar el botón
        inputSubmit.setAttribute('disabled', true);
        inputSubmit.classList.add('cursor-not-allowed');

        if(inputCode.value.trim() !== '') {
            switch (premio) {
                case 1:         
                ruleta.classList.add(`${premiosPosible.iphone}`); 

                setTimeout(() => {
                    document.querySelector(`.${campoPremios.iphone}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.iphone}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '1 iPhone 16 Pro Max';
                    descPremio.classList.add('hidden')                        
                }, 10000);break;
                
                case 2: 
                ruleta.classList.add(`${premiosPosible.soles50}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.soles50}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.soles50}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '50 Soles';
                    descPremio.classList.add('hidden')
                }, 10000);break;

                
                case 3: 
                ruleta.classList.add(`${premiosPosible.soles100}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.soles100}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.soles100}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '100 Soles';
                    descPremio.classList.add('hidden')
                }, 10000);break;

                case 4: 
                ruleta.classList.add(`${premiosPosible.opc100}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.opc100}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.opc100}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '100 opciones geniales';
                    descPremio.innerHTML = 'Tienes 100 oportunidades más para ganar el Sorteo Genial.';
                }, 10000);break;

                case 5: 
                ruleta.classList.add(`${premiosPosible.opc500}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.opc500}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.opc500}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '500 opciones geniales';
                    descPremio.innerHTML = 'Tienes 500 oportunidades más para ganar el Sorteo Genial. ';
                }, 10000);break;

                case 6: 
                ruleta.classList.add(`${premiosPosible.opc200}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.opc200}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.opc200}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '200 opciones geniales';
                    descPremio.innerHTML = 'Tienes 200 oportunidades más para ganar el Sorteo Genial. ';
                }, 10000);break;

                case 7: 
                ruleta.classList.add(`${premiosPosible.opc1000}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.opc1000}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.opc1000}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '1000 opciones geniales';
                    descPremio.innerHTML = 'Tienes 1000 oportunidades más para ganar el Sorteo Genial. ';
                }, 10000);break;


                case 8: 
                ruleta.classList.add(`${premiosPosible.soles20}`); 
                setTimeout(() => {
                    document.querySelector(`.${campoPremios.soles20}`).classList.remove('cls-11')
                    document.querySelector(`.${campoPremios.soles20}`).classList.add('bg-premio')
                    titlePremio.innerHTML = '20 Soles';
                    descPremio.classList.add('hidden')
                }, 10000);break;

            }


            
        }




        setTimeout(() => {

            modal.classList.remove('opacity-0', 'invisible');


            // Obtener el canvas dentro del card
            const canvas = document.getElementById('confettiCanvas');
            const card = document.querySelector('.confeti-modal');
        
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
            colors: ['#AD96DC', '#20A6FF', '#C4D600', '#E4A9BB'], // Colores personalizados
            scalar: 1.2, // Tamaño de las partículas
            });
        
            // Opcional: Limpiar el canvas después de unos segundos
            setTimeout(() => confettiCtx.reset(), 5000); // Detener confeti después de 5 segundos
        }, 11000);

    })


        



    

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

