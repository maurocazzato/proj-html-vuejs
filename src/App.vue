<script>
import appHeader from './components/appHeader.vue';
import appFooter from './components/appFooter.vue';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter,
  },


}

</script>

<template>
    <!-- <appHeader/> -->
    <router-view></router-view>
      
    <!-- <appFooter/> -->
 
</template>

<style lang="scss" scoped>

@use '../src/styles/general' as *;
</style>