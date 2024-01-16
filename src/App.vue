<script>
import appAbout from './components/appAbout.vue';
import appServices from './components/appServices.vue';
import appHeader from './components/appHeader.vue';
import appFooter from './components/appFooter.vue';
import appHome from './components/appHome.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    appAbout,
    appServices,
    appHome,
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
@use './styles/partials/_variables';
@use './styles/_general.scss';
</style>