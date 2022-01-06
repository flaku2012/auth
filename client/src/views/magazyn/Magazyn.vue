<template>
  <div class="container">
        <div class="row">
            <div class="col-3" >
                <div class="list-group text-center">
                    <li class="list-group-item list-group-item-info text-center">
                        <i class="bi bi-arrow-90deg-down"></i>Akcje do wyboru
                    </li>
                    <router-link to="/miasto" class="list-group-item list-group-item-secondary list-group-item-action text-center" active-class="active" >
                    Miasto
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Pasze
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Lekarstwa
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Gryt
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Obrączki
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Tipesy
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Budowlanka
                    </router-link>
                    <router-link to="/magazyn" class="list-group-item list-group-item-action text-center">
                    Narzędzia
                    </router-link>
                </div>
            </div>

            <!-- ŚRODEK -->
            <div class="col-9">
                MENU JAKO FUNKCJE TYLKO PODGLĄD PO KATEGORII PRODUKTÓW
                <router-view></router-view>
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