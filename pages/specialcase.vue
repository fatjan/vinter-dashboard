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
            <h2>Pendidikan Peserta Magang</h2>
            <GChart
              :data="chartData"
              :options="chartOptions"
              style="width: 900px; height: 500px;"
              is3d="true"
              type="PieChart"
              width="50%"
              height="50%"
            />
            <h2>Asal Peserta Magang</h2>
            <GChart
              :data="chartData2"
              :options="chartOptions"
              style="width: 900px; height: 500px;"
              is3d="true"
              type="PieChart"
              width="50%"
              height="50%"
            />
            <h2>Peserta Magang dari tahun ke tahun</h2>
            <GChart
              :data="chartData3"
              :options="chartOptions"
              style="width: 900px; height: 500px;"
              is3d="true"
              type="ColumnChart"
              width="50%"
              height="50%"
            />
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  layout: 'CompanyLayout',
  data: () => ({
    listPositions: [],
    item: 0,
    items: [
      {
        text: 'Meta Data',
        icon: 'mdi-data',
        linkto: ''
      }
    ],
    chartData: [
      ['Pendidikan', 'jumlah user'],
      ['smk', 5],
      ['strata1', 4],
      ['sma', 6],
      ['sd', 7]
    ],
    chartData2: [
      ['Asal Kota', 'jumlah user'],
      ['bojonegoro', 8],
      ['tuban', 3],
      ['surabaya', 1],
      ['jakarta', 6]
    ],
    chartData3: [
      ['Year', 'jumlah peserta'],
      ['november 2019', 15],
      ['desember 2019', 11],
      ['januari 2020', 13],
      ['februari 2020', 8]
    ],
    chartOptions: {
      chart: {
        title: 'Jumlah Peserta Magang',
        subtitle: 'Jumlah Peserta Magang',
        pieSliceText: 'label'
      }
    }
  }),
  created() {
    const req = {
      url: '/intern/specialmetadata',
      method: 'get',
      params: {
        company_id: localStorage.getItem('company_id'),
        pendidikan: 's1'
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }
    this.doAxios(req)
  },
  methods: {
    doAxios(request) {
      const self = this
      const req = request
      this.$axios(req)
        .then(function(response) {
          console.log(response.data.result)
          self.chartData[0].append()
        })
        .catch(function(error) {
          console.log(error)
        })
    }
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
