<script>

export default {
    name: "appServices",

}


</script>

<template>
         <!-- jumbo about -->
  <div class="backgroundbox">
        <div class="jumbo-script">
            <h1>Services</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          
            <div class="btn-jumbo">
                <button type="button" class="custom-btn"><img id="up-a" src="../../assets/up-a.png" alt=""></button>
            </div>
          </div>
    </div>

    <!-- Sezione from 1500  -->

    <section id="from 1500">


        <div class="service">
            <div class="card-img">
                    <img src="../../img/imgs/assets/vertical.png" alt="vertical dog">
            </div>
            <div class="text">
                <div class="label">
                    <img src="../../img/imgs/assets/dog-icon.png" alt="icon">
                    <h4>Service</h4>
                </div>
                <h2>Your Pet Our Passion</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled               
                </p>
                
            </div>
        </div>
    </section>

    <section id="pet-care-services">
        <div class="main-services">
            <h3>Service</h3>
            <h2>DogMilo Pet Care Services
            For Your Best Friends.</h2>
            <div class="services-gallery">

                <!-- Coat Handler  -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/coathandler.png" alt="coat handler">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>

                <!-- Pet Security   -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/petsecurity.png" alt="pet security">
                    </div>
                    <h4>Pet Security</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>

                <!-- Night Care  -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/nightcare.png" alt="night care">
                    </div>
                    <h4>Night Care</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>

                <!-- Dog Walking  -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/dogwalking.png" alt="dog walking">
                    </div>
                    <h4>Dog Walking</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>

                <!-- Puppy Sitting  -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/puppysitting.png" alt="image cardpuppy sitting">
                    </div>
                    <h4>Puppy Sitting</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>

                <!-- Pet Sitting  -->

                <div class="card-services">
                    <div class="card-image">
                        <img src="../../img/imgs/assets/petsitting.png" alt="Pet Sitting">
                    </div>
                    <h4>Pet Sitting</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

@use '../../styles/general.scss' as *;


*{
    font-family: 'Cabin', sans-serif;
   
}
// jumbo style
.backgroundbox {
  width: 100%;
  height: 500px;
  background-image: url('../../assets/banner3.png');
  background-size: cover;
  margin-bottom: 50px;
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
      padding: 5px;
      font-size: 15px;
      cursor: pointer;
      border: none;
      outline: none;
    }
    #up-a{
        width: 40%;
    }

    // Sezione Service 
.service {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        flex-basis: 57%;
        height: 300px;

        p {        font-family: "Jost", Sans-serif;}
    }
    .card-img {
        flex-basis: 40%;
        display: flex;
        align-items: center;
        box-sizing: border-box;

        .right {
            flex-basis: 50%;
        }
    }
    // parte destra con il testo 
    .text {
        padding: 25px;

        p {
                font-size: 16px;
            }

        .label {
            display: flex;
            align-items: center;
            justify-content: flex-start;


        }
        h4 {
            margin-left: 25px;
            color: #7f7045;
        }
    }
}

    // Responsive Sezione Service 

    @media screen and (max-width: 768px) {
    .service {
        width: 100%;
        display: block;
            .card-img {
                img {
                    margin: auto;
                }
            }


  }
}

// Sezione pet care services  


#pet-care-services {
    margin-top: 150px;
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 150px;

    .main-services {
        width: 70%;
        margin: auto;
        margin-bottom: 100px;

        h3 {
            color: #7f7045;
            text-align: center;
            padding-top: 25px;
            margin-top: 100px;
            font-size: 25px;
        }

        h2 {
            text-align: center;
            padding-top: 50px;
            padding-bottom: 50px;
            font-size: 40px;
            margin: auto;
        }

        .services-gallery {
            margin-top: 150px;
            margin: auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .card-services {
                box-sizing: border-box;
                background-color: white;
                width: calc((100% / 3) - 25px );
                padding: 35px;

                &:hover {
                    background-color: #7f7045;
                    color: white;
                }

                .card-image {
                    width: 50%;
                    margin: auto;

                    img {
                        width: 100%;
                        border-radius: 50%;
                    }

                }
                h4, .caption {
                    text-align: center;
                    color: black;
                }
                h4 {
                    font-size: 25px;
                }

                .caption {
                    font-size: 18px;
                    font-weight: 100;
                }

            }
        }
    }
}

// Sezione pet-care Responsive

@media screen and (max-width: 768px) {
  
    #pet-care-services {
        width: 100%;

        .main-services {
            display: block;
            width: 100%;

            .services-gallery {
                width: 95%;
                margin: auto;
                .card-services {
                    width: 100%;
                    padding: 0;
                    margin-top: 50px;
                }
            }
        }
    }
}

</style>