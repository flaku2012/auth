<template>
  <div>
      <div class="row">
        <!-- LEWA -->
        <div class="col-2" >
        <div>
            <div>{{pigeonHawk.name}}</div>
            <div>
                <b>Poziom czystości:</b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: pigeonHawk.level_clean + '%'}" aria-valuemin="0" aria-valuemax="100">{{pigeonHawk.level_clean}} %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom karmnika:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: pigeonHawk.level_food + '%'}" aria-valuemin="0" aria-valuemax="100">{{pigeonHawk.level_food}} %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom poideł:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: pigeonHawk.level_water + '%'}" aria-valuemin="0" aria-valuemax="100">{{pigeonHawk.level_water}} %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom grytownika:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: pigeonHawk.level_grit + '%'}" aria-valuemin="0" aria-valuemax="100">{{pigeonHawk.level_grit}} %
                    </div>
                </div>
            </div>
            <hr>
            <div class="list-group text-center">
                <li class="list-group-item list-group-item-info text-center">Akcje do wyboru</li>
                <a href="#" class="list-group-item list-group-item-action text-center">
                    Wyczyść gołębnik
                </a>
                <a href="#" class="list-group-item list-group-item-action text-center">
                    Uzupełnij karmnik
                </a>
                <a href="#" class="list-group-item list-group-item-action text-center">
                    Uzupełnij poidło
                </a>
                <a href="#" class="list-group-item list-group-item-action text-center">Uzupełnij grytownik</a>
                <a href="#" class="list-group-item list-group-item-action text-center">Ulepsz gołębnik</a>
            </div>
        </div>
        </div>

        <!-- ŚRODEK -->
        <div class="col-10 border">
            
            <Pigeons/>       

        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-12 text-center">
            <router-link to="">
                <img :src="this.$store.state.main_img_url+'systemowe/trenuj.jpg'" class="" alt="nie wczytano zdjęcia" data-toggle="modal" data-target="#staticBackdrop">
            </router-link>
            <router-link to="/trening/informacje_podstawowe" class="btn btn-sm btn-secondary">Trening</router-link>
        </div>
    </div>
    TT: {{this.$store.state.test}}
  </div>
</template>

<script setup>
import { usePigeonHawks } from '@/composables/pigeonhawks'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Pigeons from '@/components/pigeonHawks/Pigeons'

    const route = useRoute()

    const { pigeonHawk, getPigeonHawk } = usePigeonHawks()

    onMounted( getPigeonHawk(route.params.id) )


</script>

<style>
    
</style>