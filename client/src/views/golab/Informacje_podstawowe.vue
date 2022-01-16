<template>
  <div>
    <h3 class="text-center">Informacje podstawowe</h3>
    <img :src="'http://127.0.0.1:8000/api/../storage/images/systemowe/choroba.png'" class="" alt="nie wczytano zdjęcia" data-toggle="modal" data-target="#staticBackdrop">
    <hr>
    <div>
        <div class="row">
            <div class="col-6">
                <p class="text-center"><img :src="'http://127.0.0.1:8000/api/../storage/images/systemowe/wyszwanc1.jpg'" class="img-thumbnail" alt="#"></p>
            </div>
            <div class="col-6">
                <b>Potencjał:</b> 256 <br>
                <b>Wiek:</b> 1 (roczniak) <br>
                <b>Doświadczenie:</b> 20 <br>
                <b>Przebyty dystans:</b> 20 <br>
                <b>Ukończone loty:</b> 20 <br>
                <b>Zdobyte konkursy:</b> 20 <br>
                <b>Ilość lęgów:</b> 20 <br>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>