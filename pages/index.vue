<template>
  <div class="index flex-col justify-start pt-0">
    <div class="search bg-$blue_d pt-10 pb-12">
      <div class="content flex-col items-start">
        <h1 class="content-title text-white m-0">Найдите нужные лекарства</h1>
        <label class="search-inp w-full">
          <input
            type="text"
            name="search"
            placeholder="Поиск по названию
          препарата, симптомов болезни и тд."
          />
        </label>
        <div class="search-popular text-white">
          <span>
            Популярные запросы:
            <nuxt-link to="/">COVID-19</nuxt-link>,
            <nuxt-link to="/">парацетамол</nuxt-link>,
            <nuxt-link to="/">противовирусное</nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <div class="slider bg-white py-8">
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
            to="/"
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

    <div class="slider bg-white py-8">
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
              :key="slide.id"
              class="slide w-1/4 flex flex-col items-center justify-start"
              :class="checkSliderClass('products', i)"
            >
              <div class="product_image relative">
                <img v-if="slide.image_path" :src="slide.image_path" />
                <img v-else src="no_image.svg" />
              </div>
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
                <span class="whitespace-no-wrap text-14 text-gray_d ml-3">
                  {{ slide.price }} KZT
                </span>
              </div>
              <img class="cursor-pointer" src="green_card.svg" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider_current: 1,
      products_current: 1,
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
  created() {
    this.getCategories()
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.$axios
        .post("products", {
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
          console.log(this.products)
        })
    },
    getCategories() {
      this.$axios.get("category").then((res) => {
        this.slider = res.data.category
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
.index {
  & > div {
    margin-bottom: 6.25rem;
    width: 100%;
    &.search {
      margin-bottom: 2.1875rem;
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
</style>
