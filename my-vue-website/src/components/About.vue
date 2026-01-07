<template>
  <section id="about" class="about-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h1>{{ currentContent.title }}.</h1>
        <h2>{{ currentContent.subtitle }}</h2>
        <p>{{ currentContent.paragraph }}</p>
      </div>

      <div class="image-content">
        <img :src="currentContent.mainImage" :alt="currentContent.title" />
      </div>
    </div>

    <div class="divider"></div>

    <div class="thumbnail-row">
      <div
        v-for="(item, index) in contentItems"
        :key="index"
        class="thumbnail"
        :class="{ active: index === activeIndex }"
        @click="selectContent(index)"
      >
        <img :src="item.thumbnail" :alt="item.title" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref(0)

const contentItems = ref([
  {
    title: 'about me',
    subtitle: 'I\'m a Junior Computer Science major at Boston University',
    paragraph: 'As an aspiring software engineer, I\’m especially interested in web development and distributed systems - though I have experience in IT as well. I\’m also creative at heart, which is why I have a minor in Film & Television. Storytelling, visuals, and design all influence how I approach all my projects, CS and film alike. In my free time, I\’m working toward becoming fluent in Spanish and trying to improve my drawing ability.',
    mainImage: '/MePic.jpg',
    thumbnail: '/MePic.jpg'
  },
  {
    title: 'Fitness',
    subtitle: 'Here is a photo of my friends and I running a half-marathon!',
    paragraph: 'I LOVE lifting weights and setting new PRs (I\'m currently chasing the fated 225 Bench). This year I\'m also doing boxing classes, which is a cool way to shake things up and learn a new skill. I\'m also considering running a full marathon this year (but that still sounds a little crazy right now)',
    mainImage: '/CameraPic.jpg',
    thumbnail: '/CameraPic.jpg'
  },
  {
    title: 'Home',
    subtitle: 'I am lucky enough to call the Cayman Islands home!',
    paragraph: 'Cayman is where my family is, and where island life brings a pace and warmth that’s hard to replicate anywhere else. I love the beach, going to my grandma\s house on Sundays, and watching fireworks light up the entire coastline on New Year\'s Eve',
    mainImage: '/MePic.jpg',
    thumbnail: '/MePic.jpg'
  },
  {
    title: 'Film',
    subtitle: 'I’m a big fan of watching, creating, reviewing, and talking about movies',
    paragraph: 'Film is where I get to lean fully into creativity. I love breaking down scenes, themes, and the little details that make films memorable. I also enjoy making short films and drafting up stories I hope to turn into real projects one day! Check out some of my work under the creativity tab!',
    mainImage: '/MePic.jpg',
    thumbnail: '/MePic.jpg'
  },
  {
    title: 'Future',
    subtitle: 'Here are some of my goals for 2026',
    paragraph: 'Read 3 new books (yes I know its a low number, lack of time :( ), bench 225 (current max 205), write a short story, gain more experience in my field and keep learning',
    mainImage: '/MePic.jpg',
    thumbnail: '/MePic.jpg'
  }
])

const currentContent = computed(() => contentItems.value[activeIndex.value])

const selectContent = (index) => {
  activeIndex.value = index
}
</script>

<style scoped>
.about-section {
  margin-top: 0rem;
  padding: 2rem 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 3rem;
}

.text-content h1 {
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;
  text-transform: lowercase;
  letter-spacing: -0.02em;
}

.text-content h2 {
  font-weight: 400;
  font-size: 1.25rem;
  color: #666;
  max-width: 420px;
  margin-bottom: 0;
  line-height: 1.5;
}

.text-content p {
  margin-top: 2rem;
  line-height: 1.7;
  color: #555;
  max-width: 500px;
  font-size: 1rem;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-content img {
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 20px;
}

.divider {
  width: 80%;
  max-width: 800px;
  height: 1px;
  background: #e0e0e0;
  margin: 3rem auto 2rem;
}

.thumbnail-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}

.thumbnail {
  width: 140px;
  height: 100px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  border: none;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.thumbnail:hover {
  opacity: 0.8;
}

.thumbnail.active {
  opacity: 1;
}

.thumbnail:not(.active) {
  opacity: 0.7;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .text-content h1 {
    font-size: 3rem;
  }

  .thumbnail {
    width: 100px;
    height: 75px;
  }
}
</style>
