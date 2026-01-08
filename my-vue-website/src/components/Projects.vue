<template>
  <section id="projects" class="projects-section">
    <h1 class="section-title">projects.</h1>
    
    <div class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <div class="project-card-content">
          <h2 class="project-title">
            <a :href="project.link" :target="project.link ? '_blank' : '_self'" class="project-link" v-html="project.title"></a>
          </h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="tech-stack">
            <span
              v-for="(tech, techIndex) in project.techStack"
              :key="techIndex"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        <div class="project-date-bar">
          <span class="project-date">{{ project.date }}</span>
        </div>
      </div>
    </div>

    <div class="tech-skills-section">
      <p class="skills-intro">
        Here is a short summary of all the languages, frameworks, and tools I've used over my personal projects and coursework:
      </p>
      <div class="skills-card">
        <h2 class="category-title">Languages & Frameworks</h2>
        <div class="skills-grid">
          <div
            v-for="(item, index) in languagesAndFrameworks"
            :key="index"
            class="skill-item"
          >
            <img
              :src="getDeviconUrl(item.icon)"
              :alt="item.name"
              class="skill-icon"
              @error="handleImageError"
            />
            <span class="skill-name">{{ item.name }}</span>
          </div>
        </div>
      </div>

      <div class="skills-card">
        <h2 class="category-title">Tools & Technologies</h2>
        <div class="skills-grid">
          <div
            v-for="(item, index) in toolsAndTechnologies"
            :key="index"
            class="skill-item"
          >
            <img
              :src="getDeviconUrl(item.icon)"
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
    techStack: ['C++', 'Go', 'OpenCV'],
    description: 'Built a real-time workout analysis system that monitors a user’s movements during gym exercises and evaluates form accuracy as the workout is performed. The application provides immediate feedback to help users correct technique and reduce injury risk.',
    date: 'Jan 2026 - Present',
    link: ''
  },
  {
    title: 'TPS Website<br>React Conversion',
    techStack: ['React', 'WordPress'],
    description: 'Redesigned the Truss Plant Structures business website in React, transforming it from a static, template-based layout into a modern, interactive experience. This improved user experience and client engagement through clearer content structure, intuitive navigation, and engaging visual elements. The new site includes interactive 3D components and integrated email functionality for quicker communication.',
    date: 'Dec 2025 - Jan 2026',
    link: 'https://trussplant.ky/'
  },
  {
    title: 'This Website',
    techStack: ['Vue','Vite', 'Netlify', 'CSS'],
    description: 'A personal portfolio showcasing my projects, skills, and interests. Built as a space to explore my work and the ideas I enjoy building.',
    date: 'Jan 2026',
    link: ''
  },
  {
    title: 'PhishSchool<br>(BostonHacks 2025)',
    techStack: ['Python', 'React', 'FastAPI', 'Supabase', 'Gemini API', 'Twilio API', 'Node.js', 'Vite', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    description: 'Developed a full-stack phishing detection and cybersecurity training platform that helps users identify and defend against real-world phishing attacks. The app analyzes suspicious messages and emails using AI-powered detection, and provides interactive training tools for learning. Users can practice through guided lessons, simulated phishing campaigns, and automated feedback.',
    date: 'Oct 2025',
    link: 'https://phish-school.vercel.app/'
  },
  {
    title: 'Movie Search Web App',
    techStack: ['React', 'TailwindCSS', 'Docker', 'Node.js', 'Vite', 'Next.js', 'TypeScript', 'Vercel', 'NoSQL'],
    description: 'Built a dynamic movie discovery platform that allows users to search for films in real time, explore trending titles, and enjoy a smooth, responsive browsing experience. The application fetches live movie data, tracks user search history for improved usability, and optimizes usability through fuzzy and debounced search handling. The platform delivers a fast, mobile-friendly experience across devices.',
    date: 'Aug 2025',
    link: 'https://project-website-final.vercel.app/'
  }
])

const getDeviconUrl = (iconName) => {
  // Special cases for custom icons
  if (iconName === 'spyder') {
    return 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Spyder_logo_2021.svg'
  }
  if (iconName === 'cursor') {
    return '/Cursor.svg'
  }
  if (iconName === 'nosql') {
    return '/nosql.png'
  }
  
  // Map icon names to devicons naming conventions
  const iconMap = {
    'js': 'javascript',
    'ts': 'typescript',
    'cpp': 'cplusplus',
    'tailwind': 'tailwindcss',
    'html': 'html5',
    'css': 'css3',
    'nodejs': 'nodejs',
    'nextjs': 'nextjs',
    'vue': 'vuejs',
    'react': 'react',
    'python': 'python',
    'go': 'go',
    'c': 'c',
    'java': 'java',
    'git': 'git',
    'fastapi': 'fastapi',
    'linux': 'linux',
    'supabase': 'supabase',
    'vercel': 'vercel',
    'netlify': 'netlify',
    'docker': 'docker',
    'github': 'github',
    'vite': 'vitejs',
    'wordpress': 'wordpress',
    'appwrite': 'appwrite',
    'visualstudio': 'vscode',
    'latex': 'latex',
    'jupyter': 'jupyter',
    'webstorm': 'webstorm'
  }
  
  const deviconName = iconMap[iconName] || iconName
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-original.svg`
}

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
  padding: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  text-align: left;
}

.project-link {
  color: #222;
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #555;
  text-decoration: underline;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0;
  justify-content: left;
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
  margin: 0 0 1.5rem 0;
  padding: 0;
  line-height: 1.7;
  color: #555;
  text-align: left;
  font-size: 1rem;
}

.project-card-content {
  padding: 2rem;
  flex: 1;
}

.project-date-bar {
  background: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  padding: 0.75rem 2rem;
  margin-top: auto;
}

.project-date {
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
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

.skills-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
}

.category-title {
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 2rem 0;
  text-transform: capitalize;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0;
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
  .skills-card {
    padding: 1.5rem;
  }

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

