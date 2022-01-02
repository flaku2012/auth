<template>
  <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    Twój profil
                </div>
                <div class="card-body">
                    <div class="mb-3 row">
                        <label for="user_name" class="col-sm-4 col-form-label">Nazwa użytkownika</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="user_name" placeholder="flaku2012" disabled>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="user_email" class="col-sm-4 col-form-label">Adres e-mail</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="user_email" placeholder="admin@admin.pl" disabled>
                        </div>
                    </div>
                    <hr>
                    <button class="btn btn-warning" @click="widok_formularza()">Zmień hasło</button>

                    <!-- WIDOK FORMULARZA ZMIANY HASŁA -->
                    <div v-if="stan_widoku_formularza">
                        <hr>
                        <h4 class="text-center">Zmiana hasła</h4>
                        <div class="mb-3 row">
                            <label for="user_stare_haslo" class="col-sm-4 col-form-label">Stare hasło</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="user_stare_haslo" placeholder="flaku2012">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="user_nowe_haslo" class="col-sm-4 col-form-label">Nowe hasło</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="user_nowe_haslo" placeholder="admin@admin.pl">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="user_powtorz_nowe_haslo" class="col-sm-4 col-form-label">Powórz nowe hasło</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="user_powtorz_nowe_haslo" placeholder="admin@admin.pl">
                            </div>
                        </div>
                        <div class="text-center">
                            <router-link to="/changepassword" class="btn btn-success">Zapisz zmiany</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script>
export default {
    name: 'profile',

    data(){
        return{
            stan_widoku_formularza: false,
        }
    },

    methods: {
        widok_formularza(){
            if(this.stan_widoku_formularza == false)
            {
                this.stan_widoku_formularza = true
            }else{
                this.stan_widoku_formularza = false
            }

        }
    }

}
</script>

<style>

</style>