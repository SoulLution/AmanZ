<template>
  <div class="w-full px-4">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full justify-start px-4 text-gray_l border-b-4 border-grey_4"
      >
        <nuxt-link
          class="mx-2 px-2 pt-5 pb-6 overflow-hidden relative"
          to="/admin/categories"
        >
          <span>Категории</span>
        </nuxt-link>
        <nuxt-link
          class="mx-2 px-2 pt-5 pb-6 overflow-hidden relative"
          to="/admin/subcategories"
        >
          <span>Подкатегории</span>
        </nuxt-link>
      </div>
      <div class="flex w-full justify-between text-gray_d p-7">
        <h1 class="m-0 font-medium">Все категории</h1>
        <nuxt-link
          to="/admin/categories/new"
          class="flex flex-row items-center py-3 px-10 text-white bg-gray_d border-0 rounded-12 cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            class="mr-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V8M8 8H14M8 8H2M8 8V14"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Добавить</span>
        </nuxt-link>
      </div>
      <table class="w-full">
        <thead class="rounded-10" style="background: #e0e0e0">
          <tr class="text-$blue_d">
            <td class="p-2"><v-radio v-model="all" :checked="checkAll" /></td>
            <td class="p-2">Фото</td>
            <td class="p-2">Наименование</td>
            <td class="p-2">Подкатегории</td>
            <td class="p-2">Изменен</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categoryes" :key="category.id" class="mt-1">
            <td class="p-2">
              <v-radio v-model="category.active" :checked="category.active" />
            </td>
            <td class="p-2">
              <div
                class="img"
                :style="{ backgroundImage: `url(${category.image_path})` }"
              ></div>
            </td>
            <td class="p-2">{{ category.name }}</td>
            <td class="p-2">{{ category.sub }}</td>
            <td class="p-2">27.01.21 Ергали А.</td>
          </tr>
        </tbody>
      </table>
      <div
        class="footer flex w-full flex-row justify-end border-t-4 border-grey_4 p-7 mt-10"
      >
        <button
          class="mr-12"
          :disabled="findSome === false"
          @click="$router.push(`/admin/categories/${categoryes[findSome].id}`)"
        >
          Изменить
        </button>
        <button :disabled="!checkAll" @click="deleteCat()">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 10L13.7 17M10.3 17L10 10M6 6L6.87554 19.133C6.94558 20.1836 7.81818 21 8.87111 21H15.1289C16.1818 21 17.0544 20.1836 17.1245 19.133L18 6M6 6H9M6 6H4M18 6H20M18 6H15M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M15 6H9"
              stroke="inherit"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      categoryes: [],
      all: false,
    }
  },
  computed: {
    findSome() {
      let result = false
      for (let i = 0; i < this.categoryes.length; i++)
        if (result && this.categoryes[i].active) {
          result = false
          break
        } else if (this.categoryes[i].active) result = i
      return result
    },
    checkAll() {
      let result = true
      for (let i = 0; i < this.categoryes.length; i++)
        if (!this.categoryes[i].active) {
          result = false
          break
        }
      return result
    },
  },
  watch: {
    all(newData) {
      this.categoryes.forEach((x) => {
        x.active = newData
      })
    },
  },
  created() {
    this.$axios.get("admin/category").then((res) => {
      this.categoryes = res.data.category.map((x, index) => {
        this.$axios.get("/category/" + x.id).then((res) => {
          console.log(res.data)
          this.categoryes[index].sub = res.data.category.length
        })
        return {
          ...x,
          sub: 0,
          active: false,
        }
      })
    })
  },
  methods: {
    deleteCat() {
      for (let i = 0; i < this.categoryes.length; i++)
        if (this.categoryes[i].active) {
          this.$axios.delete("/admin/category/" + this.categoryes[i])
          this.categoryes.splice(i, 1)
        }
    },
  },
}
</script>

<style lang="scss" scoped>
.bannerlist {
  max-width: 1400px;
  min-height: 825px;
}

.banner-header > a {
  &:after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    left: 0px;
    bottom: 0;
    transform: translateY(110%);
    transition: 0.3s;
    background: #39c874;
    border-radius: 10px 10px 0px 0px;
  }
  &.nuxt-link-active:after {
    transform: translateY(0%);
  }
}
.img {
  max-width: 25px;
  min-width: 25px;
  max-height: 25px;
  min-height: 25px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
}
tbody > tr {
  border: 1px solid #bdbdbd;
}
.footer {
  & > button {
    width: auto;
    padding: 0.5rem 3rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border-radius: 12px;
    color: white;
    background-color: #39c874;
    cursor: pointer;
    &:disabled {
      color: #b7b8be;
      background-color: #d6d8dc;
    }
  }
}
</style>
