<template>
  <transition-group name="burger-popup" class="overflow-hidden">
    <div
      v-if="burger"
      key="bg"
      class="w-screen flex flex-col justify-start sm:hidden fixed bg-black bg-opacity-25"
      @click="$store.commit('show/changeBurger', false)"
    ></div>
    <div
      v-if="burger"
      key="content"
      class="z-10 w-3/5 flex flex-col justify-start sm:hidden fixed bg-white overflow-scroll"
    >
      <div class="flex w-full justify-end">
        <div
          class="burger flex sm:hidden flex-col"
          :class="{ active: burger }"
          @click="$store.commit('show/changeBurger', !burger)"
        >
          <div class="stick"></div>
          <div class="stick"></div>
          <div class="stick"></div>
        </div>
      </div>
      <div
        class="flex flex-row py-7 h-auto border-b border-white border-opacity-10 w-full"
      >
        <nav class="navigation flex w-full">
          <ul class="w-full">
            <li v-for="link in links" :key="link.src" class="py-5 px-5 w-full">
              <nuxt-link class="relative flex items-center" :to="link.src">
                <img class="mr-5" :src="link.img" />
                <span>{{ link.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Категории",
          img: "/section.svg",
          src: "/categoryes",
        },
        {
          title: "Корзина",
          img: "/shopping-cart-burger.svg",
          src: "/cart",
        },
        {
          title: "Контакты",
          img: "/phone.svg",
          src: "/contacts",
        },
        {
          title: "Войти",
          img: "/sign.svg",
          src: "/login",
        },
      ],
    }
  },
  computed: {
    burger() {
      return this.$store.state.show.burger
    },
  },
}
</script>

<style lang="scss" scoped>
.ava {
  max-width: 50px;
  max-height: 50px;
  min-width: 50px;
  min-height: 50px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url("/default_user.png");
}
.w-screen {
  top: 0;
  right: 0;
  height: 100vh;
}
.w-3\/5 {
  width: 60%;
  top: 0;
  right: 0;
  height: 100vh;
}

.burger-popup-enter-active {
  animation: burger-fade 0.3s;
}
.burger-popup-leave-active {
  animation: burger-fade 0.3s reverse;
}
@keyframes burger-fade {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.burger {
  border-left: 1px solid #ffffff50;
  padding: 0 0.5rem;
  height: 70px;
  margin-left: 12px;
  justify-content: center;
  & > .stick {
    width: 23px;
    height: 2px;
    margin-bottom: 5px;
    background: #0b0556;
    transition: 0.3s;
  }
  &.active {
    & > .stick {
      transform: rotate(-45deg) translate(-6px, 9px);
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(45deg) translate(-1px, -3px);
      }
    }
  }
}
</style>
