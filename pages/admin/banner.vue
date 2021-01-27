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
          :class="{ 'active text-gray_d': activeBanner == i }"
          :to="`/admin/banner?item=${i}`"
        >
          <span>Баннер #{{ i }}</span>
        </nuxt-link>
      </div>
      <form
        class="flex flex-col items-start w-full p-7"
        @submit.prevent="sendForm"
      >
        <h1 class="text-gray_d text-1.75 font-medium m-0">
          Баннер #{{ activeBanner }}
        </h1>
        <h4 class="text-gray_d font-medium my-7">Статус</h4>
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
        <h4
          class="flex flex-row w-full justify-between text-gray_d font-normal my-7"
        >
          <span>Загрузите изображение</span>
          <label
            v-if="file"
            for="file"
            class="flex flex-row text-primary cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M18 19H6M12 16V4M12 16L15.5 12.5M12 16L8.5 12.5"
                stroke="#39C874"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Загрузить новое</span>
          </label>
        </h4>
        <div class="flex flex-row w-full justify-center items-center">
          <div class="drop-bg px-6 py-5 w-full">
            <input
              id="file"
              type="file"
              name="file"
              class="hidden"
              accept="image/png, image/jpeg, image/jpg"
              @change="(e) => uploadFile(e)"
            />
            <div
              class="withimg flex justify-center items-center w-full"
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
        </div>
        <h4 class="text-gray_d font-normal mt-7 mb-3">Ссылка на рекламу</h4>
        <input
          v-model="link"
          type="text"
          placeholder="https://www.eapteka.ru/"
          class="p-4 rounded-10 w-full"
          style="border: 1px solid #d6d8dc"
        />
        <div class="flex flex-row w-full justify-end mt-7">
          <div class="form-button">
            <input type="submit" value="Сохранить" :disabled="false" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      file: "",
      status: true,
      link: "",
      new_item: true,
    }
  },
  computed: {
    activeBanner() {
      return this.$route.query.item || 1
    },
  },
  watch: {
    $route: {
      deep: true,
      handler(newData) {
        this.getBanner(newData.query.item)
      },
    },
  },
  created() {
    this.getBanner(this.activeBanner)
  },
  methods: {
    sendForm() {
      const data = {
        name: "Баннер #" + this.activeBanner,
        link_path: this.link,
        image_path: this.file,
        status: this.status,
      }
      if (this.new_item) this.$axios.post("admin/banner", data)
      else this.$axios.put("admin/banner/" + this.activeBanner, data)
    },
    getBanner(id) {
      this.file = ""
      this.status = true
      this.link = ""
      this.new_item = true
      this.$axios.get("admin/banner/" + id).then((res) => {
        this.file = res.data.banner.image_path
        this.status = res.data.banner.status
        this.link = res.data.banner.link_path
        this.new_item = false
      })
    },
    uploadFile(e) {
      console.log(e.target.files[0])
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
    transform: translateY(110%);
    transition: 0.3s;
    background: #39c874;
    border-radius: 10px 10px 0px 0px;
  }
  &.active:after {
    transform: translateY(0%);
  }
}
.drop-bg {
  background: #f9fafc;
  border-radius: 5px;
  max-width: 810px;
}
.withimg {
  height: 331px;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px dashed #d3dce6;
  border-radius: 5px;
}
.form-button {
  width: auto;
  & > input {
    width: 100%;
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
