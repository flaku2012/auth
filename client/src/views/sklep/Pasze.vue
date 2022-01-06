<template>
  <div>
      <h3 class="text-center">Sklep - pasze</h3>
    <hr>
    <div>
        <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                <th scope="col">Nazwa</th>
                <th scope="col">Cena za szt.</th>
                <th scope="col">Ilość</th>
                <th scope="col">Razem</th>
                <th scope="col">KUP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Owies</td>
                    <td>10</td>
                    <td><input type="text" class="form-control form-control-sm" value="1"></td>
                    <td>10 zł</td>
                    <td><router-link to="#"><button class="btn btn-sm btn-sm btn-success">KUP</button></router-link></td>
                </tr>
                <tr>
                    <td>Żyto</td>
                    <td>10</td>
                    <td><input type="text" class="form-control form-control-sm" value="2"></td>
                    <td>20 zł</td>
                    <td><router-link to="#"><button class="btn btn-sm btn-sm btn-success">KUP</button></router-link></td>
                </tr>
            </tbody>
        </table>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>