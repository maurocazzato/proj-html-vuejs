<script>
  export default {
    name: 'appHome',

  };
</script>

<template>
  <!-- jumbo home -->
  <div class="backgroundbox">
        <div class="jumbo-script">
            <h1>Welcome to <br>DogMilo Pets</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          
            <div class="btn-jumbo">
                <button type="button" class="custom-btn-orange">Get Started</button>
                <button type="button" class="custom-btn"><i class="fa-regular fa-circle-play"></i></button>
            </div>
          </div>
    </div>

<main>

<!-- io lo dividerei in 4 sezioni
   1) Welcome DogMilo Pets
   2) DogMilo Pet Care Services For Your Best Friends.
   3) Why Choose Us?
   4) Over 8000 Customers With 5-star Reviews

   Ci sara ovviamente una foto di Carmen. quella laterale nella seconda sezione
 -->

<!-- Inizia la sezione di benvenuto per DogMilo -->
<section id="Welcome-DogMilo">

<!-- Contenitore principale della sezione di benvenuto per DogMilo -->
<div class="container Welcome-DogMilo-container">

    <!-- Parte sinistra della card con un'immagine -->
    <div class="cardleft">
        <img class="image" src="../../img/imgs/assets/IMG_3129.JPG" alt="">
    </div>

    <!-- Parte destra della card con il testo informativo -->
    <div class="textCard">
        <!-- Sottotitolo "About Us" con icona di una zampa -->
        <h3> <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> about us</h3>
        
        <!-- Titolo principale della sezione -->
        <h1>Welcome DogMilo Pets</h1>

        <!-- Contenitore per i paragrafi informativi -->
        <div id="P-container">
          <!-- Paragrafo 1 con testo Lorem Ipsum -->
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam accusamus reiciendis, commodi quibusdam aut! Voluptate doloremque molestias suscipit officia omnis neque, corporis, ad at blanditiis consectetur aspernatur ratione obcaecati?</p>

          <!-- Paragrafo 2 con testo Lorem Ipsum -->
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit maiores necessitatibus sequi. Perspiciatis natus earum rerum a tempore, vitae numquam porro omnis cupiditate, ipsam voluptas et voluptates nisi ducimus.</p>
        </div>

    </div>
</div>

</section>


 <!-- Inizia la sezione dedicata ai servizi di cura per DogMilo -->
<section id="DogMilo-Pet-Care-Services">

<!-- Contenitore principale per i servizi di cura -->
<div class="container Pet-Care-container">
    <!-- Sottotitolo "Services" -->
    <p>Services</p>

    <!-- Titoli principali della sezione -->
    <h1>DogMilo Pet Care Services </h1>
    <h1>For Your Best Friends.</h1>
    
    <!-- Contenitore per i cinque servizi offerti -->
    <div class="five-service">

        <!-- Servizio 1 -->
        <div class="service">
            <div class="service-text">
                <!-- Titolo del servizio -->
                <h3 class="service-title">Pet Security</h3> 
                
                <!-- Descrizione del servizio -->
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                
                <!-- Immagine rappresentativa del servizio -->
                <img src="../../img/imgs/assets/right.png" alt="">
            </div>
        </div>

        <!-- Servizio 2 -->
        <div class="service">
            <div class="service-text">
                <h3 class="service-title">Night Care</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
            </div>
        </div>

        <!-- Servizio 3 -->
        <div class="service">
            <div class="service-text">
                <h3 class="service-title">Puppy Sitting</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
            </div>
        </div>

        <!-- Servizio 4 -->
        <div class="service">
            <div class="service-text">
                <h3 class="service-title">Coat Handler Pets</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
            </div>
        </div>

        <!-- Servizio 5 -->
        <div class="service">
            <div class="service-text">
                <h3 class="service-title">Coat Handler Pets</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
            </div>
        </div> 
    </div>
</div>

</section>

 <!-- Inizia la sezione "Why Choose Us?" -->
<section id="whyUs">

<!-- Contenitore principale per la sezione "Why Choose Us?" -->
<div class="container why-us-container">

    <!-- Immagine a lato nella sezione -->
    <div id="immagine-lato">
        <img id="carmen-sideimage" src="../../img/imgs/assets/carmen.jpg" alt="">
    </div>

    <!-- Lista dei motivi per scegliere -->
    <div id="chooseus-why-list">

        <!-- Sottotitolo "Choose us" con icona di una zampa -->
        <p>  <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> Choose us</p>

        <!-- Titolo principale della sezione "Why Choose Us?" -->
        <h1 id="why-title">Why choose us</h1>

        <!-- Primo motivo -->
        <div id="why-one">
            <!-- Immagine rappresentativa del motivo -->
            <div class="why-image">
                <img src="../../img/imgs/assets/w-3.png" alt="">
            </div>
            <!-- Testo del motivo -->
            <div>
                <h3>Safety first</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>

        <!-- Secondo motivo -->
        <div id="why-two">
            <div class="why-image">
                <img src="../../img/imgs/assets/w-2.png" alt="">
            </div>
            <div>
                <h3>Play Yards</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>

        <!-- Terzo motivo -->
        <div id="why-three">
            <div class="why-image">
                <img src="../../img/imgs/assets/w-1.png" alt="">
            </div>
            <div>
                <h3>Monitor Your Pet </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
    </div>
