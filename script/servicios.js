

const textos = [
        "En tu cumpleaños, tú eres la estrella… nosotros nos encargamos del resto🎂",

        "Hacemos de tu evento corporativo una experiencia impecable,Tu empresa brilla, nosotros creamos el escenario perfecto👩🏻‍💻",

        "Hacemos de tu boda un momento tan perfecto como lo soñaste!👰🏻🤵🏻"
    ];

  
    const textoDebajo = document.getElementById("textoDebajo");
    const carousel = document.getElementById("carouselBasicExample");

    carousel.addEventListener("slid.mdb.carousel", function (event) {
      
        let index = event.to; 
        textoDebajo.textContent = textos[index];
    });

  
    textoDebajo.textContent = textos[0];
