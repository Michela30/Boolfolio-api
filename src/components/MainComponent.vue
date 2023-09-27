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
        addProject(){
            axios.get('http://localhost:8000/api/projects')
            .then(response => {
                console.log(response)
            })
        }
    },
    components: {
        //dichiarazione
    },
    created() {
      
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>

    <main>
        MAIN
    </main>

</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


</style>