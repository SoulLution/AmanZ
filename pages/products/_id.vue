<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search hidden sm:flex bg-$blue_d pt-10 pb-12 w-full">
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
    <div
      class="sm:hidden flex justify-start w-full p-4 text-14"
      style="margin-bottom: 0"
    >
      <span class="mr-3" style="color: #a9a9a9; transform: rotate(180deg)">
        >
      </span>
      <div style="color: #a9a9a9" @click="$router.go(-1)">Назад</div>
    </div>
    <div class="flex flex-col w-full">
      <div class="content flex-col items-start">
        <div class="hidden sm:flex justify-start w-full text-1.75">
          <span>
            Продукт в категории
            <strong>“{{ title.name }}”</strong>
          </span>
        </div>
        <div class="flex flex-row items-start w-full mt-7 sm:mt-16">
          <div class="flex flex-col pr-2 w-full sm:w-2/3">
            <div
              class="flex flex-col sm:flex-row w-full justify-start sm:p-5 sm:bg-white rounded-15"
            >
              <div
                class="rounded-10 bg-white sm:bg-transparent relative overflow-hidden h-full w-full sm:w-2/6 h-212 mb-2 sm:mb-0 border-black sm:border-l border-opacity-25"
              >
                <div
                  v-if="product.discount"
                  class="sale absolute text-white bg-$error"
                >
                  скидка <br />{{ product.discount }}%
                </div>
                <img
                  v-if="product.image_path"
                  class="h-full"
                  :src="product.image_path"
                />
                <img v-else class="h-full" src="/no_image.png" />
              </div>
              <div
                class="flex flex-col bg-white py-4 sm:py-0 sm:bg-transparent items-start justify-start w-full sm:w-4/6 pl-4 pr-4 sm:pr-0 mb-2 sm:mb-0 rounded-15"
              >
                <h2 class="text-lg w-full">
                  {{ product.full_name }}
                </h2>
                <div class="mt-3 block">
                  <span class="color-red text-gray-800">Артикул</span>
                  <a href="#">{{ product.vendor_code }}</a>
                </div>
                <div class="mt-3 block">
                  <span class="color-red text-gray-800"> Срок годности: </span>
                  3 года
                </div>
                <div class="mt-3 block">
                  <span class="color-red text-gray-800"> Производитель: </span>
                  Байер Фарма АГ, Германия
                </div>
                <div class="mt-3 block">
                  <span class="color-red text-gray-800">
                    Действующие вещества:
                  </span>
                  Ацетилсалициловая кислота,Аскорбиновая кислота
                </div>
              </div>

              <div class="sm:hidden flex flex-col mb-2 w-full">
                <div class="bg-white w-full flex flex-row rounded-15 px-3 py-4">
                  <div
                    class="flex flex-row items-center justify-between w-auto mr-2 text-12"
                  >
                    <strong> {{ getPrice }} KZT </strong>
                  </div>
                  <v-steps
                    v-model="product.current"
                    class="mr-2"
                    :max="product.remainder"
                  />
                  <input
                    type="submit"
                    class="bg-primary text-white w-full rounded-xl mx-2 py-2 text-xs cursor-pointer"
                    value="В корзину"
                    @click="$store.commit('basket/addProduct', product)"
                  />
                </div>
              </div>
            </div>
            <div
              v-if="product.description"
              class="felx flex-col items-start bg-white mt-3 text-gray_d rounded-15 py-5 pl-5 pr-7"
            >
              <span class="font-bold text-lg mb-3">Описание</span>
              <span class="text-14">{{ product.description }}</span>
            </div>
          </div>
          <div class="hidden sm:flex flex-col pl-2 w-1/3">
            <div class="bg-white w-full flex flex-col rounded-15 px-15 py-12">
              <v-steps v-model="product.current" :max="product.remainder" />
              <div class="flex flex-row justify-between w-full mt-4">
                <span>Цена:</span>
                <strong> {{ getPrice }} KZT </strong>
              </div>
              <input
                type="submit"
                class="bg-primary text-white w-full rounded-xl mt-4 mx-2 py-2 text-xs cursor-pointer"
                value="В корзину"
                @click="$store.commit('basket/addProduct', product)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="hidden sm:flex flex-col content items-start mt-20 w-full">
        <span class="text-$blue_d mb-15 text-lg font-medium">
          Возможно, Вас заинтересует
        </span>
        <div class="flex flex-row justify-start w-full">
          <div v-for="slide in products" :key="slide.id" class="pr-15 w-1/4">
            <div class="flex flex-col bg-white rounded-40 px-3 py-5">
              <div
                class="rounded-10 relative overflow-hidden h-full w-full border-black border-l border-opacity-25"
              >
                <div
                  v-if="slide.discount"
                  class="sale absolute text-white bg-$error"
                >
                  скидка <br />{{ slide.discount }}%
                </div>
                <img
                  v-if="slide.image_path"
                  class="h-full"
                  :src="slide.image_path"
                />
                <img v-else class="h-full" src="/no_image.png" />
              </div>
              <span class="my-4 text-gray_d text-center">
                {{ slide.full_name }}
              </span>
              <nuxt-link
                class="w-full bg-primary text-white hover:bg-$blue_d rounded-12 mx-4 py-2 text-center"
                :to="`/products/${slide.id}`"
              >
                Подробнее
              </nuxt-link>
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
      product: {},
      products: [],
    }
  },
  computed: {
    getPrice() {
      return this.product.current
        ? this.product.current *
            (this.product.price -
              this.product.price * (this.product.discount / 100))
        : this.product.price -
            this.product.price * (this.product.discount / 100)
    },
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

              this.$axios
                .post("products/category_id=" + this.title.id, {
                  pagination: {
                    limit: 10,
                    page: 1,
                  },
                  filter: [{ type: "category_id", value: x.id + "" }],
                })
                .then((res2) => {
                  this.products = res2.data.product
                })
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
.h-212 {
  height: 212px;
}
.sale {
  padding: 1rem 2rem 0.5rem 2rem;
  text-align: center;
  left: -2.25rem;
  top: -0.75rem;
  transform: rotate(-45deg);
}
</style>
