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
        <div class="w-1/12 h-full z-10 cursor-pointer" @click="changeSlide(-1)">
          <img src="/main_slider/left_arrow.png" />
        </div>

        <div class="slides w-10/12">
          <router-link
            v-for="(slide, i) in slider"
            :key="slide.id"
            to="/"
            class="slide w-1/4 flex flex-col items-center justify-start"
            :class="checkSliderClass(i)"
          >
            <img :src="'/main_slider/' + slide.img" />
            <span>{{ slide.title }}</span>
          </router-link>
        </div>

        <div class="w-1/12 h-full z-10 cursor-pointer" @click="changeSlide(1)">
          <img src="/main_slider/right_arrow.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first_slide: 1,
      slider: [
        {
          id: 0,
          title: "Лекарственные средства",
          img: "medicine.png",
        },
        {
          id: 1,
          title: "Лекарственные средства",
          img: "medicine.png",
        },
        {
          id: 2,
          title: "Средства гигиены",
          img: "liquid-soap.png",
        },
        {
          id: 3,
          title: "Для детей",
          img: "feeding-bottle.png",
        },
        {
          id: 4,
          title: "Косметические средства",
          img: "cosmetics.png",
        },
        {
          id: 5,
          title: "Медицинская техника",
          img: "ultrasound-machine.png",
        },
        {
          id: 6,
          title: "Медицинские товары",
          img: "first-aid-kit.png",
        },
        {
          id: 7,
          title: "Ортопедические товары",
          img: "bandage.png",
        },
        {
          id: 8,
          title: "Витамины и добавки",
          img: "vitamin-pill.png",
        },
        {
          id: 9,
          title: "Мобильность и реабилитация",
          img: "orthopedic.png",
        },
      ],
    }
  },
  methods: {
    checkSliderClass(index) {
      let end, type
      type = this.first_slide - 1
      if (type <= 0) type += this.slider.length - 1
      if (index === type) type = 0
      else {
        for (let i = 1; i < 4; i++) {
          type = this.first_slide + i
          if (type > this.slider.length - 1) type -= this.slider.length - 1
          if (index === type) {
            type = i
            break
          } else type = 4
        }
        if (this.first_slide === index) type = 5
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
    changeSlide(step) {
      let now = this.first_slide + step
      if (now < 1) now = this.slider.length - 1
      else if (now >= this.slider.length) now = 1
      this.first_slide = now
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
  height: 230px;
  padding: 0 15px;
  & > .slide {
    position: absolute;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
    padding: 1.25rem;
    user-select: none;
    border-radius: 40px;
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
</style>
