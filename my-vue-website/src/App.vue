<script setup>
import Navbar from "./components/Navbar.vue"
import About from "./components/About.vue"
import Experience from "./components/Experience.vue"
import Projects from "./components/Projects.vue"
import Resume from "./components/Resume.vue"
</script>

<template>
  <Navbar />
  <main>
    <About />
    <Experience />
    <Projects />
    <Resume />
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
