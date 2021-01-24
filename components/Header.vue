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
              <nuxt-link class="relative" :to="link.src">
                <img :src="link.img" />
                <span>{{ link.title }}</span>
                <div v-if="link.list && link.list.length" class="categoryes">
                  <div
                    class="flex flex-col bg-white rounded-30 overflow-hidden"
                  >
                    <nuxt-link
                      v-for="category in link.list"
                      :key="category.id"
                      class="py-5 px-4 flex w-full flex-row bg-white hover:bg-primary text-$blue_d hover:text-white"
                      :to="`products?categoryes=${category.id}`"
                    >
                      <div
                        class="mr-8"
                        :style="{
                          backgroundImage: `url(${category.image_path})`,
                        }"
                      ></div>
                      <span class="whitespace-no-wrap">{{
                        category.name
                      }}</span>
                    </nuxt-link>
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="navigation">
        <ul>
          <li v-for="link in regist_links" :key="link.src">
            <nuxt-link :to="link.src">
              <img v-if="link.img" :src="link.img" />
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
          src: "/categoryes",
          list: [],
        },
        {
          title: "Контакты",
          img: "phone.svg",
          src: "/contacts",
        },
        {
          title: "Админ панель",
          img: "",
          src: "/admin",
        },
      ],
    }
  },
  watch: {
    $route() {
      this.sidebar = false
    },
  },
  created() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      this.$axios.get("category").then((res) => {
        this.links[0].list = res.data.category
      })
    },
  },
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
  & > * {
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
      & > .categoryes {
        padding-top: 0.75rem;
        max-height: 100vh;
      }
    }
    & > .categoryes {
      height: auto;
      max-height: 0;
      // max-height: 100vh;
      transition: 0.3s;
      padding-top: 0;
      position: absolute;
      bottom: 0;
      overflow: hidden;
      transform: translateY(100%);
      & > div {
        & > a {
          transition: 0.3s;
          & > div {
            max-height: 30px;
            min-height: 30px;
            max-width: 30px;
            min-width: 30px;
            background-size: auto 100%;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
}
</style>
