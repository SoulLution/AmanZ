<template>
  <div class="login items-start">
    <div class="content items-start justify-start flex-col">
      <h1 class="content-title">Восстановить пароль</h1>

      <div class="sign-body justify-end w-full">
        <form class="form" @submit.prevent="sendForm">
          <h2 class="form-title">Восстановление пароля</h2>
          <h6 class="form-error">
            {{ error }}
          </h6>
          <h6 style="margin-bottom: 20px">Введите новый пароль</h6>
          <label class="form-label">
            <input
              v-model="data.password"
              type="password"
              placeholder="Новый
            пароль"
              name="password"
              required
            />
          </label>
          <label class="form-label">
            <input
              v-model="data.re_enter_password"
              type="password"
              placeholder="Повторите пароль"
              name="re_enter_password"
              required
            />
          </label>
          <div class="form-button">
            <input
              type="submit"
              value="Войти"
              :disabled="
                data.re_enter_password.length < 7 || data.password.length < 7
              "
            />
          </div>
          <div class="form-link">
            <nuxt-link to="/"> Отмена </nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        password: "",
        re_enter_password: "",
      },
      error: "",
    }
  },
  methods: {
    sendForm() {
      this.error = ""
      this.$axios
        .post("/reset", this.data)
        .then(() => {
          this.$router.push("/")
        })
        .catch((err) => {
          this.error = "Пароли не совпадают"
          this.data.re_enter_password = ""
          new Error(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/form.scss";

.sign-body {
  background-image: url("./../static/sign/login.svg");
  background-repeat: no-repeat;
  background-position: 0 0;
  min-height: 650px;
}
input {
  padding-left: 1rem !important;
}
</style>
