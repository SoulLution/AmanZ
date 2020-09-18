<template>
  <div class="login items-start">
    <div class="content items-start justify-start flex-col">
      <h1 class="content-title">Создание аккаунта</h1>

      <div class="sign-body justify-start w-full">
        <form class="form" @submit.prevent="sendForm">
          <h2 class="form-title">Регистрация</h2>
          <h6 class="form-error">
            {{ error }}
          </h6>
          <label class="form-label">
            <input
              v-model="data.surname"
              type="text"
              placeholder="Фамилия"
              required
            />
          </label>
          <label class="form-label">
            <input
              v-model="data.given_name"
              type="text"
              placeholder="Имя"
              name="firstname"
              required
            />
          </label>
          <label class="form-label">
            <input
              v-model="data.email"
              type="email"
              placeholder="E-mail"
              name="email"
              required
            />
          </label>
          <label class="form-label">
            <svg />
            <input
              v-model="data.password"
              :type="show_pass ? 'text' : 'password'"
              minlength="8"
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
          <span>Пароль должен содержать не менее 6 символов</span>
          <label class="form-label">
            <svg />
            <input
              v-model="data.re_enter_password"
              :type="show_re_pass ? 'text' : 'password'"
              placeholder="Повторите пароль"
              name="password"
              required
            />
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="show_re_pass = !show_re_pass"
            >
              <path
                v-if="!show_re_pass"
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
          <label class="form-label">
            <input
              v-model="data.phone_number"
              v-mask="'+7 (###) ###-####'"
              type="tel"
              placeholder="Сотовый номер"
              name="phone"
              required
            />
          </label>
          <div class="form-button">
            <input
              type="submit"
              value="Зарегистрироваться"
              :disabled="validate"
            />
          </div>
          <div class="form-link justify-start">
            <span>Есть аккаунт?</span>
            <nuxt-link to="/login"> Войти </nuxt-link>
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
        surname: "",
        given_name: "",
        email: "",
        phone_number: "",
        password: "",
        re_enter_password: "",
      },
      show_pass: false,
      show_re_pass: false,
      error: "",
    }
  },
  computed: {
    validate() {
      return (
        this.data.surname.length < 2 ||
        this.data.given_name.length < 2 ||
        this.data.email.length < 5 ||
        this.data.phone_number.length < 10 ||
        this.data.password.length < 7 ||
        this.data.password !== this.data.re_enter_password
      )
    },
  },
  methods: {
    sendForm() {
      this.error = ""
      this.$axios
        .post("/registration", this.data)
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
  background-image: url("./../static/sign/registrate.svg");
  background-repeat: no-repeat;
  background-position: 100% 0;
  min-height: 650px;
}
input {
  padding-left: 1rem !important;
}
</style>
