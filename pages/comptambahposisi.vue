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
          <v-container class="grey lighten-5 mt-2 ml-5">
            <h1>
              Tambah Posisi Baru
            </h1>
            <v-form ref="form" @submit="NewPosition">
              <v-row>
                <v-col>
                  <span>Masukkan Posisi Magang</span>
                  <v-text-field
                    id="Posisi"
                    v-model="Posisi"
                    solo
                    label="Posisi"
                    type="text"
                  ></v-text-field>
                  <span>Deskripsi</span>
                  <v-text-field
                    id="Deskripsi"
                    v-model="Deskripsi"
                    solo
                    label="Deskripsi"
                    type="text"
                  ></v-text-field>
                  <span>Skor Untuk Sertifikat</span>
                  <v-text-field
                    id="certificate_trigger"
                    v-model="certificateTrigger"
                    solo
                    label="Masukkan Angka Untuk Sertifikat"
                    type="number"
                  ></v-text-field>
                  <span>Masukkan Gambar</span>
                  <v-text-field
                    id="image"
                    v-model="image"
                    solo
                    label="Gambar"
                    type="text"
                  ></v-text-field>
                  <v-btn id="btnSubmit" color="#F0827F" block type="submit"
                    >Submit</v-btn
                  >
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  layout: 'CompanyLayout',
  data: () => ({
    Posisi: '',
    Deskripsi: '',
    certificateTrigger: '',
    image: '',
    item: 1,
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
  methods: {
    NewPosition(e) {
      e.preventDefault()
      const self = this
      const req = {
        url: '/position',
        method: 'post',
        data: {
          name: this.Posisi,
          description: this.Deskripsi,
          active: true,
          certificate_trigger_score: this.certificateTrigger,
          image: this.image
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
      this.$axios(req)
        .then(async function(response) {
          await console.log(response.data.result)
          await Swal.fire('success')
          await self.$router.push('/comptambahtugas')
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
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
#btnSubmit {
  color: #f4fcf7;
}
</style>
