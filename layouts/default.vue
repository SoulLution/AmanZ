<template>
  <div class="page">
    <Header class="z-20" />
    <Burger class="z-30" />
    <nuxt-link
      v-if="this.$route.name !== 'cart'"
      to="/cart"
      class="fixed f bg-white rounded-full hidden sm:flex justify-center items-center z-10 cursor-pointer"
    >
      <div
        v-if="basket.length"
        class="absolute rounded-full bg-$blue_d text-white flex justify-center items-center text-lg"
      >
        {{ basket.length }}
      </div>
      <img src="/shopping-bag.svg" />
    </nuxt-link>
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
  computed: {
    basket() {
      return this.$store.state.basket.data
    },
  },
  async created() {
    // this.$axios = this.$axios.create({
    //   baseURL: 'https://back.amanz.kz',
    //   withCredentials: true
    // })
  },
}
</script>
<style lang="scss" scoped>
.fixed.f {
  bottom: 2rem;
  right: 2rem;
  max-height: 100px;
  max-width: 100px;
  min-height: 100px;
  min-width: 100px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  & > .absolute {
    top: 0;
    right: 0;
    transform: translate(-10%, 10%);
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    font-weight: 500;
    line-height: 20px;
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/main.scss";
.page {
  min-height: 100vh;
  justify-content: space-between;
}
</style>
