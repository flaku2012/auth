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
            <!-- <router-view></router-view> -->
            <h3 class="text-center">Praca</h3>
            <hr>
            
            <form class="text-center">
            <div class="form-group">
                    <label for="wybierz_nowy_oddzial">Wybierz ile chcesz pracować:</label>
                    <select class="form-select" id="wybierz_nowy_oddzial">
                        <option value="1">1h - 20 zł</option>
                        <option value="2">8h - 180 zł</option>
                        <option value="3">12 h - 250 zł</option>
                    </select>
                    <small id="emailHelp" class="form-text text-muted">Za zakończoną pracę otrzymasz wynagordzenie.</small>
            </div>
            <button type="submit" class="btn btn-primary">Pracuj</button>
        </form>


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