<template>
  <div id="homePage" class="page">
    <div class="header">
      <v-container>
        <v-layout row wrap>
          <v-flex lg6>
            <a href="/">
              <img class="logo-header" src="~/assets/img/logo_color.png" />
            </a>
          </v-flex>
          <v-flex lg6 class="align-right">
            <v-btn id="btnLogin" class="btn btn-secondary">Sign In</v-btn>
            <v-btn id="btnRegister" class="btn btn-primary">Sign Up</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="home-section">
      <v-container>Testing</v-container>
    </div>
    <Footer />
  </div>
</template>
<style>
.header {
  background-color: #c1f5e4;
}
.header .logo-header {
  height: 50px;
}
.home-section {
  padding: 30px 0;
  background-color: #c1f5e4;
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
}
.btn.btn-secondary {
  color: #ff7a76;
  background-color: #c1f5e4 !important;
  border: solid 2px #ff7a76;
}
#btnLogin {
  margin: 0px 20px;
}
</style>
<script>
const components = {
  Footer: () => import('~/components/Footer' /* webpackChunkName: "Footer" */)
}

export default {
  components
}
</script>
