<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12 w-full">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">
          <nuxt-link
            v-if="title"
            :to="`/products?categoryes=${title.id}`"
            class="text-2.5"
          >
            {{ title.name }}
          </nuxt-link>
        </h1>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="content flex-col items-start">
        <div class="flex justify-start w-full text-1.75">
          <span>
            Продукт в категории
            <strong>“{{ title.name }}”</strong>
          </span>
        </div>
        <div class="flex flex-row items-start w-full mt-16">
          <div class="flex flex-col pr-2 w-2/3"></div>
          <div class="flex flex-col pl-2 w-1/3">
            <div class="bg-white w-full flex flex-col rounded-15 px-15 py-12">
              <v-steps v-model="product.current" :max="product.remainder" />
              <div class="flex flex-row justify-between w-full mt-4">
                <span>Цена:</span>
                <strong>
                  {{
                    product.current
                      ? product.current * product.price
                      : product.price
                  }}
                  KZT
                </strong>
              </div>
              <input
                type="submit"
                class="bg-primary text-white w-full rounded-xl mt-4 mx-2 py-2 text-xs cursor-pointer"
                value="В корзину"
              />
            </div>
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
      title: "",
      product: [],
    }
  },
  created() {
    this.getProduct()
    // this.getTitle()
    // if (this.$route.query.categoryes) {
    //   this.getSubCategoryes()
    // }
  },
  methods: {
    getTitle() {
      this.$axios.get("/category").then((res) => {
        this.$axios.get("/subcategory").then((res1) => {
          for (let i = 0; i < res1.data.category.length; i++) {
            let x = res1.data.category[i]
            if (x.id == this.product.subcategory_id) {
              this.title = res.data.category.find((y) => y.id == x.category_id)
              break
            }
          }
          // this.title = res.data.category.find(
          //   (x) => x.id == this.$route.query.categoryes
          // ).name
        })
      })
    },
    getProduct() {
      this.$axios.get("products/" + this.$route.params.id).then((res) => {
        this.product = { ...res.data.data, current: 1 }
        this.getTitle()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.index {
  & > div {
    margin-bottom: 6.25rem;
    &.search {
      margin-bottom: 2.1875rem;
    }
  }
}
</style>
