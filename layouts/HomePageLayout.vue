<template>
  <v-app>
    <HeaderHome v-if="isLogin === 'false'" />
    <Header v-else />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import HeaderHome from '~/components/HeaderHome'
import Header from '~/components/HeaderHomeLogin'
import Footer from '~/components/Footer'
export default {
  components: {
    HeaderHome,
    Header,
    Footer
  },
  data() {
    return {
      isLogin: false
    }
  },
  mounted() {
    this.isLogin = localStorage.getItem('is_login')
    console.log(this.isLogin)
  }
}
</script>
