<template>
  <div class="page">
    <Header class="z-10" />
    <nuxt class="z-0 py-8 min-h-screen" />
    <Basket />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Basket from "@/components/Basket.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: { Header, Basket, Footer },
  data() {
    return {}
  },
  async created() {
    // this.$axios = this.$axios.create({
    //   baseURL: 'https://back.amanz.kz',
    //   withCredentials: true
    // })
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.page {
  min-height: 100vh;
  justify-content: space-between;
}
</style>
