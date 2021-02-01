<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12 hidden sm:flex">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">Найдите нужные лекарства</h1>
        <label class="search-inp relative w-full">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по названию
          препарата, симптомов болезни и тд."
            @keyup.enter="
              $router.push({
                path: 'products',
                query: { search: search },
              })
            "
          />
          <div
            v-if="search_list.length"
            class="absolute flex flex-col justify-start search-body w-full rounded-20"
          >
            <div
              v-for="item in search_list"
              :key="item.id"
              class="truncate justify-start w-full px-8 py-4 text-$blue_d hover:text-white text-left bg-white hover:bg-primary cursor-pointer"
              @click="
                $router.push({
                  path: 'products',
                  query: { search: item.full_name },
                })
              "
            >
              {{ item.full_name }}
            </div>
          </div>
        </label>
        <div class="search-popular text-white">
          <span>
            Популярные запросы:
            <nuxt-link to="products?search=COVID-19">COVID-19</nuxt-link>,
            <nuxt-link to="products?search=парацетамол">парацетамол</nuxt-link>,
            <nuxt-link to="products?search=противовирусное">
              противовирусное
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <div class="slider bg-white py-8 hidden sm:flex">
      <div class="content flex-row justify-between">
        <div
          class="w-1/12 h-full z-10 cursor-pointer"
          @click="changeSlide('slider', -1)"
        >
          <img src="/main_slider/left_arrow.png" />
        </div>

        <div class="slides w-10/12">
          <router-link
            v-for="(slide, i) in slider"
            :key="slide.id"
            :to="'/products?categoryes=' + slide.id"
            class="slide w-1/4 flex flex-col items-center justify-start cursor-pointer"
            :class="checkSliderClass('slider', i)"
          >
            <img :src="slide.image_path" />
            <span>{{ slide.name }}</span>
          </router-link>
        </div>

        <div
          class="w-1/12 h-full z-10 cursor-pointer"
          @click="changeSlide('slider', 1)"
        >
          <img src="/main_slider/right_arrow.png" />
        </div>
      </div>
    </div>
    <div class="slider bg-white py-8 hidden sm:flex">
      <div class="content flex-col items-start">
        <h2 class="text-$blue_d font-bold text-1.75">Новинки</h2>
        <div class="flex flex-row w-full justify-between">
          <div
            class="w-1/12 h-full z-10 cursor-pointer"
            @click="changeSlide('products', -1)"
          >
            <img src="/main_slider/left_arrow.png" />
          </div>

          <div class="slides pb-5 w-10/12">
            <div
              v-for="(slide, i) in products"
              :key="i"
              class="slide w-1/4 flex flex-col items-center justify-start cursor-default"
              :class="checkSliderClass('products', i)"
            >
              <nuxt-link
                class="product_image relative overflow-hidden rounded-10"
                :to="`/products/${slide.id}`"
              >
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
              </nuxt-link>
              <span
                class="truncate w-full text-gray_d"
                style="margin-top: 1rem"
              >
                {{ slide.full_name }}
              </span>
              <div
                class="my-4 border-t border-b border-grey_4 w-full py-4 flex flex-row"
              >
                <v-steps v-model="slide.current" :max="slide.remainder" />
                <span
                  class="whitespace-no-wrap text-14 text-gray_d ml-3 flex flex-col"
                >
                  <span
                    v-if="slide.discount"
                    class="opacity-50"
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
              <img
                class="cursor-pointer"
                src="green_card.svg"
                @click="$store.commit('basket/addProduct', slide)"
              />
            </div>
          </div>

          <div
            class="w-1/12 h-full z-10 cursor-pointer"
            @click="changeSlide('products', 1)"
          >
            <img src="/main_slider/right_arrow.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="slider bg-white py-8 hidden sm:flex">
      <div class="content akzii relative justify-start flex-col items-start">
        <h2 class="text-$blue_d font-bold text-1.75">Акции</h2>
        <div
          class="computer bg-$blue_d rounded-xl flex flex-col w-full justify-between"
        >
          <div class="flex flex-row w-full">
            <div
              class="w-1/12 h-full z-10 cursor-pointer"
              @click="changeSlide('akzii', -1)"
            >
              <img src="/akzii_arrow.png" style="transform: scale(-1, 1)" />
            </div>

            <div class="slides pb-5 w-10/12">
              <div
                v-for="(slide, i) in akzii"
                :key="i"
                class="slide w-full flex flex-col items-center justify-start"
                :class="checkSliderClass('akzii', i)"
              >
                <div class="product_image relative">
                  <img v-if="slide.image_path" :src="slide.image_path" />
                  <img v-else src="akzii_default.png" />
                </div>
              </div>
            </div>

            <div
              class="w-1/12 h-full z-10 cursor-pointer"
              @click="changeSlide('akzii', 1)"
            >
              <img src="/akzii_arrow.png" />
            </div>
          </div>
          <div class="computer-taps">
            <div
              v-for="i in akzii.length - 1"
              :key="i"
              class="cyrcle"
              :class="{ active: akzii_current === i }"
            ></div>
          </div>
        </div>
        <button
          class="bg-gray_d text-white py-2 px-10 rounded-xl absolute right-0 bottom-0"
        >
          Подробнее
        </button>
      </div>
    </div>

    <div class="slider py-8 sm:hidden flex w-full">
      <div class="content relative justify-start flex-col items-start">
        <div class="rounded-xl flex flex-col w-full justify-between">
          <div class="flex flex-row w-full">
            <div
              class="w-1/12 h-full z-10 cursor-pointer"
              @click="changeSlide('akzii', -1)"
            >
              <img src="/akzii_arrow.png" style="transform: scale(-1, 1)" />
            </div>

            <div class="slides pb-5 w-12/12">
              <div
                v-for="(slide, i) in akzii"
                :key="i"
                class="slide w-full flex flex-col items-center justify-start"
                :class="checkSliderClass('akzii', i)"
              >
                <div class="product_image relative">
                  <img v-if="slide.image_path" :src="slide.image_path" />
                  <img v-else src="akzii_default.png" />
                </div>
              </div>
            </div>

            <div
              class="w-1/12 h-full z-10 cursor-pointer"
              @click="changeSlide('akzii', 1)"
            >
              <img src="/akzii_arrow.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 sm:hidden flex w-full">
      <div class="content flex flex-row flex-wrap">
        <router-link
          v-for="slide in slider"
          :key="slide.id"
          :to="'/products?categoryes=' + slide.id"
          class="slide w-1/3 mb-5 flex flex-col items-center justify-start cursor-pointer"
        >
          <div class="cyrcle-slides">
            <img :src="slide.image_path" />
          </div>
          <span>{{ slide.name }}</span>
        </router-link>
        <nuxt-link to="/categoryes" class="flex w-full justify-end">
          <span class="text-primary border-b border-primary">Показать все</span>
        </nuxt-link>
      </div>
    </div>
    <div class="py-8 sm:hidden flex w-full">
      <div class="content flex flex-col items-start">
        <h3 class="text-$blue_d font-bold mb-5">Популярные товары</h3>
        <div class="flex flex-row flex-wrap justify-start items-start w-full">
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
      search_list: [],
      akzii: [
        {
          id: 0,
          img: "medicine.png",
        },
        {
          id: 1,
          img: "medicine.png",
        },
        {
          id: 2,
          img: "liquid-soap.png",
        },
        {
          id: 3,
          img: "feeding-bottle.png",
        },
        {
          id: 4,
          img: "cosmetics.png",
        },
        {
          id: 5,
          img: "ultrasound-machine.png",
        },
        {
          id: 6,
          img: "first-aid-kit.png",
        },
        {
          id: 7,
          img: "bandage.png",
        },
        {
          id: 8,
          img: "vitamin-pill.png",
        },
        {
          id: 9,
          img: "orthopedic.png",
        },
      ],
      slider: [
        // {
        //   id: 0,
        //   title: "Лекарственные средства",
        //   img: "medicine.png",
        // },
        // {
        //   id: 1,
        //   title: "Лекарственные средства",
        //   img: "medicine.png",
        // },
        // {
        //   id: 2,
        //   title: "Средства гигиены",
        //   img: "liquid-soap.png",
        // },
        // {
        //   id: 3,
        //   title: "Для детей",
        //   img: "feeding-bottle.png",
        // },
        // {
        //   id: 4,
        //   title: "Косметические средства",
        //   img: "cosmetics.png",
        // },
        // {
        //   id: 5,
        //   title: "Медицинская техника",
        //   img: "ultrasound-machine.png",
        // },
        // {
        //   id: 6,
        //   title: "Медицинские товары",
        //   img: "first-aid-kit.png",
        // },
        // {
        //   id: 7,
        //   title: "Ортопедические товары",
        //   img: "bandage.png",
        // },
        // {
        //   id: 8,
        //   title: "Витамины и добавки",
        //   img: "vitamin-pill.png",
        // },
        // {
        //   id: 9,
        //   title: "Мобильность и реабилитация",
        //   img: "orthopedic.png",
        // },
      ],
      products: [],
    }
  },
  watch: {
    search(newData) {
      // if (newData.length >= 3)
      this.$axios.get("search?q=" + newData).then((res) => {
        this.search_list = res.data.product || []
      })
      // else !newData.length
      // this.search_list = false
    },
  },
  async created() {
    this.getCategories()
    this.getProducts()
    this.getAkzii()
  },
  methods: {
    getAkzii() {
      this.$axios.get("banner").then((res) => {
        this.akzii = res.data.banner
        while (this.akzii.length <= 8)
          res.data.banner.forEach((x) => {
            if (this.akzii.length <= 8) this.akzii.push(x)
          })
      })
    },
    getProducts() {
      this.$axios
        .post("products/category_id=1", {
          pagination: {
            limit: 10,
            page: 1,
          },
        })
        .then((res) => {
          let products = res.data.product.map((x) => {
            return { ...x, current: 1 }
          })
          this.products = products.concat(products)

          while (this.products.length < 8)
            products.forEach((x) => {
              if (this.products.length < 8) this.products.push(x)
            })
        })
    },
    getCategories() {
      this.$axios.get("category").then((res) => {
        this.slider = res.data.category
        while (this.slider.length <= 8)
          res.data.category.forEach((x) => {
            if (this.slider.length <= 8) this.slider.push(x)
          })
      })
    },
    checkSliderClass(who, index) {
      let end, type
      type = this[who + "_current"] - 1
      if (type <= 0) type += this[who].length - 1
      if (index === type) type = 0
      else {
        for (let i = 1; i < 4; i++) {
          type = this[who + "_current"] + i
          if (type > this[who].length - 1) type -= this[who].length - 1
          if (index === type) {
            type = i
            break
          } else type = 4
        }
        if (this[who + "_current"] === index) type = 5
      }
      switch (type) {
        case 0:
          end = "__left-1"
          break
        case 1:
          end = "__right-1"
          break
        case 2:
          end = "__right-2"
          break
        case 3:
          end = "__right-3"
          break
        case 4:
          end = "__behind"
          break
        case 5:
          end = ""
          break
      }
      return end
    },
    changeSlide(who, step) {
      let now = this[who + "_current"] + step
      if (now < 1) now = this[who].length - 1
      else if (now >= this[who].length) now = 1
      this[who + "_current"] = now
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
@media (min-width: 640px) {
  .index {
    & > div {
      margin-bottom: 6.25rem;
      width: 100%;
      &.search {
        margin-bottom: 2.1875rem;
      }
    }
  }
}
@media (max-width: 639px) {
  .slides,
  .slide {
    padding: 0 !important;
  }
  .__left-1 {
    left: -100% !important;
    opacity: 0;
  }
  .__behind {
    left: 100% !important;
    opacity: 0;
  }
  .__right-1 {
    left: 100% !important;
    opacity: 0;
  }
  .__right-2 {
    left: 100% !important;
    opacity: 0;
  }
  .__right-3 {
    left: 100% !important;
    opacity: 0;
  }
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
.slides {
  position: relative;
  min-height: 230px;
  padding: 0 15px;
  & > .slide {
    position: absolute;
    left: 0;
    transition: 0.3s;
    padding: 1.25rem;
    user-select: none;
    border-radius: 40px;
    &:first-child {
      position: relative;
    }
    &.__left-1 {
      left: -25%;
      opacity: 0;
    }
    &.__behind {
      left: 100%;
      opacity: 0;
    }
    &.__right-1 {
      left: 25%;
    }
    &.__right-2 {
      left: 50%;
    }
    &.__right-3 {
      left: 75%;
    }
    &:hover {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    }
    & > span {
      margin-top: 1.875rem;
      color: $blue_d;
      text-align: center;
      font-size: 1.25rem;
    }
  }
}
.search {
  & h1 {
    font-size: 2.5rem;
  }
  input {
    width: 100%;
    padding: 14px 20px;
    font-size: 1.25rem;
    border-radius: 20px;
    outline: none;
    margin: 2.125rem 0 2.75rem;
    &::placeholder {
      color: $grey_2;
    }
  }
  & span {
    font-size: 1.25rem;
    & a {
      text-decoration: underline;
    }
  }
}
.product_image {
  height: 230px;
}
.akzii {
  overflow: visible;
  background-image: url("/akzii_bg.svg");
  background-repeat: no-repeat;
  background-position: 0 0;
  min-height: 512px;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: url("/akzii_muzhik.png");
    background-repeat: no-repeat;
    background-position: 0 0;
    height: 425px;
    width: 240px;
  }
}
.computer {
  justify-content: center;
  margin-left: 180px;
  width: calc(100% - 180px);
  height: 400px;
  margin-top: -25px;
  &-taps {
    position: absolute;
    bottom: 120px;
    & > .cyrcle {
      max-width: 8px;
      min-width: 8px;
      max-height: 8px;
      min-height: 8px;
      border-radius: 50%;
      margin-right: 0.5rem;
      background-color: #d6d8dc;
      transition: 0.3s;
      &.active {
        background-color: #39c874;
      }
    }
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #454c5b;
    bottom: 0;
    z-index: 0;
  }
  &:before {
    width: 48px;
    height: 105px;
  }
  &:after {
    width: 285px;
    height: 16px;
  }
  & .slide {
    min-width: 100%;
  }
  & .__left-1,
  & .__right-1,
  & .__right-2,
  & .__right-3 {
    opacity: 0;
    position: absolute;
  }
  & .product_image > img {
    border: 10px solid #454c5b;
  }
}
.sale {
  padding: 1rem 2rem 0.5rem 2rem;
  text-align: center;
  left: -2.25rem;
  top: -0.75rem;
  transform: rotate(-45deg);
}
.search-body {
  max-height: 200px;
  overflow: auto;
  bottom: 2.5rem;
  transform: translateY(100%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
}
</style>
