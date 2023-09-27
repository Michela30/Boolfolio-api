<script>
//import
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';

   export default {
    data() {
      return{

      }
    },
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    created(){
      axios.get('')
      .then(response => {
        console.log(response.data)
      })

    }
  }
</script>



<template>
  <div>
    <HeaderComponent/>

    <MainComponent/>

    <FooterComponent/>

  </div>
</template>




<style lang="scss">
@use 'assets/scss/main.scss';




</style>