</div>
</section>


<!-- Inizia la sezione "Over 8000 Customers With 5-star Reviews" -->
<section id="costumers-reviews">
    <!-- Contenitore principale per la sezione delle recensioni dei clienti -->
    <div class="container costumers-reviews-container">

        <!-- Primo blocco contenitore -->
        <div class="container blocco-container">
            <!-- Contenitore del testo per il primo blocco -->
            <div class="text-container">
                <!-- Sottotitolo "Review & Rating" con icona di una zampa -->
                <p> <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> Review & Rating</p>
                <!-- Titoli principali della sezione -->
                <h1>Over 8000 Customers </h1>
                <h1>With 5-star Reviews</h1>
                <!-- Testo informativo sulla sezione delle recensioni -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi nesciunt veniam. Voluptatibus aliquam dolorum facilis fuga molestiae dolore iusto odio nihil illo quisquam, voluptate obcaecati ipsam pariatur non mollitia.</p>
            </div>
        </div>

        <!-- Secondo blocco contenitore -->
        <div class="container blocco-container">
            <!-- Contenitore del testo per il secondo blocco -->
            <div class="text-container">
                <!-- Punteggio di recensione (5 stelle) -->
                <br>
                <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i></p>
                <!-- Titolo della recensione -->
                <h1>Grate Place</h1>
                <!-- Testo della recensione -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque totam blanditiis. Maxime alias harum modi, facilis, sed fugiat est quod dolorum ipsa molestias earum culpa provident asperiores exercitationem odit!</p>
            </div>
        </div>

        <!-- Terzo blocco contenitore -->
        <div class="container blocco-container">
            <!-- Contenitore del testo per il terzo blocco -->
            <div class="text-container">
                <!-- Punteggio di recensione (5 stelle) -->
                <br>
                <p><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i></p>
                <!-- Titolo della recensione -->
                <h1>Grate Place</h1>
                <!-- Testo della recensione -->
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut delectus, obcaecati id quisquam saepe alias molestiae? Iusto quod tempora facilis facere ex voluptatum provident commodi perspiciatis. Sint doloribus nihil nemo.</p>
            </div>
        </div>

    </div>
</section>



</main>
</template>

<style lang="scss" scoped>


*{
   
    font-family: 'Cabin', sans-serif;
}
// jumbo style
.backgroundbox {
  width: 100%;
  height: 500px;
  background-image: url('../../assets/b.png');
  background-size: cover;
}
.jumbo-script{
  padding: 150px 300px 150px 20px;
    color: white;
}
.jumbo-script p{
margin-top: 20px;
}
.btn-jumbo {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

.custom-btn {
      border-radius: 15px;
      background-color: rgba(0,215,236,255);
      color: #fff;
      padding: 10px 20px;
      font-size: 15px;
      cursor: pointer;
      border: none;
      outline: none;
    }
.custom-btn-orange {
      border-radius: 15px; 
      background-color: rgba(206,124,42,255);
      color: #fff;
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
      border: none;
      outline: none;
      margin-right: 20px;
    }

main{
    width: 50vw;
    margin: auto;
}

/* Stile per la sezione di benvenuto DogMilo */
.Welcome-DogMilo-container {
    /* Distanza superiore rispetto al contenuto precedente */
    margin-top: 10%;
    width: 100%;
    /* Sfondo azzurro chiaro */
    /* background-color: lightblue; */
    border: 0;
    /* Layout flessibile con spaziatura uniforme */
    display: flex;
    justify-content: center;
    justify-content: space-around;
    /* Distanza inferiore rispetto al contenuto successivo */
    margin-bottom: 10%;

    /* Debugging */
    /* Altezza fissa per debugging */
    /* height: 300px; */

    /* Stile per la parte sinistra della card */
    .cardleft {
        width: 500px;
        height: 500px;
        /* Margine sinistro per la parte sinistra */
        // margin-left: 20%;

        /* Immagine a grandezza massima */
        .image {
            width: 500px;

            /* Debugging */
            height: 500px;
        }
    }

    /* Stile per la parte destra della card contenente il testo */
    .textCard {
        /* Margine sinistro per separare la parte sinistra e destra */
        margin-left: 10%;
        /* Larghezza massima per il testo */
        max-width: 50%;
        /* Debugging */
        max-height: 3000px;

        /* Stili per il testo all'interno della parte destra */
        h1 {
            /* Dimensione del titolo principale */
            font-size: 3rem;
        }

        /* Contenitore per i paragrafi */
        #P-container {
            /* Altezza della riga per migliorare la leggibilità */
            line-height: 30px;
            /* Margine destro per allineare il testo a destra */
            // margin-right: 1003px;
        }
    }
}

