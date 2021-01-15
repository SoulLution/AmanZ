<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12 w-full">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">
          <span class="text-2.5">{{ title }}</span>
        </h1>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="content flex-col items-start">
        <div
          v-if="$route.query.search && products.length"
          class="flex justify-start w-full text-1.75"
        >
          <span>
            Найдено {{ pagination.count }} результатов по запросу
            <strong>“{{ $route.query.search }}”</strong>
          </span>
        </div>
        <div class="flex flex-row items-start w-full mt-16">
          <div
            class="flex flex-col"
            :class="$route.query.search ? 'w-full' : 'w-2/3'"
          >
            <div
              v-if="products.length"
              class="flex flex-row w-full mb-4 justify-between"
            >
              <div class="flex flex-row w-full">
                <div
                  class="flex relative cursor-pointer bg-white py-4 justify-start px-5 text-$blue_d hover:text-primary stroke-current"
                  :class="
                    filter_show ? 'w-full rounded-t-15' : 'rounded-15 w-2/3'
                  "
                  @click="filter_show = !filter_show"
                >
                  <span class="mr-1 font-medium">Фильтр </span>
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
                  <div
                    class="all_filters absolute w-full left-0"
                    :class="{ active: filter_show }"
                    @click.stop=""
                  >
                    <div
                      class="flex-col p-5 bg-white rounded-b-15 w-full cursor-default"
                    >
                      <div class="flex flex-row w-full justify-between mb-12">
                        <div
                          v-for="filt in filters"
                          :key="filt.id"
                          class="filt border-2 rounded-15 p-3 flex flex-row text-$blue_d hover:text-primary whitespace-no-wrap"
                          :class="
                            filter.id === filt.id || def_filter.id === filt.id
                              ? 'border-primary'
                              : 'border-transparent'
                          "
                          @click="def_filter = filt"
                        >
                          <img class="mr-4" :src="filt.img" />
                          <span
                            :class="
                              filt.id >= 3
                                ? 'font-medium text-lg'
                                : 'font-normal text-14'
                            "
                          >
                            {{ filt.text }}
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-end w-full">
                        <button
                          class="text-$error mr-7"
                          @click="changeFilter(false)"
                        >
                          Сбросить
                        </button>
                        <button
                          class="rounded-12 py-2 px-12 text-white"
                          :class="def_filter.id ? 'bg-primary' : 'bg-A9'"
                          @click="changeFilter(true)"
                        >
                          Применить
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="!filter_show"
                  class="flex flex-row bg-white rounded-15 py-4 justify-start px-5 w-1/3 text-$blue_d hover:text-primary cursor-pointer ml-8"
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
              <!-- <v-pagination v-model="page" :max="pagination.total_pages" /> -->
            </div>
            <div
              v-if="products.length"
              class="flex w-full"
              :class="{
                'flex-row flex-wrap justify-start': type === 'plits',
                ' flex-col': type === 'default',
              }"
            >
              <div
                v-for="(product, i) in products"
                :key="product.id"
                class="mb-5"
                :class="{
                  'w-1/3': type === 'plits',
                  'pr-10': type === 'plits' && (i + 1) % 3 !== 0,
                  'w-full h-48': type === 'default',
                }"
              >
                <div
                  class="flex w-full justify-start p-5 bg-white rounded-15"
                  :class="{
                    'flex-col': type === 'plits',
                    'flex-row': type === 'default',
                  }"
                >
                  <img
                    v-if="product.image_path"
                    :class="{
                      'w-full': type === 'plits',
                      'w-1/5 pr-2 border-black border-l border-opacity-25':
                        type === 'default',
                    }"
                    :src="product.image_path"
                  />
                  <img
                    v-else
                    :class="{
                      'w-full': type === 'plits',
                      'w-1/5': type === 'default',
                    }"
                    src="no_image.png"
                  />
                  <div
                    class="flex flex-col items-start"
                    :class="{
                      'w-full': type === 'plits',
                      'w-3/5 pl-2': type === 'default',
                    }"
                  >
                    <h2
                      class="text-lg w-full"
                      :class="{
                        truncate: type === 'plits',
                      }"
                    >
                      {{ product.full_name }}
                    </h2>
                    <div class="mt-3 block">
                      <span class="color-red text-gray-800">Артикул</span>
                      <a href="#">{{ product.vendor_code }}</a>
                    </div>
                    <div class="mt-3 block">
                      <span class="color-red text-gray-800">
                        Срок годности:
                      </span>
                      3 года
                    </div>
                    <div class="mt-3 block">
                      <span class="color-red text-gray-800">
                        Производитель:
                      </span>
                      Байер Фарма АГ, Германия
                    </div>
                    <div v-if="type === 'default'" class="mt-3 block">
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
                        <span>Цена:</span>
                        <strong>{{ product.price }} KZT</strong>
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
            <div
              v-else
              class="flex flex-col w-full text-1.75 text-gray_d items-start"
            >
              <span>
                К сожалению, ничего не найдено по Вашему запросу
                <span class="font-semibold">{{
                  $route.query.search ? $route.query.search : ""
                }}</span>
              </span>
              <div class="flex w-full justify-center mt-12">
                <img src="no_find.png" />
              </div>
            </div>
          </div>
          <div
            v-if="!$route.query.search"
            class="flex flex-col mt-18 top-8 sticky px-4 w-1/3 items-start"
          >
            <div
              class="flex flex-col w-full bg-white rounded-15 px-3 pb-10 items-start"
            >
              <span class="mt-6 mb-5 text-lg font-medium">Фильтр цены</span>
              <span class="mb-7 text-lg font-medium">
                {{
                  price[1] && price[0] !== price[1]
                    ? "от " + price[0] + "₸" + " до " + price[1] + "₸"
                    : price[0] + "₸"
                }}
              </span>
              <vue-slider
                v-model="price"
                :tooltip="'active'"
                :tooltip-placement="['top', 'bottom']"
                width="100%"
                dot-size="16"
                :min="0"
                :max="50000"
                :interval="500"
                :tooltip-formatter="formatter"
              />
            </div>
            <div
              v-if="categoryes.length"
              class="flex flex-col w-full bg-white rounded-15 px-3 py-6 mt-5 items-start"
            >
              <div class="textl-xl font-medium">В этой категории:</div>
              <div v-for="cat in categoryes" :key="cat.id" class="flex py-2">
                <v-radio
                  v-model="cat.active"
                  :checked="cat.active"
                  :title="cat.name"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="products.length"
          class="flex flex-row bg-white p-4 rounded-15 justify-between"
          :class="$route.query.search ? 'w-full' : 'w-2/3'"
        >
          <span class="text-14">
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
      filter_show: false,
      def_filter: {},
      title: "",
      current_categoryes: [],
      categoryes: [],
      filter: {
        id: 1,
        img: "tenge_up.svg",
        text: "по возрастанию цены",
      },
      filters: [
        {
          id: 1,
          img: "tenge_up.svg",
          text: "по возрастанию цены",
        },
        {
          id: 2,
          img: "tenge_down.svg",
          text: "по убыванию цены",
        },
        {
          id: 3,
          img: "alphabet_down.svg",
          text: "A-Z",
        },
        {
          id: 4,
          img: "alphabet_up.svg",
          text: "Z-A",
        },
      ],
      products: [],
      limit: 10,
      page: 1,
      pagination: {},
      price: [0, 0],
      type: "default",
      formatter: (v) => `${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`,
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
    filter() {
      this.getProducts()
    },
    price() {
      this.getProducts()
    },
    categoryes: {
      handler(newData) {
        this.current_categoryes = []
        newData.forEach((x) => {
          if (x.active) this.current_categoryes.push(x)
        })
        if (!this.current_categoryes.legth)
          this.current_categoryes = JSON.parse(JSON.stringify(newData))
        this.getProducts()
      },
      deep: true,
    },
    $route(to) {
      this.getProducts()
      this.getTitle()
      if (to.query.categoryes) {
        this.getSubCategoryes()
      }
    },
  },
  created() {
    this.getProducts()
    this.getTitle()
    if (this.$route.query.categoryes) {
      this.getSubCategoryes()
    }
  },
  methods: {
    getTitle() {
      if (this.$route.query.categoryes)
        this.$axios.get("/category").then((res) => {
          this.title = res.data.category.find(
            (x) => x.id == this.$route.query.categoryes
          ).name
        })
      else this.title = ""
    },
    getSubCategoryes() {
      this.$axios
        .get("/category/" + this.$route.query.categoryes)
        .then((res) => {
          this.categoryes =
            res.data.category.map((x) => {
              return {
                ...x,
                active: false,
              }
            }) || []
          console.log(this.categoryes)
        })
    },
    changeFilter(active) {
      if (this.def_filter.id && active) {
        this.filter_show = false
        this.filter = this.def_filter
      }
      this.def_filter = {}
    },
    changeType() {
      if (this.type === "default") this.type = "plits"
      else if (this.type === "plits") this.type = "default"
    },
    getProducts() {
      if (this.$route.query.search) {
        this.$axios
          .get("https://back.amanz.kz/api/search?q=" + this.$route.query.search)
          .then((res) => {
            this.products = res.data.product.map((x) => {
              return { ...x, current: 1 }
            })
            // this.pagination = res.data.pagination
          })
      } else {
        let filter = this.current_categoryes.map((x) => {
          return {
            type: "category_id",
            value: x.id.toString(),
          }
        })
        if (this.price[0] || this.price[1])
          filter.push({
            type: "price",
            value: this.price[0] + "-" + this.price[1],
          })
        this.$axios
          .post("products", {
            pagination: {
              limit: this.limit,
              page: this.page,
            },
            filter,
            // filter: JSON.stringify(filter),
          })
          .then((res) => {
            this.products = res.data.product.map((x) => {
              return { ...x, current: 1 }
            })
            this.pagination = res.data.pagination
          })
      }
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
.all_filters {
  bottom: 0;
  max-height: 0;
  transform: translateY(50%);
  overflow: hidden;
  transition: 0.3s;
  &.active {
    max-height: 100vh;
    transform: translateY(100%);
  }
  & .filt {
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
