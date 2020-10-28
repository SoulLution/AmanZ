<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12 w-full">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">
          <span class="text-2.5">Лекарственные средства</span>
        </h1>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="content flex-col items-start">
        <div
          v-if="$route.query.search"
          class="flex justify-start w-full text-1.75"
        >
          <span>
            Найдено {{ pagination.count }} результатов по запросу
            <strong>“{{ $route.query.search }}”</strong>
          </span>
        </div>
        <div class="flex flex-row w-full mt-16">
          <div class="flex flex-col w-full">
            <div class="flex flex-row w-full mb-4 justify-between">
              <div class="flex flex-row">
                <div
                  class="flex cursor-pointer text-$blue_d hover:text-primary stroke-current"
                >
                  <span class="mr-1 font-medium"> По популярности </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99967 14.6663C11.6816 14.6663 14.6663 11.6816 14.6663 7.99967C14.6663 4.31778 11.6816 1.33301 7.99967 1.33301C4.31778 1.33301 1.33301 4.31778 1.33301 7.99967C1.33301 11.6816 4.31778 14.6663 7.99967 14.6663Z"
                      stroke="inherit"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33301 7.33301L7.99967 9.99967L10.6663 7.33301"
                      stroke="inherit"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  class="flex flex-row text-$blue_d hover:text-primary cursor-pointer ml-8"
                  :class="{
                    'stroke-current': type === 'default',
                    'stroke-current fill-current': type === 'plits',
                  }"
                  @click="changeType()"
                >
                  <svg
                    v-if="type === 'default'"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.5"
                      y="2.5"
                      width="8"
                      height="6"
                      rx="2"
                      stroke="inherit"
                      stroke-width="1.8"
                    />
                    <rect
                      x="13.5"
                      y="2.5"
                      width="8"
                      height="10"
                      rx="2"
                      stroke="inherit"
                      stroke-width="1.8"
                    />
                    <rect
                      x="2.5"
                      y="11.5"
                      width="8"
                      height="10"
                      rx="2"
                      stroke="inherit"
                      stroke-width="1.8"
                    />
                    <rect
                      x="13.5"
                      y="15.5"
                      width="8"
                      height="6"
                      rx="2"
                      stroke="inherit"
                      stroke-width="1.8"
                    />
                  </svg>
                  <svg
                    v-if="type === 'plits'"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7.4C22.4971 7.4 22.9 6.99706 22.9 6.5C22.9 6.00294 22.4971 5.6 22 5.6L22 7.4ZM9 5.6C8.50294 5.6 8.1 6.00294 8.1 6.5C8.1 6.99706 8.50294 7.4 9 7.4L9 5.6ZM22 5.6L9 5.6L9 7.4L22 7.4L22 5.6Z"
                      fill="inherit"
                    />
                    <path
                      d="M22 12.9C22.4971 12.9 22.9 12.4971 22.9 12C22.9 11.5029 22.4971 11.1 22 11.1L22 12.9ZM9 11.1C8.50294 11.1 8.1 11.5029 8.1 12C8.1 12.4971 8.50294 12.9 9 12.9L9 11.1ZM22 11.1L9 11.1L9 12.9L22 12.9L22 11.1Z"
                      fill="inherit"
                    />
                    <path
                      d="M22 18.4C22.4971 18.4 22.9 17.9971 22.9 17.5C22.9 17.0029 22.4971 16.6 22 16.6L22 18.4ZM9 16.6C8.50294 16.6 8.1 17.0029 8.1 17.5C8.1 17.9971 8.50294 18.4 9 18.4L9 16.6ZM22 16.6L9 16.6L9 18.4L22 18.4L22 16.6Z"
                      fill="inherit"
                    />
                    <circle
                      cx="4"
                      cy="6.5"
                      r="1"
                      stroke="inherit"
                      stroke-width="2"
                    />
                    <circle
                      cx="4"
                      cy="12"
                      r="1"
                      stroke="inherit"
                      stroke-width="2"
                    />
                    <circle
                      cx="4"
                      cy="17.5"
                      r="1"
                      stroke="inherit"
                      stroke-width="2"
                    />
                  </svg>

                  <span>{{ getTypeName }}</span>
                </div>
              </div>
              <v-pagination v-model="page" :max="pagination.total_pages" />
            </div>
            <div
              class="flex w-full"
              :class="{
                'flex-row flex-wrap justify-start': type === 'plits',
                ' flex-col': type === 'default',
              }"
            >
              <div
                v-for="product in products"
                :key="product.id"
                class="flex mb-12 justify-start p-5"
                :class="{
                  'w-1/3 flex-col': type === 'plits',
                  'w-full flex-row h-48': type === 'default',
                }"
              >
                <img
                  src="sign/login.svg"
                  :class="{
                    'w-full': type === 'plits',
                    'w-1/5': type === 'default',
                  }"
                />
                <div
                  class="flex flex-col items-start"
                  :class="{
                    'w-full': type === 'plits',
                    'w-3/5': type === 'default',
                  }"
                >
                  <h2 class="text-lg">{{ product.full_name }}</h2>
                  <div class="mt-3 block">
                    <span class="color-red text-gray-800">Артикул</span>
                    <a href="#">{{ product.vendor_code }}</a>
                  </div>
                  <div class="mt-3 block">
                    <span class="color-red text-gray-800">Срок годности:</span>
                    3 года
                  </div>
                  <div class="mt-3 block">
                    <span class="color-red text-gray-800">Производитель:</span>
                    Байер Фарма АГ, Германия
                  </div>
                  <div class="mt-3 block">
                    <span class="color-red text-gray-800">
                      Действующие вещества:
                    </span>
                    Ацетилсалициловая кислота,Аскорбиновая кислота
                  </div>
                </div>
                <div
                  class="flex flex-col justify-between h-full items-center py-5"
                  :class="{
                    'w-full': type === 'plits',
                    'w-1/5': type === 'default',
                  }"
                >
                  <div
                    class="flex w-full"
                    :class="{
                      'flex-row': type === 'plits',
                      'flex-col': type === 'default',
                    }"
                  >
                    <v-steps
                      v-model="product.current"
                      :max="product.remainder"
                    />
                    <div class="flex flex-row justify-between w-full mt-4">
                      <span>Цена:</span><strong>{{ product.price }} KZT</strong>
                    </div>
                  </div>
                  <input
                    type="submit"
                    class="bg-primary text-white w-full rounded-xl mt-4 mx-2 py-2 text-xs cursor-pointer"
                    value="Войти"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col"></div>
        </div>
        <div class="flex flex-row w-full justify-between">
          <span>
            Показать по
            <span class="text-primary cursor-pointer">{{ limit }}</span>
          </span>
          <v-pagination v-model="page" :max="pagination.total_pages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      limit: 10,
      page: 1,
      pagination: {},
      type: "default",
    }
  },
  computed: {
    getTypeName() {
      let result = ""
      switch (this.type) {
        case "default":
          result = "Показать плитками"
          break
        case "plits":
          result = "Показать списком"
          break
      }
      return result
    },
  },
  watch: {
    page() {
      this.getProducts()
    },
  },
  created() {
    this.getProducts()
  },
  methods: {
    changeType() {
      if (this.type === "default") this.type = "plits"
      else if (this.type === "plits") this.type = "default"
    },
    getProducts() {
      this.$axios
        .post("products", {
          pagination: {
            limit: this.limit,
            page: this.page,
          },
        })
        .then((res) => {
          this.products = res.data.product.map((x) => {
            return { ...x, current: 1 }
          })
          this.pagination = res.data.pagination
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
