<template>
  <section id="projects" class="projects-section">
    <h1 class="section-title">projects.</h1>
    
    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <h2 class="project-title">{{ project.title }}</h2>
        <div class="tech-stack">
          <span
            v-for="(tech, techIndex) in project.techStack"
            :key="techIndex"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
        <ul class="project-description">
          <li v-for="(point, pointIndex) in project.description" :key="pointIndex">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>

    <div class="tech-skills-section">
      <p class="skills-intro">
        Here is a short summary of all the languages, frameworks, and tools I've used over my personal projects and coursework:
      </p>
      <div class="skills-category">
        <h2 class="category-title">Languages & Frameworks</h2>
        <div class="skills-grid">
          <div
            v-for="(item, index) in languagesAndFrameworks"
            :key="index"
            class="skill-item"
          >
            <img
              :src="`https://skill-icons.dev/icons?i=${item.icon}`"
              :alt="item.name"
              class="skill-icon"
              @error="handleImageError"
            />
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h2 class="category-title">Tools & Technologies</h2>
        <div class="skills-grid">
          <div
            v-for="(item, index) in toolsAndTechnologies"
            :key="index"
            class="skill-item"
          >
            <img
              :src="`https://skill-icons.dev/icons?i=${item.icon}`"
              :alt="item.name"
              class="skill-icon"
              @error="handleImageError"
            />
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const languagesAndFrameworks = ref([
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'ts' },
  { name: 'C++', icon: 'cpp' },
  { name: 'Go', icon: 'go' },
  { name: 'C', icon: 'c' },
  { name: 'Java', icon: 'java' },
  { name: 'React', icon: 'react' },
  { name: 'Vue', icon: 'vue' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'Git', icon: 'git' },
  { name: 'NoSQL', icon: 'nosql' }
])

const toolsAndTechnologies = ref([
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Vercel', icon: 'vercel' },
  { name: 'Netlify', icon: 'netlify' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Vite', icon: 'vite' },
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'Cursor', icon: 'cursor' },
  { name: 'Appwrite', icon: 'appwrite' },
  { name: 'Visual Studio', icon: 'visualstudio' },
  { name: 'Latex', icon: 'latex' },
  { name: 'Jupyter', icon: 'jupyter' },
  { name: 'Spyder', icon: 'spyder' },
  { name: 'Webstorm', icon: 'webstorm' }

])

const projects = ref([
  {
    title: 'FormFixer',
    techStack: ['C++', 'Python', 'PostgreSQL'],
    description: [
      'Description point 1 for project 2',
      'Description point 2 for project 2',
      'Description point 3 for project 2'
    ]
  },
  {
    title: 'Truss Plant Structures Website React conversion',
    techStack: ['React', 'WordPress'],
    description: [
      'Description point 1 for project 2',
      'Description point 2 for project 2',
      'Description point 3 for project 2'
    ]
  },
  {
    title: 'This Website!',
    techStack: ['Vue','Vite', 'Netlify'],
    description: [
      'Description point 1 for project 3',
      'Description point 2 for project 3',
      'Description point 3 for project 3'
    ]
  },
  {
    title: 'PhishSchool (BostonHacks Project)',
    techStack: ['Python', 'React', 'FastAPI', 'Supabase', 'Gemini API', 'Twilio API', 'Node.js', 'Vite', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    description: [
      'Description point 1 for project 4',
      'Description point 2 for project 4',
      'Description point 3 for project 4'
    ]
  },
  {
    title: 'Movie Search Web App',
    techStack: ['React', 'Node.js', 'Vite', 'Next.js', 'TypeScript', 'TailwindCSS', 'Docker', 'Vercel', 'NoSQL'],
    description: [
      'Developed a dynamic movie searching platform using React, Vite, Next.js, JavaScript, TypeScript, and Tailwind CSS to deliver instant search results and display trending titles with smooth UI responsiveness.',
      'Integrated The Movie Database Rest API to fetch live movie data and an Appwrite Database using NoSQL to store and track user search histories, implementing search debouncing for optimized performance.',
      'Containerized the application with Docker to ensure environment consistency and scalability across deployments.',
      'Deployed on Vercel, achieving a seamless, production-ready, and mobile-responsive web experience.'
    ]
  }
])

const handleImageError = (event) => {
  // Fallback if logo fails to load
  event.target.style.display = 'none'
}
</script>

<style scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
}

.project-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 1rem 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: #f0f0f0;
  color: #555;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-description {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #555;
  text-align: left;
}

.project-description li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #222;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.tech-skills-section {
  margin-top: 6rem;
  max-width: 1200px;
}

.skills-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 3rem;
  max-width: 1200px;
}

.skills-category {
  margin-bottom: 4rem;
  max-width: 1200px;
}

.category-title {
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 2rem;
  text-transform: capitalize;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.skill-name {
  font-size: 0.9rem;
  color: #555;
  text-align: center;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-name {
    font-size: 0.8rem;
  }
}
</style>

