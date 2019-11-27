<template>
  <div id="dashboardPage" class="page fontchanger">
    <v-container-fluid class="grey lighten-5">
      <v-row no-gutters>
        <v-col lg="2">
          <v-list class="leftSide" dense>
            <v-list-item-group v-model="item" class="mt-10" color="#23573E">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon>mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col lg="10">
          <v-container class="grey lighten-5 mt-2">
            <v-row class="fontweightchanger" no-gutters>
              <h1>Tugas UI/UX Designer</h1>
            </v-row>
            <v-row no-gutters class="mt-2">
              <h3>UI/UX designer @ toko</h3>
            </v-row>
            <v-row no-gutters class="pageChooser mt-2">
              <v-col class="ml-3"
                ><strong
                  ><v-icon>mdi-page-first</v-icon>sebelumnya</strong
                ></v-col
              >
              <v-col></v-col>
              <v-col class="align-right mr-5"
                ><strong>selanjutnya</strong
                ><v-icon>mdi-page-last</v-icon></v-col
              >
            </v-row>
            <v-row no-gutters class="mt-2">
              <p>
                ini adalah tahap awal yang harus kamu ikuti agar bisa
                melanjutkan petualangan berikutnya, SO, are you ready for having
                fun? Let's start your work from here, and your life would be
                change forever
              </p>
            </v-row>
            <v-row no-gutters class="mt-2">
              <iframe
                width="80%"
                height="500px"
                src="https://www.youtube.com/embed/K2MBKvetdEw"
              >
              </iframe>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
export default {
  layout: 'OtherPageLayout',
  data: () => ({
    item: 0,
    items: [
      { text: 'Real-Time', icon: 'mdi-book-open-page-variant' },
      { text: 'Audience', icon: 'mdi-book-open-page-variant' },
      { text: 'Conversions', icon: 'mdi-book-open-page-variant' },
      { text: 'Audience', icon: 'mdi-book-open-page-variant' }
    ]
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:400,700&display=swap');

.fontchanger {
  font-family: 'Muli', sans-serif;
}
.leftSide {
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  font: #000000;
  border-radius: 0 30px 0 0;
  background-color: #f4fcf7;
  min-height: 63vh;
}
.pageChooser {
  background-color: #f4fcf7;
  color: #ed6e7f;
}
h1 {
  font-weight: 1000;
}
</style>
