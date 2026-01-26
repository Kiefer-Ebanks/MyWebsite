<script setup>
import Navbar from "./components/Navbar.vue"
import About from "./components/About.vue"
import Experience from "./components/Experience.vue"
import Projects from "./components/Projects.vue"
import Resume from "./components/Resume.vue"
import Creativity from "./components/Creativity.vue"
import Contact from "./components/Contact.vue"
</script>

<template>
  <Navbar />
  <main>
    <About />
    <Experience />
    <Projects />
    <Resume />
     <Creativity />
    <Contact />
  </main>
</template>


<style>
html {
  overflow-x: hidden;
  width: 100%;
}

body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  color: #222;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  min-width: 0;
}
</style>
