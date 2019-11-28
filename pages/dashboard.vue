<template>
  <div id="dashboardPage" class="page">
    <v-container v-if="isLoading" class="align-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="#23573E"
        indeterminate
        style="margin-top:150px;"
      ></v-progress-circular>
    </v-container>
    <v-container v-else>
      <!-- <v-container> -->
      <v-row class="title-page">
        <h1>Dashboard</h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <div class="user-information green-bg">
            <v-row>
              <v-col md="4" lg="4" class="align-right user-photo">
                <img src="~/assets/img/intern-01.png" alt="" />
              </v-col>
              <v-col md="8" lg="8">
                <h4>Hi, {{ name }}</h4>
                <p>{{ email }}</p>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col lg7>
          <v-row>
            <v-col lg4>
              <div class="user-check align-center">
                <h5>Sedang Berlangsung</h5>
                <h2>{{ ongoing.length }}</h2>
              </div>
            </v-col>
            <v-col lg4>
              <div class="user-check align-center">
                <h5>
                  Magang Selesai
                </h5>
                <h2>{{ completed.length }}</h2>
              </div>
            </v-col>
            <v-col lg4>
              <div class="user-check align-center">
                <h5>Certificate</h5>
                <h2>1</h2>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg6>
          <h4>Magang Berlangsung</h4>
        </v-col>
        <v-col lg6 class="align-right">
          <v-btn @click="toPilihPerusahaan()" class="btn-primary"
            >Temukan Lainnya</v-btn
          >
        </v-col>
      </v-row>
      <v-row v-if="ongoing.length === 0">
        <v-col lg="12" md="12" class="align-center empty-state">
          <img src="~/assets/img/empty.png" alt="" style="height: 250px;" />
          <p>
            Belum ada magang berlangsung.<br />Silahkan pilih "Temukan Lainnya"
          </p>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
          v-for="(item, index) in ongoing"
          :key="index"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="intern-card green-bg">
            <v-row>
              <div class="intern-img">
                <img
                  v-if="item.position_image !== null"
                  :src="item.position_image"
                  alt=""
                />
                <img v-else src="~/assets/img/intern-01.png" alt="" />
              </div>
              <div class="intern-deskrip">
                <h5>
                  {{ item.position_name }}
                </h5>
                <p>{{ item.company_name }}</p>
                <div class="wrap-progress" style="width:100%">
                  <div
                    :style="{ width: item.percentage }"
                    class="progress-intern"
                  ></div>
                </div>
                <v-btn
                  v-if="item.total_task !== 0"
                  @click="toListTask(item)"
                  class="btn-primary"
                  >Lanjutkan Magangmu</v-btn
                >
                <p v-else style="color:#adadad; margin-top:10px;">
                  Task Belum Tersedia
                </p>
              </div>
              <div class="percentage-intern">
                <p>{{ item.percentage }}</p>
              </div>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row class="done-intern">
        <v-col lg10>
          <h4>Magang Selesai</h4>
        </v-col>
      </v-row>
      <v-row v-if="completed.length === 0">
        <v-col lg="12" md="12" class="align-center empty-state">
          <img src="~/assets/img/empty.png" alt="" style="height: 250px;" />
          <p>Belum ada magang yang selesai.</p>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
          v-for="(item, index) in completed"
          :key="index"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="intern-card green-bg">
            <v-row>
              <div class="intern-img">
                <img
                  v-if="item.position_image !== null"
                  :src="item.position_image"
                  alt=""
                />
                <img v-else src="~/assets/img/intern-01.png" alt="" />
              </div>
              <div class="intern-deskrip">
                <h5>{{ item.position_name }}</h5>
                <p>{{ item.company_name }}</p>
                <div class="wrap-progress" style="width:100%">
                  <div class="progress-intern" style="width:100%"></div>
                </div>
                <!-- <v-btn class="btn-primary">Lihat Sertifikat</v-btn> -->
              </div>
              <div class="percentage-intern">
                100%
              </div>
            </v-row>
          </div>
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
.green-bg {
  background-color: #c1f5e4;
}
.user-check {
  background-color: #c1f5e4;
  height: 104px;
  margin-top: -12px;
  padding: 12px;
}
.user-photo img {
  width: 80px;
  max-height: 80px;
  border-radius: 40px;
}
.intern-card {
  padding: 24px;
}
.intern-img {
  height: 120px;
  margin-left: 12px;
  margin-right: 24px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.intern-img img {
  max-height: 120px;
  width: 120px;
}
.intern-deskrip {
  font-family: 'Muli', sans-serif;
  width: 320px;
}
.intern-deskrip h5 {
  margin-bottom: 0px;
}
.wrap-progress {
  padding: 2px;
  background-color: aliceblue;
  height: 16px;
  border-radius: 8px;
  margin-top: -5px;
  margin-bottom: 8px;
}
.progress-intern {
  height: 12px;
  border-radius: 6px;
  background-color: #23573f;
}
.percentage-intern {
  padding-left: 10px;
  margin-top: 56px;
}
.btn-primary {
  color: white;
  background-color: #ff7a76 !important;
  font-family: 'Muli', sans-serif;
  border-color: #ff7a76;
  border-radius: 18px;
  box-shadow: none;
  padding: 6px 20px;
}
.btn-disable {
  background-color: #818181;
  color: #fafafa;
  box-shadow: none;
  border-radius: 24px;
}
.done-intern {
  margin-top: 10px;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'OtherPageLayout',
  head() {
    return {
      title: 'Dashboard'
    }
  },
  data() {
    return {
      isLoading: true,
      name: '',
      email: '',
      listPersen: []
    }
  },
  computed: {
    ...mapState({
      ongoing: (state) => state.dashboard.ongoing,
      completed: (state) => state.dashboard.completed
    })
  },
  created() {
    const isLogin = localStorage.getItem('is_login')
    if (!isLogin) {
      this.$router.push('/')
    }
  },
  mounted() {
    const userName = localStorage.getItem('name')
    this.name = userName.split(' ')[0]
    this.email = localStorage.getItem('email')
    this.getOngoingPosition()
    this.getCertificate()
  },
  methods: {
    ...mapMutations({ setState: 'dashboard/setState' }),
    async getOngoingPosition() {
      const getAllOngoing = await this.$store.dispatch(
        'dashboard/getAllOngoing'
      )
      await this.$store.dispatch('dashboard/setAllOngoing', getAllOngoing)
      this.isLoading = false
    },
    // async getCertificate() {
    //   const getCertificate = await this.$store.dispatch(
    //     'dashboard/getCertificate'
    //   )
    //   this.isLoading = false
    //   // await this.$store.dispatch('dashboard/setCertificate', getCertificate)
    // },
    toPilihPerusahaan() {
      this.$router.push('/pilih-perusahaan')
    },
    toListTask(item) {
      localStorage.setItem('companyId', item.company_id)
      localStorage.setItem('positionId', item.position_id)
      this.$router.push('/daftar-tugas')
    }
  }
}
</script>
