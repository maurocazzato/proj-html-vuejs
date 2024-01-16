<script>
import appHeader from './components/appHeader.vue';
import appHome from './components/appHome.vue';
import appAbout from './components/appAbout.vue';
import appServices from './components/appServices.vue';
import appFooter from './components/appFooter.vue';


export default {
  name: 'App',
  components: {
    appHeader,
    App,
    appAbout,
    appServices,
    appHome,
    appFooter,
  },


}

</script>

<template>
    <appHeader/>
    <appHome/>
    <appAbout/>
    <appServices/>
    <appFooter/>
 
</template>

<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;
</style>
