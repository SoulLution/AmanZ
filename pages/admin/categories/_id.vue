<template>
  <div class="w-full px-4">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full flex flex-col-reverse items-start justify-between px-4 text-gray_d p-7"
      >
        <h1 class="m-0 font-medium">
          {{
            checkRoute ? "Добавление новой категории" : "Изменение категории"
          }}
        </h1>
        <nuxt-link
          to="/admin/categories"
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
        class="flex flex-row items-start justify-start w-full p-7 border-b-4 border-grey_4"
      >
        <div
          class="drop-bg flex flex-col px-6 py-5 w-full"
          @drop="(e) => uploadFile(e)"
        >
          <input
            id="file"
            type="file"
            name="file"
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
            </div>
          </div>
          <p class="my-3 text-center text-gray_d">
            Поместите изображение сюда или<br />
            <label for="file" class="text-primary cursor-pointer">
              загрузите файл
            </label>
            .
          </p>
          <p style="color: #777e8d">jpeg,jpg,png</p>
        </div>
        <div class="flex flex-col ml-13 items-start w-full">
          <span class="mb-3" style="color: #b7b8be">Наименование</span>
          <input
            v-model="name"
            type="text"
            placeholder="Введите название категории"
            class="rounded-10 p-4 w-full"
            style="border: 2px solid #d6d8dc; max-width: 355px"
          />
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
          {{ checkRoute ? "Добавить" : "Сохранить" }}
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
      name: "",
    }
  },
  computed: {
    checkRoute() {
      return isNaN(parseInt(this.$route.params.id))
    },
  },
  created() {
    this.getItem()
  },
  methods: {
    getItem() {
      if (this.checkRoute) {
        this.file = ""
        this.name = ""
      } else
        this.$axios.get("admin/category").then((res) => {
          const item = res.data.category.find(
            (x) => x.id == this.$route.params.id
          )
          this.file = item.image_path
          this.name = item.name
        })
    },
    sendForm() {
      const data = {
        name: this.name,
        image_path: this.file,
      }
      if (this.checkRoute)
        this.$axios.post("/admin/category", data).then(() => {
          this.$router.go(-1)
        })
      else
        this.$axios
          .put("/admin/category/" + this.$route.params.id, data)
          .then(() => {
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
  max-height: 100px;
  max-width: 100px;
  min-height: 100px;
  min-width: 100px;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px dashed #d3dce6;
  border-radius: 5px;
}
</style>
