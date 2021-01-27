<template>
  <div class="page items-start">
    <div
      class="bg-gray_d flex flex-col fixed top-0 left-0 h-screen w-1/6 py-7 justify-start mb-10"
    >
      <nuxt-link to="/"><img src="/logo.png" alt="" /></nuxt-link>
      <nav class="flex flex-col w-full mt-10">
        <nuxt-link class="nav-item" to="/admin/banner">
          <svg
            width="24"
            style="min-width: 24px; min-height: 24px"
            height="24"
            viewBox="0 0 24 24"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M21 1H3C1.346 1 0 2.346 0 4V20C0 21.654 1.346 23 3 23H21C22.654 23 24 21.654 24 20V4C24 2.346 22.654 1 21 1ZM22 20C22 20.552 21.551 21 21 21H3C2.449 21 2 20.552 2 20V6H22V20Z"
                fill="inherit"
              />
              <path
                d="M14 17H13.25C12.836 17 12.5 16.664 12.5 16.25V11.75C12.5 11.336 12.836 11 13.25 11H14C15.654 11 17 12.346 17 14C17 15.654 15.654 17 14 17ZM14 12.5V15.5C14.827 15.5 15.5 14.827 15.5 14C15.5 13.173 14.827 12.5 14 12.5Z"
                fill="inherit"
              />
              <path
                d="M10.25 17C9.83596 17 9.49996 16.664 9.49996 16.25V13C9.49996 12.724 9.27597 12.5 8.99997 12.5C8.72397 12.5 8.49997 12.724 8.49997 13V16.25C8.49997 16.664 8.16397 17 7.74997 17C7.33597 17 6.99997 16.664 6.99997 16.25V13C6.99997 11.897 7.89697 11 8.99997 11C10.103 11 11 11.897 11 13V16.25C11 16.664 10.664 17 10.25 17Z"
                fill="inherit"
              />
              <path
                d="M10.25 15.5H7.74997C7.33597 15.5 6.99997 15.164 6.99997 14.75C6.99997 14.336 7.33597 14 7.74997 14H10.25C10.664 14 11 14.336 11 14.75C11 15.164 10.664 15.5 10.25 15.5Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Баннеры</span>
        </nuxt-link>
        <nuxt-link class="nav-item" to="/admin/products">
          <svg
            width="24"
            style="min-width: 24px; min-height: 24px"
            height="24"
            viewBox="0 0 24 24"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M16.12 1.92899L5.22902 7.50499L0.900024 5.37499L11.599 0.0919883C11.839 -0.0300117 12.127 -0.0300117 12.379 0.0919883L16.12 1.92899Z"
                fill="inherit"
              />
              <path
                d="M23.088 5.37494L12.006 10.8649L7.85598 8.81995L7.25598 8.51495L18.159 2.93994L18.759 3.24394L23.088 5.37494Z"
                fill="inherit"
              />
              <path
                d="M11.118 12.447L11.106 24L0.492 18.461C0.192 18.303 0 17.986 0 17.645V6.95703L4.498 9.17303V13.069C4.498 13.568 4.906 13.982 5.398 13.982C5.89 13.982 6.298 13.568 6.298 13.069V10.074L6.898 10.366L11.118 12.447Z"
                fill="inherit"
              />
              <path
                d="M23.988 6.96899L12.918 12.435L12.906 23.988L24 18.195L23.988 6.96899Z"
                fill="inherit"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span>Товары</span>
        </nuxt-link>
        <nuxt-link class="nav-item" to="/admin/categories">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="inherit"
            style="min-width: 24px; min-height: 24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              transform="translate(0 0.5)"
              fill="transparent"
            />
            <rect x="2" y="2.5" width="9" height="9" rx="2" fill="inherit" />
            <rect x="13" y="2.5" width="9" height="9" rx="2" fill="inherit" />
            <rect x="2" y="13.5" width="9" height="9" rx="2" fill="inherit" />
            <rect x="13" y="13.5" width="9" height="9" rx="2" fill="inherit" />
          </svg>

          <span>Категории</span>
        </nuxt-link>
      </nav>
    </div>
    <div class="flex flex-col w-5/6">
      <div class="flex flex-row justify-end w-full py-7 px-17">
        <div class="flex justify-center items-center ava mr-2">
          <!-- <img src="" alt="AE" /> -->
          <span class="text-lg font-medium">AE</span>
        </div>
        <div class="flex flex-col items-start mr-4">
          <span class="text-gray_d">Аманжол Ергали</span>
          <span class="text-14" style="color: #828282">Admonistrator</span>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="19"
            r="2"
            transform="rotate(-90 12 19)"
            fill="#0B0556"
          />
          <circle
            cx="12"
            cy="12"
            r="2"
            transform="rotate(-90 12 12)"
            fill="#0B0556"
          />
          <circle
            cx="12"
            cy="5"
            r="2"
            transform="rotate(-90 12 5)"
            fill="#0B0556"
          />
        </svg>
      </div>
      <nuxt class="z-0 py-8 min-h-screen" />
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.page {
  flex-direction: row;
  min-height: 100vh;
  justify-content: flex-end;
}
.w-1\/6 {
  width: 16.666667% !important;
}
.w-5\/6 {
  width: 83.333333% !important;
}
.ava {
  max-width: 44px;
  max-height: 44px;
  min-width: 44px;
  min-height: 44px;
  background: #0b0556;
  border-radius: 50%;
  color: white;
}
.nav-item {
  display: flex;
  justify-content: flex-start;
  padding: 1rem 2rem;
  color: white;
  width: 100%;
  fill: currentColor;
  & > svg {
    margin-right: 1rem;
  }
  &:hover {
    background: #9fa2b408;
  }
  &.nuxt-link-active {
    color: #39c874;
    background: #9fa2b410;
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
