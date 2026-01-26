<template>
  <section id="creativity" class="creativity-section">
    <h1 class="section-title">creativity.</h1>
    
    <div class="videos-row">
      <div class="videos-title-section">
        <h2 class="videos-title">Short <br> Films</h2>
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

    <div class="photos-row">
      <div class="photos-title-section">
        <h2 class="photos-title">Photos</h2>
      </div>
      
      <div class="photos-container">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="photo-item"
        >
          <img :src="photo.image" :alt="photo.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videos = ref([
  {
    title: 'Out of Reach',
    thumbnail: '/videos/OutOfReachThumbnail.jpg',
    link: 'https://youtu.be/xIDLjdJncNE'
  },
  {
    title: 'Berrick\'s Cure',
    thumbnail: '/videos/Berrick\'sCureThumbnail.jpg',
    link: 'https://youtu.be/7hEUpT72v-Q'
  },
  {
    title: 'Don\'t Skip Class',
    thumbnail: '/videos/ClassThumbnail.jpg',
    link: 'https://youtu.be/h5e5o-IDkX0'
  },
  {
    title: 'Madison\'s Half-Marathon Journey',
    thumbnail: '/videos/MadisonThumbnail.jpg',
    link: 'https://youtu.be/dG6M8AEzxeU'
  }
])

const photos = ref([
  {
    title: 'Contrasting Leaves',
    image: '/photos/Opposite.jpg'
  },
  {
    title: 'Hexagon',
    image: '/photos/Hexagon.jpg'
  },
  {
    title: 'Car',
    image: '/photos/Practical1.jpg'
  },
  {
    title: 'Wet Leaves',
    image: '/photos/Geometric2.jpg'
  },
  {
    title: 'Warm Temperature',
    image: '/photos/Warm.jpg'
  },
  {
    title: 'Red and Green',
    image: '/photos/RedandGreen.jpg'
  },
  {
    title: 'Light Modeling',
    image: '/photos/Practical2.jpg'
  },
  {
    title: 'Table',
    image: '/photos/Modeling.jpg'
  },
  {
    title: 'Cropped Subject',
    image: '/photos/Cropped.jpg'
  },
])
</script>

<style scoped>
.creativity-section {
  margin-top: 2rem;
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
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.videos-title-section {
  flex-shrink: 0;
  min-width: 200px;
  display: flex;
  align-items: center;
  height: 100%;
}

.videos-title {
  font-size: 3rem;
  font-weight: 300;
  color: #888;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.2;
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

  .photos-row {
    flex-direction: column;
    gap: 2rem;
  }

  .photos-title-section {
    min-width: auto;
  }

  .photos-container {
    width: 100%;
  }

  .photo-item {
    width: 280px;
    height: 210px;
  }
}

.photos-row {
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-top: 4rem;
}

.photos-title-section {
  flex-shrink: 0;
  min-width: 200px;
  display: flex;
  align-items: center;
  height: 100%;
}

.photos-title {
  font-size: 3rem;
  font-weight: 300;
  color: #888;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.2;
}

.photos-container {
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

.photos-container::-webkit-scrollbar {
  height: 8px;
}

.photos-container::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 4px;
}

.photos-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.photos-container::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.photo-item {
  position: relative;
  flex-shrink: 0;
  width: 320px;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: block;
}

.photo-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>