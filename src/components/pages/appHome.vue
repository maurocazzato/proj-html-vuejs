<script>
  export default {
    name: 'appHome',

  };
</script>

<template>

  <!-- io lo dividerei in 4 sezioni
      1) Welcome DogMilo Pets
      2) DogMilo Pet Care Services For Your Best Friends.
      3) Why Choose Us?
      4) Over 8000 Customers With 5-star Reviews

      Ci sara ovviamente una foto di Carmen. quella laterale nella seconda sezione
  -->



<main>

<!-- io lo dividerei in 4 sezioni
   1) Welcome DogMilo Pets
   2) DogMilo Pet Care Services For Your Best Friends.
   3) Why Choose Us?
   4) Over 8000 Customers With 5-star Reviews

   Ci sara ovviamente una foto di Carmen. quella laterale nella seconda sezione
 -->

 <!-- iniziamo con la macro struttura  -->

 <!--  sezione 1  -->

 <section id="Welcome-DogMilo">

    <div class="container Welcome-DogMilo-container">

    <!-- <div class="cardright"></div> -->
        <div class="cardleft">
            <img class="image" src="../img/imgs/assets/IMG_3129.JPG" alt="">
        </div>
        <div class="textCard">
            <h3> <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> about us</h3>
            <h1>Welcome DogMilo Pets</h1>
            <div id="P-container">
              <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>

        </div>
    </div>

 </section>

 <!-- 2) DogMilo Pet Care Services For Your Best Friends. -->

 <section id=" DogMilo-Pet-Care-Services">
    <div class="container Pet-Care-container">
        <p>Services</p>
        <h1>DogMilo Pet Care Services </h1>
        <h1>For Your Best Friends.</h1>
        <div class="five-service">
            <!-- <div class="service-one">
                <img class="image-service" src="../img/imgs/assets/d-1.png" alt="">
                <h1 class="service-title"> hola sono h5 di sercive 1</h1>
                <p>The standard chunk of Lorem Ipsum used since.</p>
                <button type="button" class="btn btn-warning">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div> -->
            <!--
            <div id="service-two">
                <img class="image-service" src="../img/imgs/assets/d-2.png" alt="">
                <h5 class="service-title">Pet Security</h5>
                <p>The standard chunk of Lorem Ipsum used since.</p>
                <button type="button" class="btn btn-warning">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div id="service-three">
                <img class="image-service" src="../img/imgs/assets/d-4.png" alt="">
                <h5 class="service-title">Night Care</h5>
                <p>The standard chunk of Lorem Ipsum used since</p>
                <button type="button" class="btn btn-warning">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div id="service-four">
                <img class="image-service" src="../img/imgs/assets/d-3.png" alt="">
                <h5 class="service-title">Dog Security</h5>
                <p>The standard chunk of Lorem Ipsum used since.</p>
                <button type="button" class="btn btn-warning">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>

            <div id="service-five">
                <img class="image-service" src="../img/imgs/assets/d-5.png" alt="">
                <h5 class="service-title">Puppy Sitting</h5>
                <p>The standard chunk of Lorem Ipsum used since.</p>
                <button type="button" class="btn btn-warning">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div> -->
        </div>
    </div>

 </section>

 <!-- sezione  3) Why Choose Us? -->
 <section id="whyUs">

    <div class="container why-us-container">
      <div id="immagine-lato">
        <img id="carmen-sideimage" src="../img/imgs/assets/carmen.jpg" alt="">
      </div>

      <div id="chooseus-why-list">
        <p>  <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> Choose us</p>
        <h1 id="why-title">Why choose us</h1>
        <div id="why-one">
        <div class="why-image">
          <img src="../img/imgs/assets/w-3.png" alt="">
        </div>
          <div>
            <h3>safty first</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>

        <div id="why-two">
        <div class="why-image">
          <img src="../img/imgs/assets/w-2.png" alt="">
        </div>
          <div>
            <h3>Play Yards</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>

        <div id="why-three">
        <div class="why-image">
          <img src="../img/imgs/assets/w-1.png" alt="">
        </div>
          <div>
            <h3>Monitor Your Pet </h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
    </div>
 </section>

 <!-- 4) Over 8000 Customers With 5-star Reviews -->
 <section id="costumers-reviews">
  <div class="container costumers-reviews-container">
    <!-- sono due blocchetti, il secondo al suo interno ne ha altri due-->
    <!-- blocchetto 1 -->
    <div class="container blocco1-container">
      <div class="text-container">
        <p>Review & Rating</p>
        <h1>Over 8000 Customers With 5-star Reviews</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
      </div>
    </div>
    <div class="container blocco2-container">
      <p>Review & Rating</p>
      <h1>Over 8000 Customers With 5-star Reviews</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
    </div>
    <div class="container blocco3-container">
      <p>Review & Rating</p>
      <h1>Over 8000 Customers With 5-star Reviews</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
    </div>
  </div>
 </section>


</main>
</template>

<style lang="scss" scoped>


*{
    width: 50vw;
    margin: auto;
    font-family: 'Cabin', sans-serif;
}

/* sezione 1 */
.Welcome-DogMilo-container{
    width: 100%;
    /* background-color: lightblue; */
    border: 0;
    display: flex;
    justify-content: space-around;

    /* debugging */
    /* height: 300px; */

    .cardleft{
    width: 50%;
    height: 500px;
    margin-left: -20%;

      .image{
          width: 100%;

          /* debugging */
          height: 100%;
      }

    }


    .textCard{

        margin-top: 5%;
        /* background-color: lightgreen; */
        max-width: 50%;
        /* debugging */
        height: 500px;

        #P-container{
          margin-right: 1003px;
        }
    }

}

/* sezione 2 */
.Pet-Care-container{
    text-align: center;

    .service-one{
      background-color: #ce7c2a;
      width: 20%;
      margin-left: 10px;
      margin-right: 10px;

      color: white;
      /* text-align: center; */
      padding: 2%;
      border-radius: 45%;
      line-height: 30px;

      .image-service{
        width: 50%;
       }
    }
}

// seione 3
.why-us-container{

  // display: flex;

    #carmen-sideimage{
      width: 640px;
      height: 853px;
      margin-top: 100px;
      margin-left: -50%;
    }

    #chooseus-why-list{
      margin-top: -60%;
      margin-right: -50%;
      margin-bottom: 10%;

        h1{
        font-size: 3rem;
        }

        #why-one, #why-two, #why-three {
        //  display: flex;
        margin-bottom: 40px;

            h3{
              font-size: 1.5rem;
            }

            img{
              width: 10%;
            }
        }
    }
}

.costumers-reviews-container{
  width: 50vw;
  height: 300px;
  // margin-left: -50%;
  display: flex ;
  // debugging
  background-color: lightblue;

  .blocco1-container, .blocco2-container, .blocco3-container{
    max-width: 33%;
    height: 100%;
    margin: auto;
    text-align: center;

    // debugging
    background-color: lightpink;
    border: 1px solid black;

    .text-container{
      background-color: #ce7c2a;
    }
  }
}

</style>