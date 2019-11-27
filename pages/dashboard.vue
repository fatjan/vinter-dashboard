<template>
  <div id="dashboardPage" class="page">
    <v-container>
      <v-row class="title-page">
        <h1>Dashboard</h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <div class="user-information green-bg">
            <v-row>
              <v-col md="4" lg="4" class="align-right user-photo">
                <img src="~/assets/img/intern-01.png" alt="" />
              </v-col>
              <v-col md="8" lg="8">
                <h4>Hi, Nama</h4>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col lg7>
          <v-row>
            <v-col lg4>
              <div class="user-check align-center">
                Sedang Berlangsung
              </div>
            </v-col>
            <v-col lg4>
              <div class="user-check align-center">Magang Selesai</div>
            </v-col>
            <v-col lg4>
              <div class="user-check align-center">Certificate</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg6>
          <h4>Magang Berlangsung</h4>
        </v-col>
        <v-col lg6 class="align-right">
          <v-btn class="btn-primary">Temukan Lainnya</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in [1, 2]"
          :key="index"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="intern-card green-bg">
            <v-row>
              <div class="intern-img">
                <img src="~/assets/img/intern-01.png" alt="" />
              </div>
              <div class="intern-deskrip">
                <h5>Nama Internship</h5>
                <p>Nama Perusahaan</p>
                <div class="wrap-progress" style="width:100%">
                  <div class="progress-intern" style="width:60%"></div>
                </div>
                <button class="btn-primary">Lanjutkan Magangmu</button>
              </div>
              <div class="percentage-intern">
                100%
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row class="done-intern">
        <v-col lg10>
          <h4>Magang Selesai</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(item, index) in [1, 2]"
          :key="index"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="intern-card green-bg">
            <v-row>
              <div class="intern-img">
                <img src="~/assets/img/intern-01.png" alt="" />
              </div>
              <div class="intern-deskrip">
                <h5>Nama Internship</h5>
                <p>Nama Perusahaan</p>
                <div class="wrap-progress" style="width:100%">
                  <div class="progress-intern" style="width:100%"></div>
                </div>
                <button class="btn-primary">Lihat Sertifikat</button>
              </div>
              <div class="percentage-intern">
                100%
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.title-page h1 {
  padding: 12px;
  font-weight: 900;
}
.green-bg {
  background-color: #c1f5e4;
}
.user-check {
  background-color: #c1f5e4;
  height: 104px;
  margin-top: -12px;
  padding: 12px;
}
.user-photo img {
  width: 80px;
  max-height: 80px;
  border-radius: 40px;
}
.intern-card {
  padding: 24px;
}
.intern-img {
  height: 120px;
  padding-left: 12px;
  padding-right: 24px;
}
.intern-img img {
  height: 120px;
}
.intern-deskrip {
  font-family: 'Muli', sans-serif;
  width: 320px;
}
.intern-deskrip h5 {
  margin-bottom: 0px;
}
.wrap-progress {
  padding: 2px;
  background-color: aliceblue;
  height: 16px;
  border-radius: 8px;
  margin-top: -5px;
  margin-bottom: 8px;
}
.progress-intern {
  height: 12px;
  border-radius: 6px;
  background-color: #23573f;
}
.percentage-intern {
  padding-left: 10px;
  margin-top: 56px;
}
.btn-primary {
  color: white;
  background-color: #ff7a76 !important;
  font-family: 'Muli', sans-serif;
  border-color: #ff7a76;
  border-radius: 18px;
  box-shadow: none;
  padding: 6px 20px;
}
.done-intern {
  margin-top: 10px;
}
</style>
<script>
export default {
  layout: 'OtherPageLayout',
  head() {
    return {
      title: 'Dashboard'
    }
  }
}
</script>
