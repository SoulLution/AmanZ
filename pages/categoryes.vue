<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">Категории</h1>
      </div>
    </div>
    <div class="felx w-screen">
      <div class="fle content flex-wrap justify-between">
        <router-link
          v-for="cat in categoryes"
          :key="cat.id"
          class="w-1/4 mr-1 mb-8 py-5 flex flex-col bg-white rounded-30 items-center justify-start cursor-pointer"
          :to="'/products?categoryes=' + cat.id"
        >
          <img :src="cat.image_path" />
          <span class="mt-8 font-bold text-lg text-$blue_d">{{
            cat.name
          }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      akzii_current: 1,
      slider_current: 1,
      products_current: 1,
      search: "",
      categoryes: [],
    }
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$axios.get("category").then((res) => {
        this.categoryes = res.data.category
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.index {
  & > div {
    margin-bottom: 6.25rem;
    width: 100%;
    &.search {
      margin-bottom: 2.1875rem;
    }
  }
}
.search-body {
  max-height: 200px;
  overflow: auto;
  bottom: 2.5rem;
  transform: translateY(100%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
}
</style>
