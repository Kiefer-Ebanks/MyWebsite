<script setup>
import Navbar from "./components/Navbar.vue"
import About from "./components/About.vue"
</script>

<template>
  <Navbar />
  <main>
    <About />
    <PhotoStrip />
  </main>
</template>


<style>
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  color: #222;
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
}
</style>
