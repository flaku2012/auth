<template>

<div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        <div class="card">
            <form @submit.prevent="submit">
            <div class="card-header">Rejestracja</div>
            ERRORs {{errors}}
            <div class="card-body">

                <div class="mb-3">
                    <label class="form-label">Nazwa użytkownika</label>
                    <input type="text" class="form-control" v-model="form.name">
                    <div class="form-text text-danger" v-if="errors.name">{{errors.name[0]}}</div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Adres e-mail:</label>
                    <input type="email" class="form-control" v-model="form.email">
                    <div class="form-text text-danger" v-if="errors.email">{{errors.email[0]}}</div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Hasło:</label>
                    <input type="password" class="form-control" v-model="form.password">
                    <div class="form-text text-danger" v-if="errors.password">{{errors.password[0]}}</div>
                </div>

                <div class="mb-3">
                    <label class="form-label">Powtórz hasło:</label>
                    <input type="password" class="form-control" v-model="form.repeat_password">
                    <div class="form-text text-danger" v-if="errors.repeat_password">{{errors.repeat_password[0]}}</div>
                </div>

                <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                        Zarejestruj się
                    </button>
                </div>
            </div>
            </form>
        </div>
    </div>
    <div class="col-3"></div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'register',
  components: {
    //
  },

  data(){
      return {
          errors: [],
          form:{
              name: '',
              email: '',
              password: '',
              repeat_password: '',
            },
      }
  },

  methods:{
        async submit(){
            await axios.post('auth/register', {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            repeat_password: this.form.repeat_password,
        })
        .catch( (error) => {
            // handle error
            this.errors = error.response.data.errors
            console.log(error.response.data)
        })
        .finally( () => {
            
            //this.$router.replace('/signin')
            //this.form.name = ''
            //this.form.email = ''
            //this.form.password = ''
            //this.form.repeat_password = ''
        })

      }
  }

}
</script>