/* Stile per la sezione dedicata ai servizi di cura per DogMilo */
.Pet-Care-container {
    /* Allinea il testo al centro della sezione */
    text-align: center;

    /* Stile per il titolo principale della sezione */
    h1 {
        /* Dimensione del titolo principale */
        font-size: 3rem;
    }

    /* Contenitore per i cinque servizi offerti */
    .five-service {
        /* Occupa l'intera larghezza della sezione */
        width: 100%;
        /* Centra il contenuto orizzontalmente */
        margin: auto;
        /* Layout flessibile con spaziatura uniforme */
        display: flex;
        justify-content: center;

        /* Stile per ogni singolo servizio */
        .service {
            /* Sfondo colore arancione */
            background-color: #ce7c2a;
            /* Larghezza minima */
            min-width: 200px;
            /* Altezza minima */
            min-height: 100px;
            /* Margine a sinistra */
            margin-left: 40px;
            /* Margine superiore */
            margin-top: 20px;
            /* Testo centrato */
            text-align: center;
            /* Padding del 2% */
            padding: 2%;
            /* Bordi arrotondati al 45% */
            border-radius: 45%;

            /* Stile quando il mouse passa sopra il servizio */
            &:hover {
                background-color: #7f7045;
                color: white;
            }

            /* Stile per il testo all'interno del servizio */
            .service-text {
                /* Colore del testo bianco */
                color: #fff;
                /* Padding di 10px */
                padding: 10px;
                /* Occupa l'intera larghezza del servizio */
                width: 100%;

                /* Stile per l'icona immagine */
                img {
                    /* Padding di 20px */
                    padding: 20px;
                    /* Sfondo colore giallo */
                    background-color: rgb(255, 201, 63);
                    /* Margine superiore di 10px */
                    margin-top: 10px;
                    /* Larghezza dell'immagine */
                    width: 20px;
                    /* Bordi arrotondati al 50% */
                    border-radius: 50%;

                    /* Stile quando il mouse passa sopra l'immagine */
                    &:hover {
                        background-color: rgb(255, 228, 161);
                        color: white;
                    }
                }
            }
        }
    }
}


/* Stile per la sezione "Why Choose Us?" */
.why-us-container {

/* Stile per l'immagine laterale (carmen) */
#carmen-sideimage {
    /* Larghezza al 75% rispetto al contenitore */
    width: 75%;
    /* Altezza al 75% rispetto al contenitore */
    height: 75%;
    /* Spostamento verso l'alto di 100px */
    margin-top: 100px;
    /* Spostamento a sinistra del 50% rispetto al contenitore */
    margin-left: -50%;
}

/* Contenitore principale per la lista di motivi */
#chooseus-why-list {
    /* Spostamento verso l'alto del 60% rispetto al contenitore */
    margin-top: -60%;
    /* Spostamento a sinistra del 50% rispetto al contenitore */
    margin-left: 50%;
    /* Margine inferiore del 10% rispetto al contenitore */
    margin-bottom: 10%;

    /* Stile per il titolo principale della sezione */
    h1 {
        /* Dimensione del titolo principale */
        font-size: 3rem;
    }

    /* Stile per ciascun motivo nella lista */
    #why-one, #why-two, #why-three {
        /* Margine inferiore di 40px */
        margin-bottom: 40px;

        /* Stile per il sottotitolo del motivo */
        h3 {
            /* Dimensione del sottotitolo */
            font-size: 1.5rem;
        }

        /* Stile per l'immagine rappresentativa del motivo */
        img {
            /* Larghezza al 15% rispetto al contenitore */
            width: 15%;
        }
    }
}
}

