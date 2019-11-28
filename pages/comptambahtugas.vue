<template>
  <div id="dashboardPage" class="page fontchanger">
    <v-container-fluid class="grey lighten-5">
      <v-row no-gutters>
        <v-col lg="2">
          <v-list class="leftSide" dense>
            <v-list-item-group v-model="item" class="mt-10" color="#23573E">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.linkto"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
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
            <v-row v-model="listPositions">
              <v-col
                v-for="(listPosition, i) in listPositions"
                :key="i"
                cols="12"
                xs="12"
                sm="12"
                md="4"
                lg="4"
                xl="4"
              >
                <v-card class="kotak-perusahaan">
                  <div class="gambar align-center vmiddle">
                    <img
                      src="~/assets/img/adobe-illustrator.png"
                      alt=""
                      class="inside-pic"
                    />
                    <h4>
                      {{ listPosition.name }}
                    </h4>
                  </div>
                </v-card>
                <center>
                  <v-btn id="btnLihatTugas" dark>Tambah Tugas</v-btn>
                </center>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
export default {
  layout: 'CompanyLayout',
  data: () => ({
    listPositions: [],
    item: 0,
    items: [
      {
        text: 'Tambah Tugas',
        icon: 'mdi-playlist-plus',
        linkto: 'comptambahtugas'
      },
      {
        text: 'Tambah Posisi',
        icon: 'mdi-account-multiple-plus',
        linkto: 'comptambahposisi'
      },
      {
        text: 'Check Tugas Masuk',
        icon: 'mdi-bell-check',
        linkto: 'compchecktugas'
      }
    ]
  }),
  created() {
    const self = this
    const req = {
      url: '/position/listfull',
      method: 'get',
      params: {
        company_id: localStorage.getItem('company_id')
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    this.$axios(req)
      .then(function(response) {
        console.log(response.data.result)
        self.listPositions = response.data.result.data
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
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
h2,
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

.kotak-perusahaan {
  border: 3px solid #23573e !important;
  background-color: #d5f8ed !important;
  margin-bottom: 20px;
  /* border-radius: 10% !important; */
}
.gambar {
  background-color: white;
  /* border: 3px solid #23573e; */
  /* padding: 0px; */
  /* margin: 0px; */
  width: 100%;
  height: 270px;
}
.inside-pic {
  margin-top: 60px;
  margin-bottom: 10px;
}

#btnLihatTugas {
  background-color: #f07875;
  height: 43px;
  border-radius: 24px;
  box-shadow: none;
  width: 230px;
}

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
