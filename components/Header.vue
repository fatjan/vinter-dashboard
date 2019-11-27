<template>
  <v-row class="header">
    <v-container>
      <v-layout row wrap>
        <v-flex lg6 md6 sm6>
          <a href="/">
            <img class="logo-header" src="~/assets/img/logo_color.png" />
          </a>
        </v-flex>
        <v-flex lg6 md6 sm6 class="align-right header-menu">
          <a href="#" class="nav-list">Dashboard</a>
          <a href="#" class="nav-list">Daftar Perusahaan</a>
          <a href="#">
            <v-btn id="btnSignOut" class="btn btn-primary">Keluar</v-btn>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </v-row>
</template>
<style scoped>
.header {
  position: fixed;
  width: 101%;
  z-index: 100;
  background: #fff;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
}
.logo-header {
  height: 40px;
}
.header-menu a {
  padding: 10px 20px;
}
.header-menu .nav-list {
  font-family: 'Muli', sans-serif;
  font-weight: 800;
  color: #23573f !important;
}
.btn {
  height: 40px;
  box-shadow: none;
  border-radius: 20px;
  width: 130px;
}
.btn.btn-primary {
  color: white;
  background-color: #ff7a76 !important;
  font-family: 'Muli', sans-serif;
  border-color: #ff7a76;
}
</style>
