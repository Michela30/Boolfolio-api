<script>
import axios from 'axios'

    export default {
        data() {
        return{
            //dati
            project : null,
        }
        },
        methods: {
            //function
            getProject(){
                axios.get('http://localhost:8000/api/projects/' + this.$route.params.slug)
                .then(response => {
                    this.project = response.data.project
                })
            },

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
        Project {{ project.title }}
    </h2>
    <div class="d-flex flex-wrap">
        <div class="card p-2">
                <img :src="`${project.full_thumb_path}`" class="card-img-top" :alt="project.title">
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
                <span  class="badge rounded-pill text-bg-light">
                    {{ project.type.title }}
                </span>
                <br>
                <strong>
                    Technology
                </strong>
                <span  class="badge rounded-pill text-bg-light">
                    {{ project.technologies.title ?? '---'}}
                </span>
                <br>
                <router-link :to="{ name: 'project', params: {slug: project.slug }}" class="btn btn-info mt-2">
                    Show
                </router-link>
                <br>
            </div>
        </div>
        
    </div>
</section>

</template>

<style lang="scss" scoped>

.card{
    width: calc((100% / 3) - 20px);
    img{
        height: 220px;
    }
}
</style>