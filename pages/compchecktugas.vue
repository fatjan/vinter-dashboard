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
            <v-row>
              <v-col
                v-for="(item, i) in taskData"
                :key="i"
                cols="12"
                xs="12"
                sm="12"
                md="4"
                lg="4"
                xl="4"
              >
                <v-card class="kotak-perusahaan">
                  <div class="task-info">
                    <div class="text">
                      <p>Nama:</p>
                      <h5>{{ item.intern.name }}</h5>
                      <p>Posisi:</p>
                      <h5>{{ item.position.name }}</h5>
                      <p>Deskripsi Task:</p>
                      <h5>
                        {{ item.task.description }}
                      </h5>
                    </div>
                    <div>
                      <v-row>
                        <v-col cols="7"> </v-col>
                        <v-col cols="5">
                          <a :href="item.attachment" download>
                            <v-btn id="btnAttachment" dark>Attachment</v-btn>
                          </a>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                  <v-row v-if="item.approve" class="mt-2">
                    <v-col class="ml-4">
                      <!-- <v-text-field></v-text-field> -->
                    </v-col>
                    <v-col>
                      <v-btn id="btnDone" dark>Approved</v-btn>
                    </v-col>
                  </v-row>
                  <v-row v-else class="mt-2">
                    <v-col class="ml-4">
                      <v-text-field
                        id="skor"
                        v-model="score"
                        solo
                        label="masukkan skor"
                        type="text"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-form ref="form">
                        <v-btn id="btnLihatTugas" @click="Confirm(item.id)" dark
                          >konfirmasi</v-btn
                        >
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
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
    taskData: [],
    score: null,
    item: 3,
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
    this.GetMyTaskData()
  },
  methods: {
    Confirm(id) {
      if (this.score <= 0) {
        Swal.fire('Tolong Beri Score Minimal 1')
        return
      }
      const self = this
      const req = {
        url: '/companyaccept',
        method: 'post',
        data: {
          ongoing_task_id: id,
          score: this.score
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
      this.$axios(req)
        .then(function(response) {
          self.GetMyTaskData()
          Swal.fire('Success Konfirmasi')
          console.log(response.data.result)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    GetMyTaskData() {
      const self = this
      const req = {
        url: '/ongoingtask/list',
        method: 'get',
        params: {
          done: true,
          company_id: localStorage.getItem('company_id')
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
      this.$axios(req)
        .then(function(response) {
          self.taskData = response.data.result
          console.log(response.data.result[0].approve)
          console.log(response.data.result)
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
.banner {
  background-color: #c1f5e4;
  margin-top: 65px;
  /* height: 150px; */
  padding: 5px 0px;
}
.dot {
  padding-top: 15px;
}
h5,
h4,
h2 {
  color: #23573e;
}
p {
  margin-bottom: 0px;
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
  height: 360px;
}
.task-info {
  background-color: white;
  /* border: 3px solid #23573e; */
  /* padding: 0px; */
  /* margin: 0px; */
  width: 100%;
  height: 270px;
  padding: 10px 0px 0px 10px;
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
  width: 150px;
}

#btnDone {
  background-color: #23573e;
  height: 43px;
  border-radius: 24px;
  box-shadow: none;
  width: 150px;
}

#btnAttachment {
  margin-top: 10px;
  background-color: grey;
  height: 30px;
  border-radius: 24px;
  box-shadow: none;
  width: 120px;
  font-size: 14px;
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
.text {
  height: 190px;
}
</style>
