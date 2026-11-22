<template>
  <div class="page">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue"
import FooterComponent from "@/components/Footer.vue"

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #ffffff;
  color: #222;
}

.page {
  width: min(92%, 760px);
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 18px 0;
}
</style>