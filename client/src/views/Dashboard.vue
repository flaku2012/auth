<template>
    <div>
        <div class="row">
        <!-- 1 -->
        <div class="col-3">
            <div class="card border shadow-0">
                <router-link to="/golebnik/1">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
                    <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                    </a>
                </div>
                </router-link>
                <div class="card-body text-center">
                        <h5 class="card-title">Gołębnik 1 (nazwa własna)<br><small><span class="badge bg-secondary">Lotowy</span></small></h5>
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
          <!-- 2 -->
          <div class="col-3">
              <div class="card border shadow-0">
                <router-link to="/golebnik/1">
                  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" data-toggle="modal" data-target="#info_o_sprzatnieciu">
                      <img src="https://www.lasy.gov.pl/pl/edukacja/blogi/blog-lesniczego/panie-lesniczy-da-pan-zrobic-drzewa/9593.jpg" class="img-fluid" />
                      <a href="#!">
                      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
                      </a>
                  </div>
                </router-link>
              </div>
              <!-- Modal -->
                  <div class="modal fade" id="info_o_sprzatnieciu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Sprzątnij !</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <div>
                              <p>Czy chcesz sprzątnąć te pole pod budowę gołębnika?</p>
                              <p>Koszt: 300 zł.</p>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-warning">Sprzątnij</button>
                      </div>
                      </div>
                  </div>
                  </div>
              <!-- Modal -->
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'dashboard',
  components: {
    //
  }
}
</script>
