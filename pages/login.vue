<template>
  <div class="login items-start">
    <div class="content items-start justify-start flex-col">
      <h1 class="hidden sm:flex content-title">Вход в личный кабинет</h1>

      <div class="sign-body justify-end w-full">
        <form class="form" @submit.prevent="sendForm">
          <h2 class="hidden sm:flex form-title">Добро пожаловать!</h2>
          <h6 class="form-error">
            {{ error }}
          </h6>
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
          <label class="form-label">
            <svg
              width="16"
              height="16"
              viewBox="0 0 17 16"
              fill="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.49935 1C6.34544 1 4.59935 2.74609 4.59935 4.9V6.63391C4.4291 6.66019 4.27964 6.69675 4.13995 6.74759C3.30666 7.05088 2.65023 7.70731 2.34694 8.5406C2.16602 9.03768 2.16602 9.65846 2.16602 10.9C2.16602 12.1415 2.16602 12.7623 2.34694 13.2594C2.65023 14.0927 3.30666 14.7491 4.13995 15.0524C4.63703 15.2333 5.2578 15.2333 6.49933 15.2333H6.49935H10.4993C11.7409 15.2333 12.3617 15.2333 12.8587 15.0524C13.692 14.7491 14.3485 14.0927 14.6518 13.2594C14.8327 12.7623 14.8327 12.1415 14.8327 10.9C14.8327 9.65846 14.8327 9.03768 14.6518 8.5406C14.3485 7.70731 13.692 7.05088 12.8587 6.74759C12.7191 6.69675 12.5696 6.66019 12.3993 6.63391V4.9C12.3993 2.74609 10.6533 1 8.49935 1ZM10.5993 6.56667V4.9C10.5993 3.7402 9.65915 2.8 8.49935 2.8C7.33955 2.8 6.39935 3.7402 6.39935 4.9V6.56667L6.49935 6.56667H10.4993L10.5993 6.56667ZM9.16602 11.3883C9.56455 11.1578 9.83268 10.7269 9.83268 10.2333C9.83268 9.49695 9.23573 8.9 8.49935 8.9C7.76297 8.9 7.16602 9.49695 7.16602 10.2333C7.16602 10.7269 7.43415 11.1578 7.83268 11.3883V12.5667C7.83268 12.9349 8.13116 13.2333 8.49935 13.2333C8.86754 13.2333 9.16602 12.9349 9.16602 12.5667V11.3883Z"
                fill="inherit"
              />
            </svg>
            <input
              v-model="data.password"
              :type="show_pass ? 'text' : 'password'"
              placeholder="Пароль"
              name="password"
              required
            />
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="show_pass = !show_pass"
            >
              <path
                v-if="!show_pass"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 11.75C6.56271 11.75 4.50451 10.5827 2.87694 8C4.50451 5.41731 6.56271 4.25 8.5 4.25C10.4373 4.25 12.4955 5.41731 14.1231 8C12.4955 10.5827 10.4373 11.75 8.5 11.75ZM15.6478 7.6221C13.8086 4.46908 11.2206 2.75 8.5 2.75C5.77937 2.75 3.19142 4.46908 1.35217 7.62209C1.21594 7.85562 1.21594 8.14438 1.35217 8.3779C3.19142 11.5309 5.77937 13.25 8.5 13.25C11.2206 13.25 13.8086 11.5309 15.6478 8.3779C15.7841 8.14438 15.7841 7.85562 15.6478 7.6221ZM8.5 11C10.1569 11 11.5 9.65685 11.5 8C11.5 6.34315 10.1569 5 8.5 5C6.84315 5 5.5 6.34315 5.5 8C5.5 9.65685 6.84315 11 8.5 11Z"
                fill="#D6D8DC"
              />
              <path
                v-else
                d="M2 5.5C2.52887 6.28109 3.10431 6.9477 3.71251 7.5M15 5.5C14.4712 6.28105 13.8959 6.94771 13.2877 7.5M13.2877 7.5L15 9.23429M13.2877 7.5C12.3546 8.34737 11.3442 8.92546 10.3056 9.23429M3.71251 7.5L2 9.23429M3.71251 7.5C4.64563 8.34736 5.65608 8.92546 6.69472 9.23429M10.3056 9.23429L11.0278 11.5M10.3056 9.23429C9.11431 9.58851 7.88598 9.5885 6.69472 9.23429M6.69472 9.23429L5.97222 11.5"
                stroke="#D6D8DC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <div class="form-check">
            <input
              id="remember"
              v-model="data.remember"
              type="checkbox"
              class="hidden"
            />
            <label for="remember" class="checkbox"></label>
            <label for="remember">Запомнить меня</label>
          </div>
          <div class="form-link justify-end">
            <nuxt-link to="/reset"> Забыли пароль? </nuxt-link>
          </div>
          <div class="form-button">
            <input
              type="submit"
              value="Войти"
              :disabled="data.email.length < 5 || data.password.length < 5"
            />
          </div>
          <div class="form-link justify-start">
            <span>Нет аккаунта?</span>
            <nuxt-link to="/registrate"> Зарегистрироваться </nuxt-link>
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
        password: "",
        remember: false,
      },
      show_pass: false,
      error: "",
    }
  },
  methods: {
    sendForm() {
      this.error = ""
      this.$axios
        .post("/signin", this.data, {
          withCredentials: true,
        })
        .then(() => {
          this.$router.go(-1)
        })
        .catch((err) => {
          this.error = "Неверный логин и/или пароль"
          this.data.password = ""
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
</style>
