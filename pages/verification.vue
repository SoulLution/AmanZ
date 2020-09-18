<template>
  <div class="login items-start">
    <div class="content items-start justify-start flex-col">
      <h1 class="content-title">Подтверждение</h1>

      <div class="sign-body justify-end w-full">
        <form class="form">
          <h2 class="form-title">Ждем подтверждения...</h2>
          <div style="margin-bottom: 20px">
            На указанный Вами почтовый адрес отправлено письмо-подтверждение.
            Перейдите по ссылке в письме, чтобы восстановить доступ к аккаунту
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/form.scss";

.sign-body {
  background-image: url("./../static/sign/verification.svg");
  background-repeat: no-repeat;
  background-position: 0 0;
  min-height: 650px;
}
</style>
