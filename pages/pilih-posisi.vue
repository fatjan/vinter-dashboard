<template>
  <div>
    <v-row class="banner">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="11" lg="11" xl="11">
            <h3>
              <strong>
                BukaToko
              </strong>
            </h3>
            <p>
              BukaToko adalah startup e-commerce pertama di Bojonegoro. Start-up
              ini membantu IKM di Bojonegoro memasarkan produk mereka.
            </p>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="1" lg="1" xl="1">
            <img src="~/assets/img/dot.png" alt="" class="dot" />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="left">
          <h5>
            <img
              src="~/assets/img/portfolio.png"
              alt=""
              width="25px"
              class="mini-img"
            />
            E-Commerce
          </h5>
          <h5>
            <img
              src="~/assets/img/location.png"
              alt=""
              width="25px"
              class="mini-img"
            />
            Kab. Bojonegoro
          </h5>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
          <h4>
            Posisi Tersedia
          </h4>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'OtherPageLayout'
}
</script>
<style>
.banner {
  background-color: #c1f5e4;
  margin-top: 65px;
  height: 150px;
  padding: 5px 0px;
}
.dot {
  padding-top: 15px;
}
h5,
h4,
h3,
p {
  color: #23573e;
}
h5 {
  padding-bottom: 10px;
}
p {
  font-size: 18px;
}
.left {
  padding-top: 25px;
}
.mini-img {
  margin-right: 10px;
}
</style>
