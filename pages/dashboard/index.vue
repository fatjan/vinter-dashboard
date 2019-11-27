<template>
  <div id="dashboardPage" class="page">
    <v-layout row wrap>
      <h1>Dashboard</h1>
    </v-layout>
    <v-layout row wrap>
      <v-flex lg5>
        <div class="user-information">Name</div>
      </v-flex>
      <v-flex lg7>
        <v-layout row wrap>
          <v-flex lg4>Sedang Berlangsung</v-flex>
          <v-flex lg4>Magang Selesai</v-flex>
          <v-flex lg4>Certificate</v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex lg6>
        <h4>Magang Berlangsung</h4>
      </v-flex>
      <v-flex lg6 class="align-right">
        <v-btn color="success">Temukan Lainnya</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="(item, index) in [1, 2]" :key="index" lg6>Testing</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex lg10>
        <h4>Magang Selesai</h4>
      </v-flex>
      <v-flex v-for="(item, index) in [1, 2]" :key="index" lg6>Testing</v-flex>
    </v-layout>
    <v-row>
      <v-col lg4>Testing</v-col>
      <v-col lg4>Tesing</v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: 'OtherPageLayout'
}
</script>
