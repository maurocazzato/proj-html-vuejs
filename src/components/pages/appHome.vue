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

 <!-- iniziamo con la macro struttura  -->

 <!--  sezione 1  -->

 <section id="Welcome-DogMilo">

    <div class="container Welcome-DogMilo-container">

    <!-- <div class="cardright"></div> -->
        <div class="cardleft">
            <img class="image" src="../../img/imgs/assets/IMG_3129.JPG" alt="">
        </div>
        <div class="textCard">
            <h3> <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> about us</h3>
            <h1>Welcome DogMilo Pets</h1>
            <div id="P-container">
              <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p>short lorem ipsum idea</p>
              <br>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              <p>short lorem ipsum idea</p>
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
            <div class="service">
              <div class="service-text">
                <h3 class="service-title">Pet Security</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
              </div>
               
            </div>

            <div class="service">
              <div class="service-text">
                <h3 class="service-title">Night Care</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
              </div>
            </div>

            <div class="service">
              <div class="service-text">
                <h3 class="service-title">Puppy Sitting</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
              </div>
            </div>

            <div class="service">
              <div class="service-text">
                <h3 class="service-title">Coat Handler Pets</h3> 
                <p>Lorem Ipsum used since.</p>
                <p>Lorem Ipsum used since.</p>
                <img src="../../img/imgs/assets/right.png" alt="">
              </div>
            </div>

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

 <!-- sezione  3) Why Choose Us? -->
 <section id="whyUs">

    <div class="container why-us-container">
      <div id="immagine-lato">
        <img id="carmen-sideimage" src="../../img/imgs/assets/carmen.jpg" alt="">
      </div>

      <div id="chooseus-why-list">
        <p>  <i class="fa-solid fa-paw" style="color: #ffaa00;"></i> Choose us</p>
        <h1 id="why-title">Why choose us</h1>
        <div id="why-one">
        <div class="why-image">
          <img src="../../img/imgs/assets/w-3.png" alt="">
        </div>
          <div>
            <h3>safty first</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>

        <div id="why-two">
        <div class="why-image">
          <img src="../../img/imgs/assets/w-2.png" alt="">
        </div>
          <div>
            <h3>Play Yards</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>

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

 <!-- 4) Over 8000 Customers With 5-star Reviews -->
 <section id="costumers-reviews">
  <div class="container costumers-reviews-container">
    <!-- sono due blocchetti, il secondo al suo interno ne ha altri due-->
    <!-- blocchetto 1 -->
    <div class="container blocco-container">
      <div class="text-container">
        <p>Review & Rating</p>
        <h1>Over 8000 Customers </h1>
        <h1>With 5-star Reviews</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="container blocco-container">
      <div class="text-container">
        <br>
        <h1>Grate Place</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="container blocco-container">
      <div class="text-container">
        <br>
        <h1>Over 8000 Customers </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
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

/* sezione 1 */
.Welcome-DogMilo-container{
    width: 100%;
    /* background-color: lightblue; */
    border: 0;
    display: flex;
    justify-content: center;
    justify-content: space-around;

    /* debugging */
    /* height: 300px; */

    .cardleft{
    width: 50%;
    height: 500px;
    // margin-left: 20%;

      .image{
          width: 100%;

          /* debugging */
          height: 100%;
      }

    }


    .textCard{
        margin-left: 10%;
        margin-top: 10%;
        /* background-color: lightgreen; */
        max-width: 50%;
        /* debugging */
        height: 500px;

        #P-container{
          line-height: 30px;
          margin-right: 1003px;
        }
    }

}

/* sezione 2 */
.Pet-Care-container{
    text-align: center;
    

    .five-service{
      width: 100%;
      margin: auto;
      // background-color: aqua;
      display: flex;
      justify-content: center;
      
      
      .service{
        background-color: #ce7c2a;
        min-width: 20%;
        min-height: 100px;
        margin-left: 10px;
        margin-top: 20px;
        /* text-align: center; */
        padding: 2%;
        border-radius: 45%;
        

        .service-text{
          padding: 10px;
          width: 40%;
          margin-left: -200%;

          img{
            margin-left: 620%;
            margin-top: 10px;
            width: 20px;
          }
        }


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
  width: 80%;
  height: 300px;
  // margin-left: -50%;
  display: flex ;
  // debugging
  // background-color: lightblue;

  .blocco-container{
    min-width: 50%;
    margin: auto;
    margin-left: -15%;
    display: block;
    padding-left: 50px;
    padding-right: 50px;
    margin-bottom: 10090px;
    
    // debugging
    // background-color: lightpink;

    .text-container{

      line-height: 20px;
      h1{
        font-size: 2rem;
        line-height: 50px;
      }
    }
  }
}

</style>