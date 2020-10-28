<template>
  <div class="flex fle-row">
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="changeCurrent(-1)"
    >
      <path
        d="M9 16.5L4.5 12M4.5 12L9 7.5M4.5 12L20.5 12"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div class="flex flex-row">
      <div
        v-if="current !== min"
        class="step"
        :class="{ active: current - 1 === value }"
        @click="$emit('input', current - 1)"
      >
        {{ current - 1 }}
      </div>
      <div
        class="step"
        :class="{ active: current === value }"
        @click="$emit('input', current)"
      >
        {{ current }}
      </div>
      <div
        v-if="current === min && current + 1 <= max"
        class="step"
        @click="$emit('input', current + 1)"
      >
        {{ current + 1 }}
      </div>
      <div v-if="current < max - 2" class="step" @click="changeCurrent(1)">
        ...
      </div>
      <div
        v-if="current === max - 2 && max > 3"
        class="step"
        :class="{ active: max - 1 === value }"
        @click="$emit('input', max - 1)"
      >
        {{ max - 1 }}
      </div>
      <div
        v-if="current !== max && max > 2"
        class="step"
        @click="$emit('input', max)"
      >
        {{ max }}
      </div>
    </div>
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="changeCurrent(1)"
    >
      <path
        d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5"
        stroke="inherit"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: this.value,
    }
  },
  watch: {
    value(newValue) {
      this.current = newValue
    },
  },
  methods: {
    changeCurrent(step) {
      if (this.max > 3) {
        let cur = this.current + step
        if (cur <= this.min + 1) cur = this.min + 1
        else if (cur >= this.max - 2) cur = this.max - 2
        this.current = cur
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.step {
  @apply p-1;
}
.step,
svg {
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: #454c5b;
  @apply rounded;
  @apply mx-1;
  &.active {
    background-color: #373946 !important;
    color: white;
  }
  &:hover {
    color: white;
    stroke: white;
    @apply bg-primary;
  }
}
</style>
