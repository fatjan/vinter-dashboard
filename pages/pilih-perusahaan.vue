<template>
  <v-container>
    <v-row class="rata-kiri">
      <v-col>
        <div class="perusahaan-title align-center vertical-align-center">
          <h1>
            Perusahaan
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row class="rata-kiri">
      <v-col>
        <h5 class="rekom">
          Rekomendasi untukmu
        </h5>
      </v-col>
    </v-row>
    <v-row class="rata-kiri">
      <v-col
        v-for="item in listCompany"
        :key="item.id"
        cols="12"
        xs="12"
        sm="12"
        md="3"
        lg="3"
        xl="3"
      >
        <v-card @click="chooseCompany(item.id)" class="kotak-perusahaan">
          <div class="gambar align-center vmiddle">
            <img
              src="(~/assets/img/logo_navbar@2x.png)"
              alt=""
              class="inside-pic"
            />
          </div>
          <div class="text">
            <h5>
              {{ item.name }}
            </h5>
            <span>
              <p>
                <img v-bind:src="item.image" alt="" width="8px" />
                {{ item.oportunity }} Posisi Magang
              </p>
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'OtherPageLayout',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      listCompany: (state) => state.pilihPerusahaan.listCompany,
      companyId: (state) => state.pilihPerusahaan.companyId
    })
  },
  mounted() {
    this.getCompany()
  },
  methods: {
    ...mapMutations({ setState: 'pilihPerusahaan/setState' }),
    async getCompany() {
      const getAllCompanies = await this.$store.dispatch(
        'pilihPerusahaan/getAllCompany'
      )
      await this.$store.dispatch(
        'pilihPerusahaan/setAllCompany',
        getAllCompanies
      )
    },
    chooseCompany(id) {
      console.log('ni id', id)
      this.setState({ companyId: id })
      this.$router.push('/pilih-posisi')
    }
  }
}
</script>
<style>
/* .rata-kiri {
  margin-left: 30px;
  margin-right: 30px;
} */
.perusahaan-title {
  border: 1px solid #23573e;
  width: 230px;
  height: 50px;
  margin-top: 75px;

  color: white;
  background-color: #23573e;
}
.rekom {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
}
.kotak-perusahaan {
  border: 1px solid black;
  background-color: #d5f8ed !important;
  margin-bottom: 20px;
}
.gambar {
  background-color: white;
  /* border: 1px solid black; */
  /* padding: 0px; */
  /* margin: 0px; */
  width: 100%;
  height: 270px;
}
.inside-pic {
  margin-top: 60px;
}
.text {
  margin: 10px;
}
</style>
