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
                    <router-link to="/sklep/pasze" class="list-group-item list-group-item-action text-center" active-class="active">
                    Pasze
                    </router-link>
                    <router-link to="/sklep/lekarstwa" class="list-group-item list-group-item-action text-center" active-class="active">
                    Lekarstwa
                    </router-link>
                    <router-link to="/sklep/gryt" class="list-group-item list-group-item-action text-center" active-class="active">
                    Gryt
                    </router-link>
                    <router-link to="/sklep/obraczki" class="list-group-item list-group-item-action text-center" active-class="active">
                    Obrączki
                    </router-link>
                    <router-link to="/sklep/tipesy" class="list-group-item list-group-item-action text-center" active-class="active">
                    Tipesy
                    </router-link>
                    <router-link to="/sklep/budowlanka" class="list-group-item list-group-item-action text-center" active-class="active">
                    Budowlanka
                    </router-link>
                    <router-link to="/sklep/narzedzia" class="list-group-item list-group-item-action text-center" active-class="active">
                    Narzędzia
                    </router-link>
                </div>
            </div>

            <!-- ŚRODEK -->
            <div class="col-9">
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