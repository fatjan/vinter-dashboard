<template>
  <div class="footer">
    <v-container>
      <v-layout row wrap>
        <v-flex lg5 class="right-footer">
          <img src="~/assets/img/logo_white.png" alt="white_logo" />
          <p>
            © Vinter adalah sebuah web base application yang dapat digunakan
            untuk menambah pengalaman kerja dengan metode magang online.
          </p>
          <a href="#" style="margin-right:50px;">Kebijakan Privasi</a>
          <a href="#">Ketentuan Layanan</a>
        </v-flex>
        <v-flex lg5></v-flex>
        <v-flex lg2>
          <h3 style="margin-top:15px;">About Vinter</h3>
          <p>About</p>
          <p>FAQ</p>
          <p>Contact</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
.footer {
  background-color: #23573f;
  color: white;
  height: 200px;
  font-family: 'Muli', sans-serif;
}
.footer a {
  color: #c1f5e4;
  text-decoration: none;
}
.footer p {
  margin: 10px 0px;
}
.footer img {
  height: 40px;
}
</style>
