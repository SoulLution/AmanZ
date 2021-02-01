<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12 hidden sm:flex">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">Категории</h1>
      </div>
    </div>
    <div
      class="sm:hidden flex justify-start p-4 text-14"
      style="margin-bottom: 0"
    >
      <nuxt-link to="/" class="mr-3" style="color: #a9a9a9">Главная</nuxt-link>
      <span class="mr-3" style="color: #a9a9a9">></span>
      <div class="text-gray_d">Категории</div>
    </div>
    <div class="felx w-screen">
      <div class="fle content flex-wrap justify-between">
        <router-link
          v-for="cat in categoryes"
          :key="cat.id"
          class="w-1/3 sm:w-1/4 mr-1 mb-8 py-5 flex flex-col sm:bg-white rounded-30 items-center justify-start cursor-pointer"
          :to="'/products?categoryes=' + cat.id"
        >
          <div class="cyrcle-slides"><img :src="cat.image_path" /></div>
          <span class="mt-4 sm:mt-8 font-bold text-lg text-$blue_d">{{
            cat.name
          }}</span>
        </router-link>
      </div>
    </div>

    <div class="py-8 sm:hidden flex w-full">
      <div class="content flex flex-col items-start">
        <h3 class="text-$blue_d font-bold mb-5">Популярные товары</h3>
        <div class="flex flex-row flex-wrap justify-start w-full">
          <div
            v-for="(slide, i) in products"
            :key="i"
            class="w-1/2 cursor-default px-2"
          >
            <nuxt-link
              class="flex flex-col items-center justify-start w-full bg-white rounded-15 p-2 mb-2"
              :to="`/products/${slide.id}`"
            >
              <div class="relative overflow-hidden rounded-10">
                <div
                  v-if="slide.discount"
                  class="sale absolute text-white bg-$error"
                >
                  скидка <br />{{ slide.discount }}%
                </div>
                <img
                  v-if="slide.image_path"
                  class="rounded-10"
                  :src="slide.image_path"
                />
                <img v-else class="rounded-10" src="no_image.png" />
              </div>
              <span
                class="w-full font-medium text-gray_d"
                style="margin-top: 1rem"
              >
                {{ slide.full_name }}
              </span>
              <div
                class="my-4 border-t border-grey_4 w-full pt-4 flex flex-row"
              >
                <span
                  class="whitespace-no-wrap text-14 text-gray_d ml-3 flex flex-row w-full justify-start"
                >
                  <span
                    v-if="slide.discount"
                    class="opacity-50 mr-2"
                    style="text-decoration: line-through"
                  >
                    {{ slide.price }} KZT
                  </span>
                  <span>
                    {{ slide.price - slide.price * (slide.discount / 100) }}
                    KZT
                  </span>
                </span>
              </div>
            </nuxt-link>
          </div>
        </div>
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
      products: [],
    }
  },
  created() {
    this.getCategories()
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.products = []
      this.$axios
        .post("products/category_id=1", {
          pagination: {
            limit: 4,
            page: 1,
          },
        })
        .then((res) => {
          let products = res.data.product.map((x) => {
            return { ...x, current: 1 }
          })
          this.products = products

          while (this.products.length < 4)
            products.forEach((x) => {
              if (this.products.length < 4) this.products.push(x)
            })
        })
    },
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
@media (max-width: 639px) {
  .cyrcle-slides {
    max-height: 50px;
    max-width: 50px;
    min-height: 50px;
    min-width: 50px;
    padding: 0.5rem;
    border-radius: 50%;
    background: white;
    margin-bottom: 0.25rem;
    & > img {
      height: 42px;
    }
  }
}
.sale {
  padding: 1rem 2rem 0.5rem 2rem;
  text-align: center;
  left: -2.25rem;
  top: -0.75rem;
  transform: rotate(-45deg);
}
</style>
