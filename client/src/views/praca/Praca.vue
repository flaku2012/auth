<template>
<div class="container">
    <div class="row">
        <div class="col-3">
            <h4 class="text-center">Praca</h4>
            <div class="list-group text-center">
                <li class="list-group-item list-group-item-info text-center">
                    <i class="bi bi-arrow-90deg-down"></i>Akcje do wyboru
                </li>
                <router-link to="/miasto" class="list-group-item list-group-item-secondary list-group-item-action text-center" active-class="active" >
                    Miasto
                </router-link>
            </div>
        </div>

        <!-- ŚRODEK -->
        <div class="col-9">
            <h3 class="text-center">Praca</h3>
            <hr>

            <!-- spinner -->
            <div :class="{'spinner-border m-5': loading}" class="" role="status">
                <!-- hidden -->
                <div :class="{'visually-hidden': loading}"> 
                    <form class="text-center" @submit.prevent="submit_form">   
                    <div class="form-group">
                            <label for="czas_pracy">Wybierz ile chcesz pracować:</label>
                            <select class="form-select" id="czas_pracy" v-model="form.czas_pracy" :disabled="status_pracy.in_work == 1">
                                <option disabled value="">Czas pracy</option>
                                <option value="1" :selected="true">1h - 20 zł</option>
                                <option value="8">8h - 160 zł</option>
                                <option value="12">12 h - 240 zł</option>
                            </select>
                            <small id="emailHelp" class="form-text text-muted">Za zakończoną pracę otrzymasz wynagrodzenie.</small>
                    </div>
                    <p><button type="submit" class="btn btn-primary" :disabled="status_pracy.in_work == 1 || form.czas_pracy==''">Pracuj</button><br></p>
                    </form>
                    <div class="text-center">
                        <p><button type="submit" class="btn btn-danger" @click="manual_end_work" :disabled="status_pracy.in_work == null">Zakończ pracę bez wynagrodzenia</button></p>
                    </div>
                </div>
                <!-- koniec hidden -->
            </div>
            <!-- koniec spinner -->

            <p>TEST</p>
            {{parseInt(this.time_work_from_database)}}
            <Countdown v-if="time_work_from_database !=0" :timestamp="parseInt(this.time_work_from_database)"> </Countdown>

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Countdown from "@/components/Countdown"
import { mapGetters } from 'vuex'
export default {
    name: 'praca',
    components: {
        Countdown
    },

    data(){
        return{
            form: {
                czas_pracy: ''
            },
            status_pracy: [],
            time_work_from_database: 0,
            loading: true,
            now: Date.now(),
        }
    },

    mounted(){
        this.WczytajStatusPracy();
    },

    methods: {

        onCountdownEnd(){
            this.manual_end_work();
        },

        WczytajStatusPracy(){
            axios.get('work/status')
                .then( (response) => {
                    this.status_pracy = response.data;
                    this.time_work_from_database = this.status_pracy.end_time_of_work;
                    console.log(this.time_work_from_database);
                    console.log(typeof this.time_work_from_database);
            })
            this.loading = false;
        },

        async submit_form(){

            await axios.post('work/start' , {
                czas_pracy: this.form.czas_pracy,
                wynagrodzenie: this.form.czas_pracy*20,
            });

            this.WczytajStatusPracy();

            this.$notify({
                type: 'success',
                title: "Powiadomienie",
                text: "Jesteś w pracy!",
            });

        },

        async manual_end_work(){

            await axios.post('work/manual_end');

            this.WczytajStatusPracy();

            this.$notify({
                type: 'error',
                title: "Powiadomienie",
                text: "Zakończyłeś pracę! Nie otrzymałeś wynagrodzenia!",
            });

        }

    },

    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    }

}
</script>

<style>

</style>