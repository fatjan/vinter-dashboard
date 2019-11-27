<template>
  <v-layout row wrap class="header-home">
    <v-container>
      <v-layout row wrap>
        <v-flex lg6 md6 sm6>
          <a href="/">
            <img class="logo-header" src="~/assets/img/logo_color.png" />
          </a>
        </v-flex>
        <v-flex lg6 md6 sm6 class="align-right header-menu">
          <a href="#" class="nav-list">Our Partner</a>
          <a href="/login">
            <v-btn id="btnSignIn" class="btn btn-secondary btn-login"
              >Sign In</v-btn
            >
          </a>
          <a href="/register">
            <v-btn id="btnSignUp" class="btn btn-primary btn-register"
              >Sign Up</v-btn
            >
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<style>
.header-home {
  background-color: #c1f5e4;
}
.logo-header {
  height: 40px;
}
.header-menu a {
  padding: 10px 10px;
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
.btn.btn-secondary {
  color: #ff7a76;
  background-color: #c1f5e4 !important;
  border: solid 2px #ff7a76;
  font-family: 'Muli', sans-serif;
}
</style>
