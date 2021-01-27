<template>
  <div class="w-full px-4 flex items-start">
    <div
      class="bannerlist w-full flex flex-col justify-start bg-white rounded-40"
    >
      <div
        class="banner-header w-full flex flex-col-reverse items-start justify-between px-4 text-gray_d p-7"
      >
        <h1 class="m-0 font-medium">
          {{
            checkRoute
              ? "Добавление новой подкатегории"
              : "Изменение подкатегории"
          }}
        </h1>
        <nuxt-link
          to="/admin/subcategories"
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
        class="flex flex-col items-center justify-start w-full p-7 border-b-4 border-grey_4"
      >
        <div class="flex flex-col ml-13 items-center w-full">
          <v-multiselect
            v-model="category_id"
            class="w-full mb-6 leading-6 rounded-md border border-transparent cursor-pointer whitespace-no-wrap"
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
        <div class="flex flex-col ml-13 items-center w-full">
          <span
            class="mb-3 text-left w-full"
            style="color: #b7b8be; max-width: 355px"
          >
            Наименование подкатегории
          </span>
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
      category_id: { name: "Выберите категорию" },
      name: "",
      categoryes: [],
    }
  },
  computed: {
    checkRoute() {
      return isNaN(parseInt(this.$route.params.id))
    },
  },
  created() {
    this.$axios.get("admin/category").then((res) => {
      this.categoryes = res.data.category
    })
    this.getItem()
  },
  methods: {
    getItem() {
      if (this.checkRoute) {
        this.category_id = { name: "Выберите категорию" }
        this.name = ""
      } else
        this.$axios.get("admin/subcategory").then((res) => {
          const item = res.data.category.find(
            (x) => x.id == this.$route.params.id
          )
          this.category_id = this.categoryes.find(
            (x) => x.id == item.category_id
          )
          console.log(item)
          this.name = item.name
        })
    },
    sendForm() {
      const data = {
        name: this.name,
        category_id: this.category_id.id,
      }
      if (this.checkRoute)
        this.$axios.post("/admin/subcategory", data).then(() => {
          this.$router.go(-1)
        })
      else
        this.$axios
          .put("/admin/subcategory/" + this.$route.params.id, data)
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
</style>
