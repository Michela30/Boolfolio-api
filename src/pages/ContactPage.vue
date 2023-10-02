<script>
//import
import axios from 'axios'

   export default {
    data() {
      return{
        //dati
        contactData :{
            name : '',
            email : '',
            message : '',
        }
      }
    },
    methods: {
        //function
        sendMessage(){
            console.log('messaggio inviato');

            axios.post ('http://localhost:8000/api/contacts', this.contactData)
            .then(response => {
                this.contactData.name = '';
                this.contactData.email = '';
                this.contactData.message = '';
            })
            .catch( err => {
                console.log(err.response.data);
            })
        }
       
    },
    components: {
        //components importazione
    },
    created(){
        
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>

   <section class="my-5">

        <h2 class="text-center mb-5">
            Contacts
        </h2>

        <div class="container">
            <div class="row">
                <div class="col-offset-2"></div>

                <div class="col-4">
                    <h6 class="fw-bold">
                        Info about me
                    </h6>
                    <p class="pt-4">
                        Hello, I'm [full name]. I'm a [current job title] for [company or employer]. [Sentence describing relevant work experience and skills]. As a working professional, I [description of personal achievements or background]. I aspire to [personal goals or professional goals]. Outside of work, I enjoy [relevant personal interest or hobby]. You may contact me at [phone number] and [email address].
                    </p>
                </div>

                <div class="col-4">
                    <form @submit.prevent="sendMessage()">
                        <h6 class="fw-bold">
                            Do you have any question?
                        </h6>

                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" id="name" v-model="contactData.name" placeholder="Write here your name..." minlength="5" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="emai" id="email" aria-describedby="emailHelp" v-model="contactData.email" placeholder="Write here your email..." required>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="message">Message</label>
                            <textarea class="form-control" v-model="contactData.message" placeholder="Leave a message here..." id="message" name="message" minlength="15" style="height: 100px" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>

                <div class="col-offset-2"></div>
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

    .card-body{
        margin: 0;
    }
}
</style>