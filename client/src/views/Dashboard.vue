<template>
    <div>
        <div class="container">

            <div class="row row-cols-4">
        
                <div class="card border shadow-0" v-for="pigeonHawk in pigeonHawks" :key="pigeonHawk.id" >
                    <router-link :to="{ name: 'Golebnik', params: { id: pigeonHawk.id } }">
                    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
                        <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                        </a>
                    </div>
                    </router-link>
                    <div class="card-body text-center">
                            <h5 class="card-title">{{ pigeonHawk.name }}<br><small><span class="badge bg-secondary">Lotowy</span></small></h5>
                            <div class="card-text">
                                <b>Poziom czystości:</b>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%
                                    </div>
                                </div>
                                <b>Poziom karmika:</b>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%
                                    </div>
                                </div>
                                <b>Poziom poideł:</b>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%
                                    </div>
                                </div>
                                <b>Poziom grytownika:</b>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width:90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>                      
            </div>

        </div>

    </div>
</template>

<script setup>
    import { usePigeonHawks } from '@/composables/pigeonhawks'
    import { onMounted } from 'vue'

    const { pigeonHawks, getPigeonHawks } = usePigeonHawks()

    onMounted( getPigeonHawks )

</script>


