<template>
  <div id="certificatePage" class="page">
    <v-container>
      <v-row class="title-page">
        <h1>Sertifikatku</h1>
      </v-row>
      <v-row>
        <v-col v-for="(item, index) in allCert" :key="index" md="3" lg="3">
          <v-card class="cert-wrap">
            <div class="cert-img">
              <img :src="item.image" alt="" />
            </div>
            <div class="cert-desc">
              <h5>{{ item.position.name }}</h5>
              <p>{{ item.company.name }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.title-page h1 {
  margin-left: 12px;
  padding: 0px 12px;
  font-weight: 900;
  background-color: #23573f;
  color: #fff;
}
.cert-wrap .cert-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cert-wrap .cert-img img {
  width: 270px;
}
.cert-wrap .cert-desc {
  padding: 10px;
  border: 2px solid #23573f;
}
.cert-desc {
  height: 100px;
}
.cert-desc h5 {
  font-weight: 800;
  color: #23573f;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  layout: 'OtherPageLayout',
  head() {
    return {
      title: 'Sertifikatku'
    }
  },
  computed: {
    ...mapState({
      allCert: (state) => state.sertifikat.allCert
    })
  },
  mounted() {
    this.getCertificate()
  },
  methods: {
    ...mapMutations({ setState: 'dashboard/setState' }),
    async getCertificate() {
      const getCertificate = await this.$store.dispatch(
        'sertifikat/getCertificate'
      )
      await this.$store.dispatch('sertifikat/setCertificate', getCertificate)
    }
  }
}
</script>
