<template>
  <header>
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
header {
  margin-top: 16px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c9c9c9;
  min-height: 56px;
  border-radius: 8px;
}

nav a {
  color: #222;
  text-decoration: none;
  padding: 18px 24px;
  font-weight: bold;
}

nav a:hover,
nav a.router-link-exact-active {
  background: #a9a9a9;
}
</style>