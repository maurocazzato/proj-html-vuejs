<script>
export default {
    name: 'appHeader',
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
    },
  },
  watch: {
    $route(to, from) {
      if (window.innerWidth > 768) {
        this.isNavOpen = false;
      }
    },
  },
};
</script>

<template>
     <section>
        <!-- header marraconcino con contatti e icone social -->
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
       
        <!-- parte inferiore header con logo e menu navigabile -->
        <div class="logo-container">
            <div><img src="../assets/logo.png" alt=""></div>
            <nav class="navvisibile">
                <router-link :to="{name: 'appHome'}">Home</router-link>
                <router-link :to="{name: 'appAbout'}">About</router-link>
                <router-link :to="{name: 'appServices'}">Services</router-link>
            </nav>
        <!-- hamburher menu navigabile -->
            <div class="hamburger-menu" @click="toggleNav">
                <div class="menu-icon">&#9776;</div>
            
                <nav v-if="isNavOpen" class="dropdown-menu">
                    <router-link :to="{ name: 'appHome' }">Home</router-link>
                    <router-link :to="{ name: 'appAbout' }">About</router-link>
                    <router-link :to="{ name: 'appServices' }">Services</router-link>
                </nav>
           
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../src/styles/_general.scss' as *;

*{
    font-family: 'Cabin', sans-serif;
   
}


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
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  display: none;
}

.menu-icon {
  display: inline-block;
  font-size: 40px;
  color: rgba(116,116,116,255);
}

.dropdown-menu {
  position: absolute;
  background-color: #fff;
  max-width: 200px;
  top:250px;
  right:50px;
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: rgba(116,116,116,255);
}

.dropdown-menu a:hover {
  background-color: #f8f8f8;
}

@media (max-width:768px) {
    .hamburger-menu {
    display: block;
  }

  .dropdown-menu {
    display: block;
    width: 100%;
  }


  .logo-container .navvisibile {
    display: none;
    }
    .social-icons{
        display: none;
    }

}

</style>