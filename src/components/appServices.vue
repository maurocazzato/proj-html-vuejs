<script>

export default {
    name: "appServices",

}


</script>

<template>
    <div>Io sono appServices</div>

    <section id="from 1500">

        <!-- Mini sezione from 1500  -->

        <div class="service">
            <div class="card-img">
                <div class="rectangle-left">
                    <div class="rectangle"></div>
                </div>
                <div class="right">
                    <div class="square"></div>
                    <div class="square"></div>
                </div>

            </div>
            <div class="text">
                <div class="label">
                    <img src="../img/imgs/assets/dog-icon.png" alt="icon">
                    <h4>Service</h4>
                </div>
                <h2>Your Pet Our Passion</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                
            </div>
        </div>
    </section>

    <section id="pet-care-services">
        <div class="container-services">
            <h2>DogMilo Pet Care Services
            For Your Best Friends.</h2>
            <div class="services-gallery">
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/image (7).svg" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

@use '../styles/general';


.service {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        flex-basis: 60%;
        height: 300px;
    }
    .card-img {
        flex-basis: 40%;
        display: flex;
        box-sizing: border-box;
        .rectangle-left {
            flex-basis: 50%;
            padding-right: 25px;

        }
        .rectangle {
            width: 100%;
            height: 350px;
            background-color: blue;
        }
        .right {
            flex-basis: 50%;
        }
        .square {
            width: 100%;
            background-color: red;
            height: 150px;
            margin-bottom: 25px;
        }
    }
    // parte destra con il testo 
    .text {
        padding: 25px;

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
// Sezione pet care services  
#pet-care-services {
    width: 100%;
    background-color: #f5f5f5;

    .container-services {
        width: 60%;
        margin: auto;

    }
    .services-gallery {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .card-services {
            width: calc((100% / 3) - 25px );

        .card-services:hover {
            background-color: #7f7045;
        }    
            .card-image {
                width: 40%;
                border-radius: 50%;
                img {
                    width: 100%;
                }
            }
        }
    }

}

</style>