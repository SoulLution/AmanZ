<template>
  <div class="basket content fixed z-10">
    <div class="basket-circle absolute right-8 bottom-8" @click="changeShow()">
      <div class="cursor-pointer p-5 rounded-full bg-white">
        <img src="/shopping-cart.svg" class="z-10" />
      </div>
    </div>
    <div
      class="basket-list absolute flex-col right-0 top-0 bg-white w-full max-w-2xl"
    >
      <div class="flex-row w-full justify-end">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7.99999 7.99999M7.99999 7.99999L15 15M7.99999 7.99999L15 1M7.99999 7.99999L1 15"
            stroke="#6D6F80"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="w-full flex-col justify-start items-start">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex-row justify-between w-full"
        >
          <span>{{ product.name }}</span>
          <v-steps v-model="product.count" :max="product.max" />
          <span>{{ product.price }}KZT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      products: [
        {
          id: 1,
          img: "shopping-cart.svg",
          name: "card-pill",
          count: 1,
          price: 1150,
          max: 10,
        },
        {
          id: 2,
          img: "shopping-cart.svg",
          name: "card-pill",
          count: 1,
          price: 1150,
          max: 10,
        },
        {
          id: 3,
          img: "shopping-cart.svg",
          name: "card-pill",
          count: 1,
          price: 1150,
          max: 10,
        },
      ],
    }
  },
  methods: {
    changeShow() {
      this.show = !this.show
    },
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";

.basket-circle {
  & > div {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    transform: scaleX(1);
  }
  & img {
    transition: 0.3s;
  }
  &:hover {
    & > div {
      transform: scaleX(-1);
      @apply bg-gray-400;
    }
    & img {
      transform: scaleX(-1);
    }
  }
}
</style>
