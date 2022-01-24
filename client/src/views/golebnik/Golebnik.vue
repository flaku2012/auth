<template>
  <div>
      <div class="row">
        <!-- LEWA -->
        <div class="col-2" >
        <div>
            <div>
                <b>Poziom czystości:</b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar"  aria-valuemin="0" aria-valuemax="100">1 %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom karmnika:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar">23 %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom poideł:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar">23 %
                    </div>
                </div>
            </div>
            <div>
                <b>Poziom grytownika:
                  </b>
                <div class="progress">
                    <div class="progress-bar" role="progressbar">23 %
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
         
          <div class="row row-cols-5">
            <div class="col mb-4" v-for="golab in pojemnosc_golebnika" :key="golab.index">
              <div class="card text-center ">
                <div class="text-center">
                    <router-link to="/golab/1/informacje_podstawowe">
                        <img :src="this.$store.state.main_img_url+'systemowe/wyszwanc1.jpg'" class="card-img-top" alt="nie wczytano zdjęcia" data-toggle="modal" data-target="#staticBackdrop">
                    </router-link>
                </div>
                <div class="card-body">
                  <router-link to="/golab/informacje_podstawowe" class="btn btn-sm btn-success position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    PL-27-07-2814
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
                            <h5 class="modal-title" id="exampleModalLabel">PL-27-07-2814</h5>
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

<script>
export default {

    data(){
        return{
            pojemnosc_golebnika: 2,
        }
    },    

}
</script>

<style>
    
</style>