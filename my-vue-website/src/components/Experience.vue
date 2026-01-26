<template>
  <section id="experience" class="experience-section">
    <h1 class="section-title">experience.</h1>
    
    <div class="timeline">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="timeline-item"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="job-header">
            <h2 class="company-name">{{ job.company }}</h2>
            <span class="job-location">{{ job.location }}</span>
            <span class="job-date">{{ job.date }}</span>
          </div>
          <div class="job-title">{{ job.title }}</div>
          <ul class="job-description">
            <li v-for="(point, pointIndex) in job.description" :key="pointIndex">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const jobs = ref([
  {
    company: 'Boston University',
    location: 'Boston, MA',
    title: 'Course Assistant',
    date: 'Sep - Dec 2025',
    description: [
      'Lead 370+ students to master Python and programming fundamentals for CS111 through labs and office hours.',
      'Adapt teaching styles to maximize student engagement and encourage problem solving and collaboration.'
    ]
  },
  {
    company: 'Liberty Caribbean ICT',
    location: 'Cayman Islands',
    title: 'Returning IT ServiceDesk Intern',
    date: 'May - Aug 2025',
    description: [
      'Migrated company information to a new credential management system, reducing costs by $200/mo.',
      'Implemented AI workflow automation with a Linux Virtual Machine and n8n, utilizing scripts and APIs to streamline ticket handling and save 30 seconds per ticket.',
      'Managed antivirus scans and cloud data backups to maintain system security and client data integrity.',
      'Awarded $3000 scholarship for outstanding performance and exceptional customer feedback.'
    ]
  },
  {
    company: 'Liberty Caribbean ICT',
    location: 'Cayman Islands',
    title: 'IT ServiceDesk Intern',
    date: 'Jun - Aug 2024',
    description: [
      'Resolved networking, software, Azure, Microsoft 365 and printer issues to keep IT operations running smoothly.',
      'Strengthened client relationships by consistently providing prompt solutions, resulting in positive client feedback.'
    ]
  },
  {
    company: 'Simply Computers',
    location: 'Cayman Islands',
    title: 'Computer Repair Technician',
    date: 'Jun - Aug 2019',
    description: [
      'Assembled and repaired 15+ computers, laptops, and servers by diagnosing hardware and software issues and applying targeted repair solutions to restore full system functionality.',
      'Advised clients on tailored technology upgrades, generating $500+ in revenue and enhancing customer satisfaction.'
    ]
  }
])
</script>

<style scoped>
.experience-section {
  margin-top: 3rem;
  padding: 2rem 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  contain: layout style;
  isolation: isolate;
}

.section-title {
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #02020a;
  text-transform: lowercase;
  letter-spacing: -0.02em;
}

.timeline {
  position: relative;
  padding-left: 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #7a7978;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -2.75rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #05204a;
  border: 2px solid #fdf7fa;
  box-shadow: 0 0 0 2px #05204a;
  z-index: 1;
}

.timeline-content {
  margin-left: 0;
}

.job-header {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1rem;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #02020a;
  margin: 0;
}

.job-location {
  font-size: 0.95rem;
  color: #7a7978;
}

.job-title {
  font-size: 1rem;
  color: #7a7978;
  font-style: italic;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  text-align: left;
}

.job-date {
  font-size: 0.9rem;
  color: #7a7978;
  margin-left: auto;
}

.job-description {
  list-style: none;
  padding: 0;
  margin: 0;
}

.job-description li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #7a7978;
  text-align: left;
}

.job-description li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #05204a;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 3rem;
  }

  .timeline {
    padding-left: 2rem;
  }

  .timeline-marker {
    left: -2rem;
  }

  .job-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .job-date {
    margin-left: 0;
  }
}
</style>

