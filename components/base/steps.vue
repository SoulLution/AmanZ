<template>
  <div class="steps flex-row">
    <button
      class="cursor-pointer text-white bg-gray_d w-6 h-6 rounded-lg active:bg-primary outline-none"
      @click="setValue(-1)"
    >
      -
    </button>
    <span class="flex mx-2 h-6 px-2 rounded-lg items-center bg-grey_4">{{
      value
    }}</span>
    <button
      class="cursor-pointer text-white bg-gray_d w-6 h-6 rounded-lg active:bg-primary outline-none"
      @click="setValue(1)"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {}
  },
  methods: {
    setValue(type) {
      let value = this.value + this.step * type
      if (value >= this.max) value = this.max
      else if (value <= this.min) value = this.min
      this.$emit("input", value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
