<script>

export default {
    name: "appServices",

}


</script>

<template>
    <h1>IO SONO APPSERVICES</h1>

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
            <h4>Service</h4>
            <h2>DogMilo Pet Care Services
            For Your Best Friends.</h2>
            <div class="services-gallery">
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
                <div class="card-services">
                    <div class="card-image">
                        <img src="../img/imgs/assets/IMG_3129.JPG" alt="image card">
                    </div>
                    <h4>Coat Handler Pets</h4>
                    <div class="caption">The standard chunk of Lorem Ipsum used since. </div>
                    <i id="arrow-up" class="fa-light fa-arrow-up fa-rotate-by" style="--fa-rotate-angle: 45deg;"></i>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>


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
    margin-top: 150px;
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 150px;

    .container-services {
        width: 60%;
        margin: auto;

        h4 {
            color: #7f7045;
            text-align: center;
            padding-top: 25px;
        }

        h2 {
            text-align: center;
            padding-top: 25px;
            margin: auto;
        }

        .services-gallery {
            margin-top: 150px;

            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .card-services {
                background-color: white;
                width: calc((100% / 3) - 25px );
                padding: 25px;

                &:hover {
                    background-color: #7f7045;
                    color: white;
                }
                #arrow-up {
                    color: white;
                    background-color: #7f7045;
                    font-size: 50px;
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
                }

            }
        }
    }
}

</style>