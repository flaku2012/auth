<template>
    <div>
        <div class="row">
            <div class="col-3" >
                <div class="list-group text-center">
                    <li class="list-group-item list-group-item-info text-center">
                        <i class="bi bi-arrow-90deg-down"></i>
                        Akcje do wyboru<br>
                        PL-27-07-2814
                    </li>
                    <router-link to="/golebnik/1" class="list-group-item list-group-item-success list-group-item-action text-center">
                    Wróć do gołębnika
                    </router-link>
                    <router-link to="/golab/1/informacje_podstawowe" class="list-group-item list-group-item-action text-center">
                    Informacje podstawowe
                    </router-link>
                    <a href="#" class="list-group-item list-group-item-action text-center">
                        Przenieś do innego gołębnika
                    </a>
                    <router-link to="/golab/1/wystaw_na_bazar" class="list-group-item list-group-item-action text-center">
                        Wystaw gołębia na bazar
                    </router-link>
                    <router-link to="/golab/1/loty" class="list-group-item list-group-item-action text-center">
                        Loty gołębia
                    </router-link>
                    <router-link to="/golab/1/zdrowie" class="list-group-item list-group-item-action text-center">
                        Zdrowie
                    </router-link>
                    <router-link to="/golab/1/rodzice" class="list-group-item list-group-item-action text-center">
                        Rodzice
                    </router-link>
                    <a href="#" class="list-group-item list-group-item-warning list-group-item-action text-center">
                        Sprzedaj kupcowi za 10 zł
                    </a>
                    <a href="#" class="list-group-item list-group-item-danger list-group-item-action  text-center">
                        Zlikwiduj gołębia
                    </a>
                </div>
            </div>

            <!-- ŚRODEK -->
            <div class="col-9">
                <router-view></router-view>

                <!-- TU WYSWIETLAM WSZYSTKIE WIDOKI DOTYCZĄCE DANEGO GOŁĘBIA -->
                <!-- NP LOTY, ZDROWIE, RODZICE, ITP, ITD (patrz na otwarte karty w VSC) -->

                <!-- W KAŻDYM WIDOKU MUSIAŁBYM POBIERAĆ DANE DOTYCZĄCE DANEGO GOŁĘBIA PO ID (mam zrobione composables) -->
                <!-- JEST TO WYDAJNE ??  -->
                <!-- CZY JEDEN GŁÓWNY WIDOK A W NIM COMPONENTY ? -->
                
                <!-- OGÓLNIE MAM WRAŻENIE, ŻE DZIAŁA TO Z PEWNYM OPÓŻNIENIEM NP. DANE WSZYSTKICH GOŁĘBI W DANYM GOŁĘNIKU -->
                <!-- CZYLI MOŻE BYĆ ICH NP. 3 TO WIDZĘ GOŁYM OKIEM, ŻE JEST TO JAKA 0,5-1 SEK ŁADOWANIA DANYCH -->

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>