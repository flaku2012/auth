<template>
    <div>
        
        <div class="row row-cols-5">
            <div class="col mb-4" v-for="pigeon in pigeons" :key="pigeon.index">
              <div class="card text-center ">
                <div class="text-center">
                    <router-link to="/golab/1/informacje_podstawowe">
                        <img :src="this.$store.state.main_img_url+'systemowe/wyszwanc1.jpg'" class="card-img-top" alt="nie wczytano zdjęcia" data-toggle="modal" data-target="#staticBackdrop">
                    </router-link>
                </div>
                <div class="card-body">
                  <router-link to="/golab/informacje_podstawowe" class="btn btn-sm btn-success position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {{pigeon.name}}
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span class="visually-hidden">New alerts</span>
                    </span>
                  </router-link>
                </div>
              </div>

                <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{pigeon.name}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <p>
                                <b>Potencjał:</b> 256 <br>
                                <b>Wiek:</b> 1 (roczniak) <br>
                                <b>Doświadczenie:</b> 20 <br>
                                <b>Przebyty dystans:</b> 20 <br>
                                <b>Ukończone loty:</b> 20 <br>
                                <b>Zdobyte konkursy:</b> 20 <br>
                                <b>Ilość lęgów:</b> 20 <br>
                            </p>
                            <hr>
                            <div class="alert alert-warning" role="alert">
                                Twój gołąb jest chory!
                            </div>
                            <div class="alert alert-warning" role="alert">
                                Twój gołąb głoduje!
                            </div>
                            <div class="alert alert-danger" role="alert">
                                Twój gołąb zdycha!
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                        </div>
                        </div>
                    </div>
                    </div>
                <!-- Koniec Modal -->

            </div>
        </div>

        
    </div>
</template>

<script setup>
import { usePigeons } from '@/composables/pigeon'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

    const route = useRoute()
    const { pigeons, getPigeons } = usePigeons()

    onMounted( getPigeons(route.params.id) )


</script>