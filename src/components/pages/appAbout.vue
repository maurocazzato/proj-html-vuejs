<script>


export default {
    name: "appAbout",

}


</script>

<template>
    
      <!-- jumbo about -->
  <div class="backgroundbox">
        <div class="jumbo-script">
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          
            <div class="btn-jumbo">
                <button type="button" class="custom-btn"><img id="up-a" src="../../assets/up-a.png" alt=""></button>
            </div>
          </div>
    </div>
    
    <div class="welcome">
      <div class="text">
        <div class="head">
            <img src="../../img/imgs/assets/dog-icon.png" alt="dog-icon">
            <div class="dogmilo">About DogMilo</div>
        </div>

          <h3>Welcome Dogmilo Pets</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio illo
             accusantium nam, voluptatibus velit quas, architecto repellendus est quia perferendis accusamus 
             magnam in deleniti blanditiis veniam autem dignissimos delectus.</p>
      </div>
      <div class="right-image">
          <img src="../../img/imgs/assets/duecani.png" alt="two dogs">
      </div>

    </div>

    <div class="presentazione">
            <div class="card">
                <div class="pres-texts">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum, tenetur sapiente facere eaque ad repellat officiis non error pariatur! Tempora quis ipsam, deleniti illum et ducimus nisi error praesentium?</p>
                </div>
                <div class="card-img">
                    <img src="../../img/imgs/assets/ourmission.png" alt="our mission">
                </div>         
            </div>

            <div class="card">
                <div class="card-img">
                    <img src="../../img/imgs/assets/ourvision.png" alt="our vision">
                </div> 
                <div class="pres-texts">
                <h3>Our Vision</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum, tenetur sapiente facere eaque ad repellat officiis non error pariatur! Tempora quis ipsam, deleniti illum et ducimus nisi error praesentium?</p>
                </div>        
            </div>

            <div class="card">
                <div class="pres-texts">
                <h3>Our Value</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum, tenetur sapiente facere eaque ad repellat officiis non error pariatur! Tempora quis ipsam, deleniti illum et ducimus nisi error praesentium?</p>
                </div>
                <div class="card-img">
                    <img src="../../img/imgs/assets/ourvalue.png" alt="our value">
                </div>         
            </div>                      
    </div>

    <div class="our-story">
        <h6>Our Story</h6>
        <h2>DogMilo Pet Care Story
        For Your Best Friends.</h2>
        <div class="card-video">
            <img src="../../img/imgs/assets/video-bg.png" alt="video">
            <img src="../../img/imgs/assets/play.png" alt="play" class="player">
        </div>
    </div>

    <div class="fresh-healty">
        <div class="card-image">
            <img src="../../img/imgs/assets/fresh&healtyleft.png" alt="fresh&healty food">
        </div>
        
        <div class="texts">
            <h2>Fresh & Healty Food</h2>
            <div class="label">
                <div class="label-img">
                    <img src="../../img/imgs/assets/petfood.png" alt="Pet Food">
                </div>
                <div>
                    <h4>Pet Food</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>
            <div class="label">
                <div class="label-img">
                    <img src="../../img/imgs/assets/petaccessories.png" alt="Pet Accessories">
                </div>
                <div>
                    <h4>Pet Accessories</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>
            <div class="label">
                <div class="label-img">
                    <img src="../../img/imgs/assets/petclothes.png" alt="Pet Clothes">
                </div>
                <div>
                    <h4>Pet Clothes</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </div>

        </div>


    </div>


    
</template>


<style lang="scss" scoped>
*{
    font-family: 'Cabin', sans-serif;
   
}
// jumbo style
.backgroundbox {
  width: 100%;
  height: 500px;
  background-image: url('../../assets/banner4.png');
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
    
    .welcome {
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        width: 60%; }

        .right-image {
            flex-basis: 45%;
            img {
                max-width: 100%;
            }
        }
        .text {
            text-align: left;
            flex-basis: 45%;
            

            .head {
               display: flex;
                align-items: center;
            }
            .dogmilo {
                color: #7f7045;
                font-weight: 400;
                margin-left: 10px;
            } }
        h3 { 
            font-size: 22px;
        }
        p {
            font-size: 16px;
            font-family: "Jost", Sans-serif;
            font-weight: 300;
        }
        
        // Responsive Welcome 

    @media screen and (max-width: 768px) {
    .welcome {
    width: 95%;
    display: block;
  }
}

    // Sezione Presentazione 

    .presentazione {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;

        .card {
        width: calc(100% / 3);
            .pres-texts {
            background-color: #7f7045;
            color: white;
            padding: 10px;
        }

            .card-img {
                width: 100%;

                img {
                    width: 100%;
                }
            }
    }


    }

    // Responsive sezione Presentazione 

    @media screen and (max-width: 760px) {
  .presentazione {
    width: 100%;
    display: block;

        .card {
            width: 100%;
        }
  }
}



    // Sezione our Story con video 
    .our-story {
        width: 60%;
        margin: auto;
        margin-top: 100px;

        h6 {
            color: #7f7045;
            font-size: 20px;
        }
        h2, h6 {
            text-align: center;
        }
        .card-video {
            width: 100%;
            position: relative;

            img {
                width: 100%;
            }
            .player {
                width: 10%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    // Our Story Responsive 
        @media screen and (max-width: 768px) {
    .our-story {
        width: 100%;
    }
    }
    
    // Sezione Fresh Healty 
    .fresh-healty {
        margin-top: 100px;
        width: 70%;
        margin-left: 29%;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-bottom: 250px;

        .card-image {


            margin-left: -120px;
            margin-top: 80px;
            width: 45% ;

            img {
                width: 100%;
            }
        }
        h2, .label {
            padding-left: 15px;
        }
        .texts {
            width: 70%;
            padding: 15px;
            padding-left: 120px;

            h2 {
                font-size: 32px;
            }
            .label {
                display: flex;
                align-items: center;
                margin-top: 15px;

                h4 {
                    padding: 0;
                    font-size: 22px;
                }
                p {
                    font-family: "Jost", Sans-serif;
                    font-weight: 300;
                }
                .label-img {
                    width: 70px;
                    margin-right: 15px;
                    border-radius: 50%;
                    background-color: #7f7045;
                    padding: 15px;

                    img {
                        max-width: 100%;

                    }
                }

            }
        }

    }

    // Sezione Responsive di fresh Healty 

    @media screen and (max-width: 768px) {
  .fresh-healty {
    width: 100%;
    display: block;
    margin-left: 0;
    display: block;
    justify-content: space-between;
    position: relative;

    .card-image {

        margin-left: 0;
        width: 100% ;
    }

    .texts {
        width: 95%;
        padding-left: 0;
    }
    
  }
}
</style>