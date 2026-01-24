<template>
  <section id="creativity" class="creativity-section">
    <h1 class="section-title">creativity.</h1>
    
    <div class="videos-row">
      <div class="videos-title-section">
        <h2 class="videos-title">Short Films</h2>
      </div>
      
      <div class="videos-container">
        <a
          v-for="(video, index) in videos"
          :key="index"
          :href="video.link"
          target="_blank"
          class="video-thumbnail"
        >
          <img :src="video.thumbnail" :alt="video.title" />
          <div class="video-overlay">
            <span class="play-icon">▶</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videos = ref([
  {
    title: 'Video 1',
    thumbnail: 'https://via.placeholder.com/320x180?text=Video+1',
    link: 'https://www.youtube.com'
  },
  {
    title: 'Video 2',
    thumbnail: 'https://via.placeholder.com/320x180?text=Video+2',
    link: 'https://www.youtube.com'
  },
  {
    title: 'Video 3',
    thumbnail: 'https://via.placeholder.com/320x180?text=Video+3',
    link: 'https://www.youtube.com'
  },
  {
    title: 'Video 4',
    thumbnail: 'https://via.placeholder.com/320x180?text=Video+4',
    link: 'https://www.youtube.com'
  },
  {
    title: 'Video 5',
    thumbnail: 'https://via.placeholder.com/320x180?text=Video+5',
    link: 'https://www.youtube.com'
  }
])
</script>

<style scoped>
.creativity-section {
  margin-top: 6rem;
  padding: 2rem 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.section-title {
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #222;
  text-transform: lowercase;
  letter-spacing: -0.02em;
}

.videos-row {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.videos-title-section {
  flex-shrink: 0;
  min-width: 200px;
}

.videos-title {
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  text-transform: capitalize;
}

.videos-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.5rem 0;
  flex: 1;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  width: 0;
}

.videos-container::-webkit-scrollbar {
  height: 8px;
}

.videos-container::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.videos-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.videos-container::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.video-thumbnail {
  position: relative;
  flex-shrink: 0;
  width: 320px;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
}

.video-thumbnail:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-thumbnail:hover .video-overlay {
  opacity: 1;
}

.play-icon {
  font-size: 3rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .videos-row {
    flex-direction: column;
    gap: 2rem;
  }

  .videos-title-section {
    min-width: auto;
  }

  .videos-container {
    width: 100%;
  }

  .video-thumbnail {
    width: 280px;
    height: 157.5px;
  }
}
</style>

