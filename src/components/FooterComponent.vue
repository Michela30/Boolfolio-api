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
    <footer class="text-center">
        <strong>
            &copy;PoweredByMichela
        </strong>
    </footer>

</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

    footer{
        height: 70px;
        padding: 30px 0;
    }
</style>