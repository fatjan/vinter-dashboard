<template>
  <div>
    <v-row class="banner">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="11" lg="11" xl="11">
            <h2>
              <strong>
                {{ company.name }}
              </strong>
            </h2>
            <p>
              {{ company.description }}
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
            {{ company.address }}, Kab. Bojonegoro
          </h5>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
          <h4>
            Posisi Tersedia
          </h4>
          <v-row>
            <v-col
              v-for="item in listPosition"
              :key="item.id"
              cols="12"
              xs="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <v-card class="kotak-perusahaan">
                <div class="gambar align-center vmiddle">
                  <img v-bind:src="item.image" alt="" class="inside-pic" />
                  <h4>
                    {{ item.name }}
                  </h4>
                  <h4 style="font-size: 13px;">
                    {{ item.description }}
                  </h4>
                  <h4 style="font-size: 13px;">
                    Nilai min. kelulusan: {{ item.certificate_trigger_score }}
                  </h4>
                </div>
              </v-card>
              <center>
                <v-btn id="btnLihatTugas" @click="seeTask(item)" dark
                  >Lihat Tugas</v-btn
                >
              </center>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
  height: 47%;
  margin-top: 15px;
  margin-bottom: 10px;
}

#btnLihatTugas {
  background-color: #f07875;
  height: 43px;
  border-radius: 24px;
  box-shadow: none;
  width: 230px;
}
</style>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  layout: 'OtherPageLayout',
  computed: {
    ...mapState({
      listPosition: (state) => state.pilihPosisi.listPosition,
      company: (state) => state.pilihPerusahaan.company,
      positionId: (state) => state.pilihPerusahaan.positionId
    })
  },
  mounted() {
    this.getPosition()
  },
  methods: {
    ...mapActions({
      getCompanyById: 'pilihPerusahaan/getCompanyById'
    }),
    ...mapMutations({ setState: 'pilihPerusahaan/setState' }),
    async getPosition() {
      const getAllPositions = await this.$store.dispatch(
        'pilihPosisi/getAllPosition'
      )
      await this.$store.dispatch('pilihPosisi/setAllPosition', getAllPositions)
    },
    seeTask(item) {
      this.setState({ position: item })
      console.log('itemposition', item)
      this.$router.push('/daftar-tugas')
    }
  }
}
</script>