/* Sezione delle recensioni dei clienti */
.costumers-reviews-container {
    margin-bottom: 300px;
    width: 80%;
    height: 300px;
    margin-left: 15%;
    display: flex;
    padding-bottom: 300px; /* Aggiunto padding per separazione */
    /* Debugging */
    /* background-color: lightblue; */

    /* Contenitore principale per le recensioni */
    .blocco-container {
        width: 80%;
        margin: auto;
        margin-left: -15%;
        display: block;
        padding-left: 100px;
        padding-right: 100px;
        /* Debugging */
        /* background-color: lightpink; */

        /* Contenitore del testo */
        .text-container {
            line-height: 30px;
            /* Titolo delle recensioni */
            h1 {
                font-size: 2rem;
                line-height: 30px;
            }
        }
    }
}

/* Media query per schermi più piccoli (max-width: 768px) */
@media (max-width: 768px) {
    main {
        width: 100vw;
        margin: auto;
    }

    /* Stile per la sezione di benvenuto DogMilo */
    .Welcome-DogMilo-container {
        margin-top: 10%;
        width: 100%;
        /* background-color: lightblue; */
        display: block;
        margin-bottom: 10%; /* Ridotto il margine inferiore */
        /* Debugging */
        /* height: 300px; */

        /* Stile per la parte sinistra della card */
        .cardleft {
            width: 70%;
            margin: auto;
            /* Debugging */
            /* min-height: 5000px; */
            /* Margin-left ridotto */
            /* margin-left: 20%; */

            /* Immagine a grandezza massima */
            .image {
                width: 100%;
                /* Debugging */
                height: 100%;
            }
        }

        /* Stile per la parte destra della card contenente il testo */
        .textCard {
            width: 90%;
            margin: auto;
            margin-left: 24%;
            /* Debugging */
            /* max-height: 300px; */

            h1 {
                font-size: 3rem;
            }

            /* Contenitore per i paragrafi */
            #P-container {
                line-height: 20px;
                /* Margin-right ridotto */
                /* margin-right: 1003px; */
            }
        }
    }

    /* Stile per la sezione dei servizi di cura per DogMilo */
    .Pet-Care-container {
        text-align: center;

        h1 {
            font-size: 3rem;
        }

        .five-service {
            width: 50%;
            margin: auto;
            /* Debugging */
            /* background-color: aqua; */
            display: block;

            /* Stile per ogni singolo servizio */
            .service {
                background-color: #ce7c2a;
                min-width: 20%;
                min-height: 100px;
                margin-left: -10px;
                margin-right: 10px;
                margin-top: 20px;
                /* Bordi arrotondati al 45% */
                border-radius: 45%;
                text-align: center;

                /* Stile quando il mouse passa sopra il servizio */
                &:hover {
                    background-color: #7f7045;
                    color: white;
                }

                /* Stile per il testo all'interno del servizio */
                .service-text {
                    color: #fff;
                    padding: 10px;
                    width: 100%;

                    /* Stile per l'icona immagine */
                    img {
                        padding: 20px;
                        background-color: rgb(255, 201, 63);
                        margin-top: 10px;
                        width: 20px;
                        /* Bordi arrotondati al 50% */
                        border-radius: 50%;

                        /* Stile quando il mouse passa sopra l'immagine */
                        &:hover {
                            background-color: rgb(255, 228, 161);
                            color: white;
                        }
                    }
                }
            }
        }
    }

    /* Stile per la sezione "Why Choose Us?" */
    .why-us-container {
        /* Debugging */
        /* display: flex; */

        /* Stile per l'immagine laterale (Carmen) */
        #carmen-sideimage {
            width: 75%;
            height: 75%;
            margin-top: 100px;
            margin-left: 12%; /* Modificato margine sinistro */
        }

        /* Stile per la lista di motivi "Why Choose Us?" */
        #chooseus-why-list {
            margin-left: 3%;
            margin-bottom: 10%;
            margin-top: 10%;
            width: 80%;

            h1 {
                font-size: 3rem;
            }

            /* Stile per ogni motivo nella lista */
            #why-one, #why-two, #why-three {
                margin-bottom: 40px;

                h3 {
                    font-size: 1.5rem;
                }

                img {
                    width: 15%;
                }
            }
        }
    }

    .costumers-reviews-container {
    margin-bottom: 300px;
    width: 80%;
    height: 300px;
    margin-left: 15%;
    display: block;
    padding-bottom: 300px; /* Aggiunto padding per separazione */
    /* Debugging */
    /* background-color: lightblue; */

    /* Contenitore principale per le recensioni */
    .blocco-container {
        width: 80%;
        margin: auto;
        margin-left: -15%;
        display: block;
        padding-left: 100px;
        padding-right: 100px;
        /* Debugging */
        /* background-color: lightpink; */

        /* Contenitore del testo */
        .text-container {
            line-height: 30px;
            /* Titolo delle recensioni */
            h1 {
                font-size: 2rem;
                line-height: 30px;
            }
        }
    }
}
}


</style>