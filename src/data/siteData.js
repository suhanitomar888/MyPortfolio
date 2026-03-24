const assetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const profile = {
  name: 'Faiziya Ansari',
  title: 'Full Stack Developer',
  email: 'faiziyaansari@gmail.com',
  location: 'India',
  photo: assetUrl('profilePic.jpeg'),
  resume: assetUrl('faiziyacv (2) (1) (1).pdf'),
  resumeFileName: 'Faiziya-Ansari-Resume.pdf',
  github: 'https://github.com/Faiziya30',
  linkedin: 'https://www.linkedin.com/in/faiziya-ansari/',
}

export const projects = [
  {
    title: 'E-commerce Credit Profit System',
    description:
      'A full-stack platform for credit profiles, product management, secure auth, and transaction lifecycle analytics.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Faiziya30',
    liveUrl: 'https://github.com/Faiziya30',
    previewUrl: 'https://github.com/Faiziya30',
    image: '/project-credit-system.jpg',
  },
  {
    title: 'SmartPDF Insight',
    description:
      'A PDF analysis app with upload, parsing, and smart insight extraction workflow for faster research and reviews.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    githubUrl: 'https://github.com/Faiziya30',
    liveUrl: 'https://github.com/Faiziya30',
    previewUrl: 'https://github.com/Faiziya30',
    image: '/project-smartpdf.jpg',
  },
  {
    title: 'Ballistic Recognition Tool',
    description:
      'A digital forensic workflow to track evidence, run recognition checks, and streamline case updates.',
    techStack: ['React', 'JavaScript', 'PHP', 'CSS'],
    githubUrl: 'https://github.com/Faiziya30',
    liveUrl: 'https://github.com/Faiziya30',
    previewUrl: 'https://github.com/Faiziya30',
    image: '/project-ballistic.jpg',
  },
]
