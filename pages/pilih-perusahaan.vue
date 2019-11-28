<template>
  <v-container>
    <v-row class="rata-kiri">
      <v-col>
        <div class="perusahaan-title align-center vertical-align-center">
          <h1>Perusahaan</h1>
        </div>
      </v-col>
    </v-row>
    <v-row class="rata-kiri">
      <v-col>
        <h5 class="rekom">Rekomendasi untukmu</h5>
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
        <v-card @click="chooseCompany(item)" class="kotak-perusahaan">
          <div class="gambar align-center vmiddle">
            <img
              v-bind:src="item.image"
              alt
              class="inside-pic"
              style="max-height: 100% !important;
              max-width: 100% !important;
  -o-object-fit: contain !important;
  object-fit: contain !important"
            />
          </div>
          <div class="text">
            <h5>{{ item.name }}</h5>
            <span>
              <p>
                <img src="~/assets/img/portfolio.png" alt width="15px" />
                {{ item.oportunity }} Posisi Magang
              </p>
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  padding: 10px;
}
.text {
  margin: 10px;
}
</style>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
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
    ...mapActions({
      getCompanyById: 'pilihPerusahaan/getCompanyById'
    }),
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
    chooseCompany(companyItem) {
      localStorage.setItem('companyId', companyItem.id)
      this.setState({ companyId: companyItem.id })
      this.setState({ company: companyItem })
      this.$router.push('/pilih-posisi')
    }
  }
}
</script>
