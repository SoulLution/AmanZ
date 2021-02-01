<template>
  <div class="content my-10 flex flex-col items-start justify-start">
    <div class="hidden sm:flex text-14">
      <nuxt-link to="/" class="mr-3" style="color: #a9a9a9">Главная</nuxt-link>
      <span class="mr-3" style="color: #a9a9a9">></span>
      <div class="text-gray_d">Корзина</div>
    </div>
    <h1
      class="text-$blue_d sm:text-gray_d text-1.75 font-bold mt-2 sm:mt-7 mb-4"
    >
      Корзина
    </h1>
    <v-radio v-model="all" :checked="checkAll" title="Выбрать все" />
    <div
      class="flex flex-col-reverse sm:flex-row w-full justify-start items-start mt-4"
    >
      <div class="w-full sm:hidden flex flex-col px-4">
        <button
          class="bg-primary text-white w-full cursor-pointer py-4 mb-5 rounded-12 hover:bg-$blue_d"
          @click="removeActive()"
        >
          Оформить заказ
        </button>
        <button
          class="w-auto text-$error border-b border-$error hover:text-$blue_d"
          @click="removeActive()"
        >
          Удалить выделенное
        </button>
      </div>
      <div class="flex w-full sm:w-2/3 flex-wrap justify-start">
        <div
          v-for="product in products"
          :key="product.id"
          class="w-full sm:w-1/2 sm:pr-10 mb-7"
        >
          <div class="flex flex-row sm:flex-col bg-white rounded-40 px-3 pb-6">
            <div
              class="flex flex-col sm:flex-row items-start w-full sm:border-b border-black border-opacity-25 py-2 sm:py-5 px-3 sm:px-6"
            >
              <v-radio
                v-model="product.active"
                class="mb-2"
                :checked="product.active"
              />
              <nuxt-link
                :to="`/products/${product.id}`"
                class="rounded-10 relative overflow-hidden h-full w-full"
              >
                <img
                  v-if="product.image_path"
                  class="h-full"
                  :src="product.image_path"
                />
                <img v-else class="h-full" src="/no_image.png" />
              </nuxt-link>
            </div>
            <div class="flex flex-col">
              <div
                class="flex flex-col text-gray_d items-start w-full border-b border-black border-opacity-25 py-2 sm:py-5 px-3 sm:px-6"
              >
                <div class="text-lg mb-1">{{ product.full_name }}</div>
                <div class="flex justify-end text-14 font-medium w-full">
                  Артикул
                  <span class="text-$blue_d ml-1">{{
                    product.vendor_code
                  }}</span>
                </div>
              </div>
              <div
                class="flex flex-col text-gray_d items-center w-full border-b border-black border-opacity-25 py-2 sm:py-5 px-3 sm:px-6"
              >
                <v-steps v-model="product.current" :max="product.remainder" />
                <div class="flex flex-row justify-between w-full mt-4">
                  <span>Цена:</span>
                  <strong> {{ getPrice(product) }} KZT </strong>
                </div>
              </div>
              <div
                class="flex flex-col text-gray_d hover:text-$error items-center w-full py-2 sm:py-5 px-3 sm:px-6 cursor-pointer"
                @click="$store.commit('basket/removeProduct', product.id)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10L13.7 17M10.3 17L10 10M6 6L6.87554 19.133C6.94558 20.1836 7.81818 21 8.87111 21H15.1289C16.1818 21 17.0544 20.1836 17.1245 19.133L18 6M6 6H9M6 6H4M18 6H20M18 6H15M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M15 6H9"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full sm:w-1/3 mb-2">
        <div
          class="flex flex-col bg-white rounded-40 py-11 w-full px-9 text-gray_d"
        >
          <div class="w-full flex justify-between mb-12">
            <span>Количество товаров:</span>
            <span class="font-bold">{{ getAll.items }} шт.</span>
          </div>
          <div class="w-full flex justify-between sm:mb-12">
            <span>Итого: </span>
            <span class="font-bold">{{ getAll.price }} KZT</span>
          </div>
          <div class="w-full hidden sm:flex flex-col px-4">
            <button
              class="bg-primary text-white w-full cursor-pointer py-4 mb-5 rounded-12 hover:bg-$blue_d"
              @click="removeActive()"
            >
              Оформить заказ
            </button>
            <button
              class="w-full text-$error hover:text-$blue_d"
              @click="removeActive()"
            >
              Удалить выделенное
            </button>
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
      all: false,
      products: localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket")) || []
        : [],
    }
  },
  computed: {
    getAll() {
      let result = { items: 0, price: 0 }
      this.products.forEach((x) => {
        if (x.active) {
          result.price += this.getPrice(x)
          result.items += x.current
        }
      })
      return result
    },
    checkAll() {
      let result = true
      if (!this.products) result = false
      else
        for (let i = 0; i < this.products.length; i++)
          if (!this.products[i].active) {
            result = false
            break
          }
      return result
    },
    basket() {
      return this.$store.state.basket.data
    },
  },
  watch: {
    basket(newData) {
      this.products = JSON.parse(JSON.stringify(newData)).map((x) => {
        return { ...x, active: false }
      })
    },
    all(newData) {
      this.products.forEach((x) => {
        x.active = newData
      })
    },
  },
  methods: {
    removeActive() {
      this.products.forEach((x) => {
        if (x.active) this.$store.commit("basket/removeProduct", x.id)
      })
    },
    getPrice(product) {
      return product.current
        ? product.current *
            (product.price - product.price * (product.discount / 100))
        : product.price - product.price * (product.discount / 100)
    },
  },
}
</script>

<style lang="scss" scoped></style>
