<template>
  <header class="navbar">
    <a href="#about" @click="scrollToSection" class="name">Kiefer Ebanks</a>
    <nav class="nav-links">
      <a href="#about" @click="scrollToSection">About</a>
      <a href="#experience" @click="scrollToSection">Experience</a>
      <a href="#projects" @click="scrollToSection">Projects</a>
      <a href="#resume" @click="scrollToSection">Resume</a>
      <a href="#creativity" @click="scrollToSection">Creativity</a>
      <a href="#contact" @click="scrollToSection">Contact</a>
    </nav>
  </header>
</template>

<script setup>
const scrollToSection = (event) => {
  event.preventDefault()
  const targetId = event.target.getAttribute('href').substring(1)
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 15rem;
  z-index: 100;
  box-sizing: border-box;
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.name:hover {
  opacity: 0.8;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
}

.nav-links a {
  color: #aaa;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }
  
  .name {
    font-size: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .nav-links a {
    font-size: 0.85rem;
  }
}
</style>
