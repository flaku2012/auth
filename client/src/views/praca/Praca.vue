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

                <!-- <form class="text-center" @submit.prevent="submit_form">   
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
                </form> -->
                
                <div class="alert alert-success" role="alert" v-if="workStatus.in_work == 1">
                    Jesteś w pracy.
                </div>

                <form class="text-center"  @submit.prevent="submitForm" v-if="workStatus.in_work == null">   
                    <div class="form-group">
                            <label for="czas_pracy">Wybierz ile chcesz pracować:</label>
                            <select class="form-select" id="czas_pracy" v-model="formValue.work_time" :disabled="workStatus.in_work == 1">
                                <option disabled value="">Czas pracy</option>
                                <option value="1" :selected="true">1h - 20 zł</option>
                                <option value="8">8h - 160 zł</option>
                                <option value="12">12 h - 240 zł</option>
                            </select>
                            <small id="emailHelp" class="form-text text-muted">Za zakończoną pracę otrzymasz wynagrodzenie.</small>
                    </div>
                    <p><button type="submit" class="btn btn-primary">Pracuj</button><br></p>
                </form>
                

                <div class="text-center">
                    <p><button type="submit" class="btn btn-danger" @click="manualEndWork" v-if="workStatus.in_work == 1">Zakończ pracę bez wynagrodzenia</button></p>
                </div>

            <p>LICZNIK</p>
            <Countdown v-if="endTimeFromDatabase !=0" :timestamp="parseInt(endTimeFromDatabase)" @endTimeWork="endTimeWorkFun"> </Countdown>

            <br>
            ----------------------------------------
            <br>
            
            <TestAddToCart @add-item-to-cart="increaseNumberOfItems"/>
            --
            <br>
            XXXX
            <br>
            -
            <br>
            {{formValue}}

        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Countdown from "@/components/Countdown"
import TestAddToCart from "@/components/TestAddToCart"
import { mapGetters, useStore } from 'vuex'
import { onMounted, reactive, ref } from 'vue'
export default {
    name: 'praca',
    components: {
        Countdown,
        TestAddToCart
    },

    setup(){
        const store = useStore()
        const numberOfItems = ref(0)
        const workStatus = ref({})
        const endTimeFromDatabase = ref(0)
        const formValue = reactive({
            work_time: 0,
        })

        function updateDataUser()
        {
            console.log(store.dispatch('auth/getUser'));
        }

        async function submitForm(){
            await axios.post('work/start' , {
                work_time: formValue.work_time,
            });
            statusOfWork();
        }

        function increaseNumberOfItems(){
            numberOfItems.value++
            //console.log(numberOfItems.value)
        }   

        function statusOfWork(){
            axios.get('work/status')
                .then( (response) => {
                    workStatus.value = response.data
                    endTimeFromDatabase.value = workStatus.value.end_time_of_work
                    //console.log(endTimeFromDatabase.value)
            })
        }

        function manualEndWork(){
            axios.post('work/manual_end');
            statusOfWork()
            // this.$notify({
            //     type: 'error',
            //     title: "Powiadomienie",
            //     text: "Zakończyłeś pracę! Nie otrzymałeś wynagrodzenia!",
            // });
        }

        function endTimeWorkFun(){
            axios.post('work/end_time_work');
            statusOfWork()
            updateDataUser()
        }

        onMounted( ()=> {
            statusOfWork()
        });


        return{
            numberOfItems, 
            workStatus, 
            endTimeFromDatabase, 
            formValue, 
            submitForm, 
            increaseNumberOfItems, 
            statusOfWork, 
            manualEndWork, 
            endTimeWorkFun,
            updateDataUser
        }

    },

    // zweryfikować potrzebę umieszcznia tego tu
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