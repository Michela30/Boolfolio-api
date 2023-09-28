<script>
//import
import axios from 'axios'

   export default {
    data() {
      return{
        //dati
        projects : [],
        currentPage: 1,
        lastPage: 1
      }
    },
    methods: {
        //function
        getProject(){
            axios.get('http://localhost:8000/api/projects', {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
                this.projects = response.data.projects.data
                this.currentPage = response.data.projects.current_page
                this.lastPage = response.data.projects.last_page
            })
        },

        changePage(mode){
            switch(mode){

                case '+':
                    if(this.currentPage < this.lastPage){
                        this.currentPage++;
                        this.getProject();

                    }
                    break;

                case '-':
                    if(this.currentPage > 1){
                        this.currentPage--;
                        this.getProject();

                    }
                    break;

            }
            console.log(this.currentPage)

            axios.get('http://localhost:8000/api/projects', {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
                this.projects = response.data.projects.data
                this.currentPage = response.data.projects.current_page
                this.lastPage = response.data.projects.last_page
            })
        }
    },
    components: {
        //components importazione
    },
    created(){
        this.getProject();
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
                    <div v-if="project.full_thumb_path">
                        <img :src="project.full_thumb_path" class="card-img-top" :alt="project.title">
                    </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {{ project.title }}
                    </h5>
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
                    <router-link :to="{ name: 'project', params: {slug: project.slug}}" class="btn btn-info mt-2">
                        Show
                    </router-link>
                    <br>
                </div>
            </div>
            
        </div>

        <div class="text-center mt-2">
            <button @click="changePage('-')" class="btn btn-success ms-2">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button @click="changePage('+')" class="btn btn-success ms-2">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
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

    .card-body{
        margin: 0;
    }
}
</style>