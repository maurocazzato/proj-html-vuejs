<script>
import appAbout from './components/appAbout.vue';
import appServices from './components/appServices.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    App,
    appAbout,
    appServices,
    appHome,
  },


}

</script>

<template>

    <appAbout/>
    <appServices/>
 
</template>

<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;
</style>
