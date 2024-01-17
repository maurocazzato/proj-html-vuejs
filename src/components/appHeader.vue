<script>
export default {
  name: 'appHeader',
            
            };
            function toggleNav() {
            document.querySelector('nav').classList.toggle('active');
        }
            
        
       
</script>

<template>
     <section>
        <div class="header">
            <div class="contact-info">
                <div><i class="fa-solid fa-envelope"></i> Info@example.com</div>
                <div><i class="fa-solid fa-phone"></i> +1234567890</div>
            </div>
            <div class="social-icons">
                <div class="social-icon"><i class="fa-brands fa-square-facebook"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-twitter"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-instagram"></i></div>
                <div class="social-icon"><i class="fa-brands fa-linkedin"></i></div>
                <div class="social-icon"><i class="fa-brands fa-square-pinterest"></i></div>
            </div>
        </div>
       

        <div class="logo-container">
            <div><img src="../assets/logo.png" alt=""></div>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
            </nav>
            <div class="hamburger-menu" onclick="toggleNav()">
                <div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                </nav>
             </div>
                
            </div>
        </div>
        
    </section>
</template>

<style lang="scss" scoped>

.header {
    background-color: rgba(127,112,69,255);
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* contact style */

i{
    color: rgba(206,124,42,255);
    margin: 10px;
    font-size: 20px;
}

.contact-info {
    display: flex;
    align-items: center;
}

.contact-info div {
    margin-right: 200px;
}
/* icon style */
.social-icons {
    display: flex;
    margin-right: 5px;
}
.social-icon i{
   font-size: 30px;
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


.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color:white;
}

img{
    width: 100%;
}
/* nav visibile style */
.nav-container {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

nav a {
    color: rgba(116,116,116,255);
    text-decoration: none;
    padding: 30px;
    transition: color 0.3s;
    font-size: 30px;
}

nav a:hover {
    color: rgba(206,124,42,255);
}

/* Hamburger Menu Styles */
.hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    color: rgba(116,116,116,255);
}

.hamburger-menu div {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 6px 0;
    transition: background-color 0.3s;
}

@media (max-width: 768px) {
    .social-icons {
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    nav {
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #333;
        display: none;
    }

    nav.active {
        display: flex;
    }
}
</style>