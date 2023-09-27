<script>
//import
import axios from 'axios'

   export default {
    data() {
      return{
        //dati
        projects : [],
      }
    },
    methods: {
        //function
        addProject(){
            axios.get('http://localhost:8000/api/projects')
            .then(response => {
                
                console.log(this.projects.response.data)
            })
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

    <main @click="addProject()">
        MAIN
    </main>

</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


</style>