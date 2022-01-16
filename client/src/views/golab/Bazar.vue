<template>
  <div>
        <h3 class="text-center">Wystaw na bazar</h3>
        <hr>
        <form class="form">
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Widoczność:</label>
            <div class="col-sm-10">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1">
                <label class="custom-control-label" for="customSwitch1">Czy twoja sekcja ma być widoczna w wyszukiwarce sekcji?</label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Zmiana nazwy sekcji:</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword">
              <small id="passwordHelpBlock" class="form-text text-muted">
                Koszt: 100 zł.
              </small>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-success">Zapisz</button>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Opis sekcji:</label>
            <div class="col-sm-9">
              <textarea type="password" class="form-control" id="inputPassword" placeholder="Tu wpisz opis swojej sekcji." rows="4"></textarea>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-success">Zapisz</button>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Czesne:</label>
            <div class="col-sm-10">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="czesne">
                <label class="custom-control-label" for="czesne">Czy w twojej sekcji należy płacić cotygodniowe czesne?</label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Wysokość czesnego:</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword" placeholder="Wysokość czesne w złotówkach.">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Wystaw</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>