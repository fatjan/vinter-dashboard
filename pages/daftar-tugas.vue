<template>
  <v-container class="body-daftar-tugas">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
        <v-card class="kotak-perusahaan">
          <div class="gambar align-center vmiddle">
            <img :src="positionChosen.image" alt class="inside-pic" />
            <h4>{{ positionChosen.name }}</h4>
          </div>
        </v-card>
        <v-row @click="toPositionPage" class="vmiddle align-right" dark>
          <strong>
            <v-icon>mdi-page-first</v-icon>Kembali ke Pilih Posisi
          </strong>
        </v-row>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
        <v-row>
          <v-col cols="9">
            <h1>{{ positionChosen.name }}</h1>
          </v-col>
          <v-col cols="3">
            <v-btn
              id="btnDaftarMagang"
              @click="daftarMagang"
              class="vmiddle align-right"
              dark
              >Daftar Magang</v-btn
            >
          </v-col>
        </v-row>
        <h5 class="desc">{{ positionChosen.desc }}</h5>
        <h6>Susunan Materi & Tugas</h6>
        <v-card v-for="item in listTask" :key="item.id" class="kotak-tugas">
          <v-row>
            <v-col cols="1" class="align-center vmiddle">
              <h2>{{ listTask.indexOf(item) + 1 }}</h2>
            </v-col>
            <v-col cols="8">
              <h5>{{ item.name }}</h5>
            </v-col>
            <v-col cols="3">
              <center>
                <v-btn
                  id="btnLihatMateri"
                  @click="lihatMateri"
                  class="vmiddle align-center"
                  dark
                  >Lihat Materi</v-btn
                >
              </center>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:400,700,800&display=swap');

.body-daftar-tugas {
  padding-top: 75px;
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
  height: 47%;
  margin-top: 15px;
  margin-bottom: 10px;
}
h1,
h5 {
  font-weight: 700;
  color: #23573e;
}
.desc {
  font-weight: 700;
  color: #c6c6c6;
  border-bottom: 2px solid #c6c6c6;
  padding-bottom: 10px;
}
h2 {
  color: #f07875;
}
h1,
h5,
h6,
p {
  font-family: 'Muli', sans-serif;
}

h6 {
  font-weight: 700;
}
.kotak-tugas {
  border-left: 8px solid #f07875;
  margin-bottom: 15px;
}
#btnLihatMateri {
  background-color: #f07875;
  height: 43px;
  border-radius: 24px;
  box-shadow: none;
  width: 150px;
  margin: 15px 0px;
}
#btnDaftarMagang {
  background-color: #ffffff;
  border: 2px solid #f07875;
  color: #f07875;
  height: 43px;
  border-radius: 24px;
  box-shadow: none;
  width: 150px;
  margin: 15px 0px 0px 30px;
}
h6 {
  margin: 10px 0px 15px 0px;
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'OtherPageLayout',
  data() {
    return {
      positionChosen: {}
    }
  },
  computed: {
    ...mapState({
      position: (state) => state.pilihPosisi.position,
      listTask: (state) => state.daftarTugas.listTask
    })
  },
  mounted() {
    this.getTask()
    this.getPositionChosen()
  },
  methods: {
    ...mapMutations({ setState: 'pilihPerusahaan/setState' }),
    async getTask() {
      const getAllTasks = await this.$store.dispatch('daftarTugas/getAllTask')
      await this.$store.dispatch('daftarTugas/setAllTask', getAllTasks)
    },
    // seeTask(item) {
    //   this.setState({ position: item })
    //   console.log('itemposition', item)
    //   this.$router.push('/daftar-tugas')
    // }
    toPositionPage() {
      this.$router.push('/pilih-posisi')
    },
    lihatMateri() {
      this.$router.push('/taskdetail')
    },
    daftarMagang() {},
    getPositionChosen() {
      this.positionChosen.name = localStorage.getItem('positionName')
      this.positionChosen.desc = localStorage.getItem('positionDesc')
      this.positionChosen.image = localStorage.getItem('positionImg')
    }
  }
}
</script>
