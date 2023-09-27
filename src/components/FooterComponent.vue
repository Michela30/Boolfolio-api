<script>
//import

   export default {
    data() {
      return{
        //dati
      }
    },
    methods: {
        //function
        getImagePath: function(image){
            return new URL (image, import.meta.url).href;
        }
    },
    components: {
        //dichiarazione
    },
    props:{
        //utilizzo per file padre
    }
    
  }
</script>


<template>
    <footer>
        FOOTER
    </footer>

</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


</style>