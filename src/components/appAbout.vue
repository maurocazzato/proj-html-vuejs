<script>

export default {
    name: "appAbout",

}


</script>

<template>
    <div class="welcome">
      <div class="text">
        <div class="head">
            <img src="../img/imgs/assets/" alt="dog-icon">
            <div class="dogmilo">About DogMilo</div>
        </div>

          <h3>Welcome Dogmilo Pets</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio illo
             accusantium nam, voluptatibus velit quas, architecto repellendus est quia perferendis accusamus 
             magnam in deleniti blanditiis veniam autem dignissimos delectus.</p>
      </div>
      <div class="right-image">
          <img src="../img/imgs/assets/about.png" alt="two dogs">
      </div>

    </div>

    <div class="presentazione">
            <div class="card">
                <div class="pres-texts">
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum, tenetur sapiente facere eaque ad repellat officiis non error pariatur! Tempora quis ipsam, deleniti illum et ducimus nisi error praesentium?</p>
                </div>
                <div class="card-img">
                    <img src="../img/imgs/assets/w-1.png" alt="img 1">
                </div>         
            </div>

            <div class="card">
                <div class="card-img">
                    <img src="../img/imgs/assets/w-2.png" alt="img 1">
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
                    <img src="../img/imgs/assets/w-3.png" alt="img 1">
                </div>         
            </div>                      
    </div>

    <div class="our-story">
        <h6>Our Story</h6>
        <h2>DogMilo Pet Care Story
        For Your Best Friends.</h2>
        <div class="card-video">
            <img src="../img/imgs/assets/hqdefault.jpg" alt="video">
            <img src="../img/imgs/assets/play.png" alt="play" class="player">
        </div>
    </div>

    <div class="fresh-healty">
        <div class="card-image">
            <img src="../img/imgs/assets/t1.png" alt="fresh&healty food">
        </div>
        
        <div class="texts">
            <h2>Fresh & Healty Food</h2>
            <div class="label">
                <div class="label-img">
                    <img src="../img/imgs/assets/w-1.png" alt="Pet Food">
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
                    <img src="../img/imgs/assets/w-1.png" alt="Pet Food">
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
                    <img src="../img/imgs/assets/w-1.png" alt="Pet Food">
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

@use '../styles/general';
    .welcome {
        display: flex;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        width: 60%; }

        .text {
            text-align: left;
            flex-basis: 50%;

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
             font-style: italic;
            font-weight: 100;
        }
        
    .presentazione {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
    }

    .card {
        width: calc(100% / 3);
    }
    .right-image {
        flex-basis: 50%;
    }

    .pres-texts {
        background-color: #7f7045;
        color: white;
        padding: 10px;
    }

    .card-img img {
        width: 100%;
    }

    // Sezione our Story con video 
    .our-story {
        width: 60%;
        margin: auto;
        margin-top: 100px;

        h6 {
            color: #7f7045;
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
            width: 30% ;

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

            .label {
                display: flex;
                align-items: center;

                h4 {
                    padding: 0;
                }
                .label-img {
                    width: 80px;
                    margin-right: 15px;
                }
            }
        }

    }


</style>