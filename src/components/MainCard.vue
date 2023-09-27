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
                this.projects = response.data.projects.data
                console.log(this.projects)
            })
        }
    },
    components: {
        //components importazione
    },
    created(){
        this.addProject();
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>

   <section class="my-5">

        <h2 class="text-center">
            Projects:
        </h2>
        <div class="d-flex flex-wrap">
            <div class="card p-2" v-for="(project, index) in projects">
                    <img :src="project.thumb" class="card-img-top" :alt="project.title">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ project.title }}
                    </h5>
                    <strong>
                        Url
                    </strong>
                    <a class="card-subtitle mb-2 text-body-secondary">
                        {{ project.url }}
                    </a>
                    <br>
                    <strong>
                        Description
                    </strong>
                    <p class="card-text">
                        {{ project.description }}
                    </p>
                    <strong>
                        Type
                    </strong>
                    <span class="card-subtitle text-body-secondary">
                        {{ project.type.title }}
                    </span>
                    <br>
                    <strong>
                        Technology
                    </strong>
                    <span class="card-subtitle text-body-secondary">
                        {{ project.technologies.title ?? '---'}}
                    </span>
                    <br>
                    <a href="" class="btn btn-info mt-2">
                        Show
                    </a>
                    <br>
                </div>
            </div>
            
        </div>
   </section>
    

</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.card{
    width: calc((100% / 3) - 20px);
    img{
        height: 220px;
    }
}
</style>