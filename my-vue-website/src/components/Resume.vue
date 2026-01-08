<template>
  <section id="resume" class="resume-section">
    <h1 class="section-title">resume.</h1>
    
    <div class="resume-wrapper">
      <embed
        :src="resumePath"
        type="application/pdf"
        class="resume-embed"
        title="Resume"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const resumePath = ref('/Kiefer_Ebanks_Resume.pdf')
</script>

<style scoped>
.resume-section {
  margin-top: 6rem;
  padding: 2rem 0;
}

.section-title {
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #222;
  text-transform: lowercase;
  letter-spacing: -0.02em;
}

.resume-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.resume-embed {
  width: 100%;
  max-width: 900px;
  height: 1200px;
  border: none;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .resume-embed {
    height: 800px;
  }
}
</style>

