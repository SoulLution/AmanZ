<template>
  <div class="w-full px-4">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full justify-between px-4 text-gray_l border-b-4 border-grey_4"
      >
        <nuxt-link
          v-for="i in 8"
          :key="i"
          class="mx-2 px-2 pt-5 pb-6 overflow-hidden relative"
          :class="{ 'active text-gray_d': true }"
          :to="`/admin/banner?item=${i}`"
        >
          <span>Баннер #{{ i }}</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.bannerlist {
  max-width: 1400px;
  min-height: 825px;
}
a {
  &:after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    left: 0px;
    bottom: 0;
    transform: translateY(100%);
    transition: 0.3s;
    background: #39c874;
    border-radius: 10px 10px 0px 0px;
  }
  &.active:after {
    transform: translateY(0%);
  }
}
</style>
