<template>
  <div class="header">
    <div class="content justify-between header-content">
      <div class="flex justify-start">
        <nuxt-link to="/" class="logo">
          <img src="@/static/logo.png" />
        </nuxt-link>
        <nav class="navigation">
          <ul>
            <li v-for="link in links" :key="link.src">
              <nuxt-link :to="link.src">
                <img :src="link.img" />
                <span>{{ link.title }}</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="navigation">
        <ul>
          <li v-for="link in regist_links" :key="link.src">
            <nuxt-link :to="link.src">
              <img :src="link.img" />
              <span>{{ link.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      regist_links: [
        {
          title: "Войти/Регистрация",
          img: "sign.svg",
          src: "/login",
        },
      ],
      links: [
        {
          title: "Разделы",
          img: "section.svg",
          src: "/products?search=products",
        },
        {
          title: "Контакты",
          img: "phone.svg",
          src: "/contacts",
        },
      ],
    }
  },
  watch: {
    $route() {
      this.sidebar = false
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.header {
  height: 100px;
  background-color: $white;
}
ul {
  list-style-type: none;
}
li {
  float: left;
  & > a {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    color: $gray_d;
    & > img {
      padding-right: 5px;
    }
    &:hover {
      color: $primary;
    }
  }
}
</style>
