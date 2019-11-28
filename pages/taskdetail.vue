<template>
  <div id="dashboardPage" class="page fontchanger">
    <v-container-fluid class="grey lighten-5">
      <v-row no-gutters>
        <v-col lg="2">
          <v-list class="leftSide" dense>
            <v-list-item-group
              v-for="(item, i) in listTask"
              :key="i"
              class="mt-10"
              color="#23573E"
            >
              <v-list-item @click="toDetailTask(item.id)">
                <v-list-item-icon>
                  <v-icon>mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col lg="10">
          <v-container class="grey lighten-5 mt-2">
            <v-row class="fontweightchanger" no-gutters>
              <h1>{{ task.name }}</h1>
            </v-row>
            <v-row no-gutters class="mt-2">
              <h3>
                {{ this.reqData.positionName }} @
                {{ this.reqData.compName }}
              </h3>
            </v-row>
            <v-row no-gutters class="pageChooser mt-2">
              <v-col class="ml-3"
                ><strong
                  ><v-icon>mdi-page-first</v-icon>sebelumnya</strong
                ></v-col
              >
              <v-col></v-col>
              <v-col class="align-right mr-5"
                ><strong>selanjutnya</strong
                ><v-icon>mdi-page-last</v-icon></v-col
              >
            </v-row>
            <v-row no-gutters class="mt-2">
              <p>{{ task.description }}</p>
            </v-row>
            <v-row>
              <v-col lg="6" md="6" sm="12"
                ><v-file-input
                  multiple
                  label="Submit Tugas"
                  width="500px"
                ></v-file-input
              ></v-col>
              <v-col lg="6" md="6" sm="12"> </v-col>
            </v-row>
            <v-row no-gutters class="mt-2">
              <iframe
                width="80%"
                height="500px"
                src="https://www.youtube.com/embed/K2MBKvetdEw"
              >
              </iframe>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </div>
</template>

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
</style>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'OtherPageLayout',
  data: () => ({
    item: 0,
    items: [
      { text: 'Real-Time', icon: 'mdi-book-open-page-variant' },
      { text: 'Audience', icon: 'mdi-book-open-page-variant' },
      { text: 'Conversions', icon: 'mdi-book-open-page-variant' },
      { text: 'Audience', icon: 'mdi-book-open-page-variant' }
    ],
    reqData: {}
  }),
  computed: {
    ...mapState({
      position: (state) => state.pilihPosisi.position,
      listTask: (state) => state.daftarTugas.listTask,
      task: (state) => state.daftarTugas.task
    })
  },
  mounted() {
    this.getTask()
    this.getTaskById()
    this.getData()
  },
  methods: {
    ...mapMutations({ setState: 'pilihPerusahaan/setState' }),
    async getTask() {
      const getAllTasks = await this.$store.dispatch('daftarTugas/getAllTask')
      await this.$store.dispatch('daftarTugas/setAllTask', getAllTasks)
    },
    async getTaskById() {
      const getTask = await this.$store.dispatch('daftarTugas/getTaskById')
      await this.$store.dispatch('daftarTugas/setTaskById', getTask)
    },
    getData() {
      this.reqData.positionName = localStorage.getItem('positionName')
      this.reqData.compName = localStorage.getItem('compName')
      this.reqData.taskName = localStorage.getItem('taskName')
      this.reqData.taskDesc = localStorage.getItem('taskDesc')
    },
    toDetailTask(id) {
      console.log('ini id, ke klik', id)
      localStorage.setItem('taskId', id)
      this.getTaskById()
      this.$router.push('/taskdetail')
    }
  }
}
</script>
