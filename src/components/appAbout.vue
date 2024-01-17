<script>

export default {
    name: "appAbout",

}


</script>

<template>
    <div>Io sono appAbout</div>
    <div class="welcome">
      <div class="text">
        <div class="head">
            <img src="../img/imgs/assets/dog-icon.png" alt="dog-icon">
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

</template>


<style lang="scss" scoped>
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

</style>