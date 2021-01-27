<template>
  <div class="w-full px-4">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full items-start justify-between px-4 text-gray_d p-7"
      >
        <div class="flex flex-col items-start">
          <h1 class="m-0 font-medium">Все товары</h1>
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по артикулу"
            class="rounded-10 mt-6 p-4 w-full"
            style="border: 2px solid #d6d8dc; max-width: 355px"
          />
        </div>
        <!-- <nuxt-link
          to="/admin/products/new"
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
        </nuxt-link> -->
      </div>
      <table class="w-full">
        <thead class="rounded-10" style="background: #e0e0e0">
          <tr class="text-$blue_d">
            <td class="p-2"><v-radio v-model="all" :checked="checkAll" /></td>
            <td class="p-2">Фото</td>
            <td class="p-2">Наименование</td>
            <td class="p-2">Артикул</td>
            <td class="p-2">Кол-во</td>
            <td class="p-2">Цена в kzt</td>
            <td class="p-2">Скидка</td>
            <!-- <td class="p-2">Изменен</td> -->
            <td class="p-2">Статус</td>
            <td class="p-2">Действие</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in products" :key="product.id">
            <td class="p-2">
              <v-radio v-model="product.active" :checked="product.active" />
            </td>
            <td class="p-2">
              <div
                class="img"
                :style="{ backgroundImage: `url(${product.image_path})` }"
              ></div>
            </td>
            <td class="p-2">{{ product.full_name }}</td>
            <td class="p-2">{{ product.vendor_code }}</td>
            <td class="p-2">{{ product.remainder }}</td>
            <td class="p-2">{{ product.price || 0 }}</td>
            <td class="p-2">{{ product.discount || "0" }}%</td>
            <!-- <td class="p-2">27.01.21 Ергали А.</td> -->
            <td
              class="p-2"
              :class="product.status ? 'text-primary' : 'text-$error'"
            >
              {{ getRemName(product.status) }}
            </td>
            <td>
              <div class="flex flex-row">
                <nuxt-link
                  :to="`/admin/products/${product.id}`"
                  class="rounded-5 bg-primary text-white p-1 mr-1 cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.75 9.24985C18.2415 9.75838 17.9872 10.0126 17.6814 10.069C17.5615 10.0912 17.4385 10.0912 17.3186 10.069C17.0128 10.0126 16.7585 9.75838 16.25 9.24985L14.75 7.74985C14.2415 7.24132 13.9872 6.98706 13.9308 6.68123C13.9087 6.56132 13.9087 6.43838 13.9308 6.31846C13.9872 6.01264 14.2415 5.75838 14.75 5.24985C15.2585 4.74132 15.5128 4.48706 15.8186 4.43065C15.9385 4.40853 16.0615 4.40853 16.1814 4.43065C16.4872 4.48706 16.7415 4.74132 17.25 5.24985L18.75 6.74985C19.2585 7.25838 19.5128 7.51264 19.5692 7.81846C19.5913 7.93838 19.5913 8.06132 19.5692 8.18123C19.5128 8.48706 19.2585 8.74132 18.75 9.24985ZM6 19.9998C5.05719 19.9998 4.58579 19.9998 4.29289 19.707C4 19.4141 4 18.9427 4 17.9998V16.8283C4 16.4195 4 16.2151 4.07612 16.0314C4.15224 15.8476 4.29676 15.7031 4.58579 15.4141L11.0858 8.91406C11.7525 8.2474 12.0858 7.91406 12.5 7.91406C12.9142 7.91406 13.2475 8.2474 13.9142 8.91406L15.0858 10.0856C15.7525 10.7523 16.0858 11.0856 16.0858 11.4998C16.0858 11.9141 15.7525 12.2474 15.0858 12.9141L8.58579 19.4141C8.29676 19.7031 8.15224 19.8476 7.96847 19.9237C7.7847 19.9998 7.58032 19.9998 7.17157 19.9998H6Z"
                      fill="inherit"
                    />
                  </svg>
                </nuxt-link>
                <button
                  class="rounded-5 bg-$error text-white p-1 ml-1 cursor-pointer"
                  @click="deleteCat(i)"
                >
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
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="footer flex w-full flex-row justify-end border-t-4 border-grey_4 p-7 mt-10"
      >
        <button
          class="mr-12"
          :disabled="findSome === false"
          @click="$router.push(`/admin/products/${products[findSome].id}`)"
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
      search: "",
      products: [],
      all: false,
    }
  },
  computed: {
    findSome() {
      let result = false
      for (let i = 0; i < this.products.length; i++)
        if (result && this.products[i].active) {
          result = false
          break
        } else if (this.products[i].active) result = i
      return result
    },
    checkAll() {
      let result = true
      for (let i = 0; i < this.products.length; i++)
        if (!this.products[i].active) {
          result = false
          break
        }
      return result
    },
  },
  watch: {
    search(newData) {
      this.$axios.get("search?q=" + newData).then((res) => {
        this.products = res.data.product || []
      })
    },
    all(newData) {
      this.products.forEach((x) => {
        x.active = newData
      })
    },
  },
  created() {
    this.$axios.post("admin/products").then((res) => {
      this.products = res.data.map((x) => {
        return {
          ...x,
          image_path: x.image_path || "/no_image.png",
          active: false,
        }
      })
    })
  },
  methods: {
    getRemName(status) {
      if (status) return "АКТИВЕН"
      else return "ВЫКЛЮЧЕН"
    },
    deleteCat(index) {
      if (index || index === 0) {
        this.$axios.delete("/admin/products/" + this.products[index])
        this.products.splice(index, 1)
      } else
        for (let i = 0; i < this.products.length; i++)
          if (this.products[i].active) {
            this.$axios.delete("/admin/products/" + this.products[i])
            this.products.splice(i, 1)
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
  padding: 1rem;
  & > td {
    border-top: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    &:first-child {
      border-left: 1px solid #bdbdbd;
    }
    &:last-child {
      border-right: 1px solid #bdbdbd;
    }
  }
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
