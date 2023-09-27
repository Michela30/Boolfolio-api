<script>
//import

import MainCard from './MainCard.vue'

   export default {
    data() {
      return{
        //dati
      }
    },
    methods: {
        //function
    },
    components: {
        MainCard,
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>

    <main>
        <MainCard />
    </main>

</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


</style>