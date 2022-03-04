<template>
  <div>
    <h3 class="text-center">Informacje podstawowe</h3>
    <img :src="this.$store.state.main_img_url+'systemowe/choroba.png'" class="" alt="nie wczytano zdjęcia" data-toggle="modal" data-target="#staticBackdrop">
    <hr>
    <div>
        <div class="row">
            <div class="col-6">
                <p class="text-center"><img :src="this.$store.state.main_img_url+'systemowe/wyszwanc1.jpg'" class="img-thumbnail" alt="#"></p>
            </div>
            <div class="col-6">
                <b>Potencjał:</b> --- <br>
                <b>Wiek:</b> 1 --- <br>
                <b>Doświadczenie:</b> --- <br>
                <b>Przebyty dystans:</b> -- <br>
                <b>Ukończone loty:</b> -- <br>
                <b>Zdobyte konkursy:</b> -- <br>
                <b>Ilość lęgów:</b> -- <br>
                <b>Głód:</b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width:100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                    </div>
                </div>
                <b>Pragnienie:</b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width:100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                    </div>
                </div>
                <b>Zdrowie:</b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width:100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                    </div>
                </div>
            </div>
        </div>
    </div>
    || {{pigeon}} ||
  </div>
</template>


<script setup>

import { useRoute } from 'vue-router'
import { usePigeons } from '@/composables/pigeon'
import { onMounted } from '@vue/runtime-core'

    const route = useRoute()
    const { pigeon, getPigeon } = usePigeons()

    onMounted( getPigeon(route.params.id) )

</script>

<style>

</style>