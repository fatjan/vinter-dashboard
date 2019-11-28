<template>
  <v-app>
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import Header from '~/components/HeaderComp'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
