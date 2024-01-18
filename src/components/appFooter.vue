<script>
export default {
  name: 'appFooter',
           
            
        
        };

</script>



<template>
<footer>
    <section class="footer-container">
    <div class="footer-section">
        <ul>
            <h3>Get in Touch</h3>
            <li><a href="#">Have a Question for us ?</a></li>
            <li><a href="#">We'll answer your problem here</a></li>
            <li><div class="social-icons">
                <div class="social-icon"><i class="fa-brands fa-square-facebook"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-twitter"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-instagram"></i></div>
                <div class="social-icon"><i class="fa-brands fa-linkedin"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-pinterest"></i></div>
            </div></li>
        </ul>
    </div>

    <div class="footer-section">
        <ul>
            <h3>Support</h3>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Online Chat</a></li>
            <li><a href="#">Whatsapp</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Snapchat</a></li>
        </ul>
    </div>

    <div class="footer-section">
        <ul>
            <h3>About</h3>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Job</a></li>
            <li><a href="#">In Press</a></li>
        </ul>
    </div>

    <div class="footer-section">
        <ul>
            <h3>Faq</h3>
            <li><a href="#">Account</a></li>
            <li><a href="#">Order</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Returns</a></li>
        </ul>
    </div>

    <div class="footer-section">
        <ul>
            <h3>Contact Me</h3>
            <li><a href="#"><i class="fa-solid fa-location-dot"></i>4500 Mercantile plaza , Suite 300 , Fort Worth , TX,76137,USA</a></li>
            <li><a href="#">+1234567890</a></li>
            <li><a href="#"><i class="fa-solid fa-envelope"></i> Info@example.com</a></li>
        </ul>
    </div>

    <div class="contact-form">
            <img src="../assets/news.png" alt="Foto">
            <div>
            <h2>Subscribe to Our Newsletter</h2>
        
            <label for="email" style="color: #fff;"></label>
            <input type="email" id="email" name="email" class="email-input" required>
        </div>
            <button class="send-button">@</button>
        
    </div>

</section>
    <div class="line"></div>

    <div class="contact-box">
            <p>Copyright © 2024 dogmilo-wordpress | Powered by dogmilo-wordpress</p>
        </div>
</footer>

</template>

<style lang="scss" scoped>
@use '../src/styles/_general.scss' as *;
*{
    font-family: 'Cabin', sans-serif;
   
}
       /* footer style */
        footer {
            background-color: black;
            color: #fff;
            padding: 40px;
        }

        .footer-container{
            margin-top: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
        }

        h3{
            color: rgba(206,124,42,255);
        }
        i{
            color: rgba(206,124,42,255);
            margin: 10px;
            font-size: 20px;
        }

        a{
            text-decoration: none;
            color: white;
        }
        .social-icons {
            display: flex;
            justify-content: space-around;
        }
        .social-icon{
            font-size: 20px;
        }
        .fa-square-facebook{
        color: rgba(48,63,191,255);
        }
        .fa-square-twitter{
        color: rgba(124,207,211,255);
        }
        .fa-square-instagram{
        color: rgba(167,33,179,255);
        }
        .fa-linkedin{
        color: rgba(6,99,207,255);
        }
        .fa-square-pinterest{
        color: rgba(189,8,28,255);
        }
    
        ul {
            list-style: none;
            
        }

        li {
            margin-bottom:10px ;
            
        }
        .line {
            width: 100%;
            height: 1px;
            background-color: #ffffff72;
            margin: 80px 0px 20px 0px;
        }
        .contact-box {
            text-align: center;
            color: #ffffff72;
        }

        /* form style */
        .contact-form {
            position: absolute;
            top:  -230px;
            left: 50;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            max-width: 800px;
            height: 180px;
            padding: 20px;
            background-color:  rgba(206,124,42,255);
            border-radius: 5px;
        }

        .contact-form img {
           width: 40%;
           margin-bottom: 83px;
           margin-right: 60px;
        }

        .email-input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }

        .send-button {
            background-color: black;
            color: #fff;
            padding: 10px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 70px;
            font-size: 16px;
        }


        @media (max-width: 768px) {
            .footer-container {
                display: inline;
            }

            .contact-form {
               display: none;
            }
        }
    </style>
