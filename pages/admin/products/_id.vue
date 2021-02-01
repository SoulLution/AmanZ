<template>
  <div class="w-full px-4">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full flex flex-col-reverse items-start justify-between px-4 text-gray_d p-7"
      >
        <h1 class="m-0 font-medium">Изменение товара</h1>
        <nuxt-link
          to="/admin/products"
          class="flex flex-row items-center mb-5 text-gray_d cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#454C5B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>назад</span>
        </nuxt-link>
      </div>
      <div
        class="flex flex-row items-center justify-start w-full p-7 border-b-4 border-grey_4"
      >
        <div
          class="drop-bg flex flex-col px-6 py-5 w-full"
          @drop="(e) => uploadFile(e)"
        >
          <input
            id="file"
            type="file"
            full_name="file"
            class="hidden"
            accept="image/png, image/jpeg, image/jpg"
            @change="(e) => uploadFile(e)"
          />
          <div
            class="withimg flex flex-col items-center justify-center w-full"
            :style="file ? `background-image: url(${file})` : ''"
            @drop="(e) => uploadFile(e)"
          >
            <div v-if="!file" class="flex flex-col">
              <svg
                width="41"
                height="30"
                viewBox="0 0 41 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9602 0H3.03972C1.63718 0 0.5 1.0965 0.5 2.44896V27.5511C0.5 28.9035 1.63718 30 3.03972 30H37.9602C39.3628 30 40.5 28.9035 40.5 27.551V2.44896C40.5 1.0965 39.3629 0 37.9602 0ZM37.9602 2.44896V20.2598L32.9551 15.8718C32.2028 15.2124 31.046 15.2388 30.3272 15.9325L25.2618 20.8163L15.274 9.31221C14.519 8.44281 13.1361 8.43426 12.3698 9.29323L3.03972 19.7492V2.44896H37.9602ZM27.1667 8.87754C27.1667 7.01752 28.7297 5.51017 30.6586 5.51017C32.5876 5.51017 34.1507 7.01752 34.1507 8.87754C34.1507 10.7376 32.5877 12.2448 30.6586 12.2448C28.7298 12.2449 27.1667 10.7376 27.1667 8.87754Z"
                  fill="#39C874"
                />
              </svg>
              <p class="my-3 text-center text-gray_d">
                Поместите изображение сюда или<br />
                <label for="file" class="text-primary cursor-pointer">
                  загрузите файл
                </label>
                .
              </p>
              <p style="color: #777e8d">jpeg,jpg,png</p>
            </div>
          </div>
        </div>
        <div class="flex flex-row flex-wrap justify-start pl-13 w-full">
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3 opacity-0" style="color: #b7b8be">Категория</span>
            <v-multiselect
              v-model="category"
              class="w-full leading-6 rounded-md border border-transparent cursor-pointer whitespace-no-wrap"
              :searchable="false"
              :options="categoryes"
              :close-on-select="true"
              select-label=""
              style="border: 2px solid #d6d8dc; max-width: 355px"
              label="name"
              selected-label=""
              deselect-label=""
              placeholder="Выберите категорию"
              :taggable="true"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3 opacity-0" style="color: #b7b8be">
              Подкатегория
            </span>
            <v-multiselect
              v-model="sub_category"
              class="w-full leading-6 rounded-md border border-transparent cursor-pointer whitespace-no-wrap"
              :searchable="false"
              :options="sub_categoryes"
              :close-on-select="true"
              select-label=""
              style="border: 2px solid #d6d8dc; max-width: 355px"
              label="name"
              selected-label=""
              deselect-label=""
              placeholder="Выберите категорию"
              :taggable="true"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Наименование</span>
            <input
              v-model="full_name"
              type="text"
              placeholder="Введите название"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc; max-width: 355px"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Артикул</span>
            <input
              v-model="vendor_code"
              type="text"
              placeholder="Введите артикул"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc; max-width: 355px"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Цена за 1 товар</span>
            <input
              v-model="price"
              type="number"
              placeholder="Укажите цену"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc; max-width: 355px"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Скидка в %</span>
            <input
              v-model="sale"
              type="number"
              max="100"
              placeholder="Укажите скидку"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc; max-width: 355px"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Количество</span>
            <input
              v-model="remainder"
              type="number"
              placeholder="Укажите количество на складе"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc; max-width: 355px"
            />
          </div>
          <div class="flex flex-col items-start w-1/2 px-4 mb-4">
            <span class="mb-3">Статус</span>
            <div class="flex flex-row">
              <v-circle-radio
                :value="status"
                :checked="status"
                title="Активен"
                class="mr-10"
                @input="(e) => (status = e)"
              />
              <v-circle-radio
                :value="status"
                :checked="!status"
                title="Выключен"
                @input="(e) => (status = e)"
              />
            </div>
          </div>
          <div class="flex flex-col items-start w-full px-4 mb-4">
            <span class="mb-3" style="color: #b7b8be">Описание</span>
            <textarea
              v-model="description"
              type="number"
              placeholder="Введите описание товара"
              class="rounded-10 p-4 w-full"
              style="border: 2px solid #d6d8dc"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between p-7 w-full">
        <button
          class="bg-transparent border-transparent text-primary cursor-pointer"
          @click="getItem()"
        >
          Отмена
        </button>
        <button
          class="flex flex-row items-center py-3 px-10 text-white bg-gray_d border-0 rounded-12 cursor-pointer"
          @click="sendForm()"
        >
          Добавить
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
      file: "",
      full_name: "",
      vendor_code: "",
      price: "",
      sale: "",
      remainder: "",
      status: 0,
      description: "",
      category: { name: "Выберитен категорию" },
      sub_category: { name: "Выберитен подкатегорию" },
      categoryes: [],
      sub_categoryes: [],
    }
  },
  computed: {
    checkRoute() {
      return isNaN(parseInt(this.$route.params.id))
    },
  },
  watch: {
    category(newData) {
      if (newData && newData.id)
        this.$axios.get("category/" + newData.id).then((res) => {
          this.sub_categoryes = res.data.category
        })
    },
  },
  created() {
    this.getItem()
    this.$axios.get("admin/category").then((res) => {
      this.categoryes = res.data.category
    })
  },
  methods: {
    getItem() {
      if (this.checkRoute) {
        this.sub_category = { name: "Выберитен подкатегорию" }
        this.category = { name: "Выберитен категорию" }
        this.file = ""
        this.full_name = ""
        this.vendor_code = ""
        this.price = ""
        this.sale = ""
        this.remainder = ""
        this.status = 0
        this.description = ""
      } else
        this.$axios
          .get("admin/products/" + this.$route.params.id)
          .then((res) => {
            this.$axios.get("admin/subcategory").then((res1) => {
              for (let i = 0; i < res1.data.category.length; i++) {
                let x = res1.data.category[i]
                if (x.id == res.data.data.subcategory_id) {
                  this.sub_category = x
                  this.category = this.categoryes.find(
                    (y) => y.id == x.category_id
                  )
                  break
                }
              }
            })
            this.file = res.data.data.image_path
            this.full_name = res.data.data.full_name
            this.vendor_code = res.data.data.vendor_code
            this.price = parseInt(res.data.data.price)
            this.sale = parseInt(res.data.data.discount)
            this.remainder = res.data.data.remainder
            this.status = res.data.data.status
            this.description = res.data.data.description
          })
    },
    sendForm() {
      const data = {
        category_id: this.category.id,
        subcategory_id: this.sub_category.id,
        image_path: this.file,
        full_name: this.full_name,
        vendor_code: this.vendor_code,
        price: parseInt(this.price),
        discount: parseInt(this.sale),
        remainder: parseInt(this.remainder),
        status: this.status,
        description: this.description,
      }
      if (this.checkRoute)
        this.$axios.post("/products/create", data).then(() => {
          this.$router.go(-1)
        })
      else
        this.$axios.put("/products/" + this.$route.params.id, data).then(() => {
          this.$router.go(-1)
        })
    },
    uploadFile(e) {
      console.log(e)
      let formData = new FormData()
      formData.append("file", e.target.files[0])
      this.$axios
        .post("storage/upload_file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.file = res.data.link
        })
        .catch(() => {
          this.file = URL.createObjectURL(e.target.files[0])
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.bannerlist {
  max-width: 1400px;
  // min-height: 825px;
}

.drop-bg {
  background: #f9fafc;
  border-radius: 5px;
  max-width: 300px;
  max-height: 300px;
  min-width: 300px;
  min-height: 300px;
}
.withimg {
  max-height: 250px;
  max-width: 250px;
  min-height: 250px;
  min-width: 250px;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px dashed #d3dce6;
  border-radius: 5px;
}
textarea {
  resize: vertical;
  max-height: 200px;
}
</style>
