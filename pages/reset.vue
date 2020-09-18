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
          <div style="margin-bottom: 20px">
            Вы сможете сбросить пароль, перейдя по ссылке в письме
          </div>
          <label class="form-label">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.61274 5.99587C2.78141 6.11489 3.28982 6.46838 4.13802 7.05615C4.98624 7.64392 5.63604 8.09649 6.08743 8.41389C6.13703 8.44868 6.24239 8.52431 6.40358 8.64087C6.56479 8.75752 6.69874 8.85178 6.80533 8.92369C6.91199 8.99556 7.04094 9.07619 7.1923 9.16545C7.34361 9.25463 7.48624 9.32171 7.62017 9.36612C7.75412 9.41089 7.87811 9.43307 7.99218 9.43307H7.99966H8.00717C8.12123 9.43307 8.24528 9.41086 8.37923 9.36612C8.51311 9.32171 8.65587 9.25455 8.80705 9.16545C8.9583 9.07609 9.08725 8.99553 9.19392 8.92369C9.30058 8.85178 9.43443 8.75752 9.59569 8.64087C9.75685 8.5242 9.86235 8.44868 9.91194 8.41389C10.3682 8.09649 11.529 7.29041 13.394 5.99572C13.7561 5.74285 14.0586 5.43773 14.3016 5.08057C14.5448 4.72357 14.6663 4.34905 14.6663 3.95723C14.6663 3.6298 14.5484 3.34952 14.3128 3.11641C14.0772 2.88324 13.7981 2.76672 13.4758 2.76672H2.52343C2.14151 2.76672 1.8476 2.89567 1.64175 3.15357C1.43592 3.41152 1.33301 3.73394 1.33301 4.12081C1.33301 4.4333 1.46946 4.77194 1.74224 5.1365C2.01499 5.50109 2.30525 5.78757 2.61274 5.99587Z"
                fill="inherit"
              />
              <path
                d="M13.9222 6.79195C12.2954 7.89304 11.0601 8.74876 10.217 9.35895C9.93422 9.5672 9.70486 9.72976 9.52872 9.84626C9.35257 9.96283 9.11832 10.0819 8.8256 10.2033C8.53299 10.325 8.26029 10.3856 8.00727 10.3856H7.99969H7.99221C7.73924 10.3856 7.46638 10.325 7.17377 10.2033C6.88116 10.0819 6.64675 9.96283 6.47066 9.84626C6.29462 9.72976 6.06518 9.5672 5.78247 9.35895C5.11279 8.86791 3.88018 8.01213 2.08457 6.79195C1.80176 6.60358 1.55127 6.38767 1.33301 6.14465V12.0522C1.33301 12.3798 1.44953 12.6599 1.68269 12.8931C1.9158 13.1263 2.19611 13.2428 2.52351 13.2428H13.4759C13.8032 13.2428 14.0835 13.1263 14.3167 12.8931C14.5499 12.6598 14.6663 12.3798 14.6663 12.0522V6.14465C14.453 6.38264 14.2051 6.59855 13.9222 6.79195Z"
                fill="inherit"
              />
            </svg>
            <input
              v-model="data.email"
              type="email"
              placeholder="E-mail"
              name="email"
              required
            />
          </label>
          <div class="form-button">
            <input
              type="submit"
              value="Сбросить пароль"
              :disabled="data.email.length < 5"
            />
          </div>
          <div class="form-link">
            <nuxt-link to="/login"> Отмена </nuxt-link>
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
        email: "",
      },
      error: "",
    }
  },
  methods: {
    sendForm() {
      this.error = ""
      this.$axios
        .get("/forgot_password?email=" + this.data.email)
        .then(() => {
          this.$router.push("/verification")
        })
        .catch((err) => {
          this.error = "Неверный логин"
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
.form {
  padding: 2.5rem 4rem;
}
.form-label {
  margin-bottom: 100px;
}
</style>
