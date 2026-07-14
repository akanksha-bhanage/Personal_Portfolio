import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  mongodb,
  vite,
  aws,
  python,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  hostelcare,
  todo,
  weather,
  snake,
  connectfour
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Development',
    icon: frontend,
  },
  {
    title: 'Cloud & DevOps',
    icon: backend,
  },
  {
    title: 'Problem Solving (DSA)',
    icon: ux,
  },
  {
    title: 'AI & Machine Learning',
    icon: prototyping,
  },
];


const technologies = [
  {
    name: 'HTML5',
    icon: html,
  },
  {
    name: 'CSS3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React.js',
    icon: reactjs,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'AWS EC2',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Event Lead',
    company_name: 'WCE ACM Student Chapter',
    icon: dcc,
    iconBg: '#333333',
    date: '2026 - Present',
  },
  {
    title: 'Assistant Secretary',
    company_name: 'WCE ACM Student Chapter',
    icon: microverse,
    iconBg: '#333333',
    date: '2025 - 2026',
  },
  {
    title: 'MERN Stack Developer',
    company_name: 'Personal Projects',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2025 - Present',
  },
  {
    title: 'AI & Machine Learning Learner',
    company_name: 'Current Learning Journey',
    icon: kelhel,
    iconBg: '#333333',
    date: '2026 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'HostelCare',
    description:
      'A production-ready, Dockerized MERN Stack Complaint Management System with role-based authentication, complaint tracking, staff assignment, and AWS EC2 deployment using Docker Compose and Nginx.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: hostelcare,
    repo: 'https://github.com/akanksha-bhanage/Complaint-Management-System',
    demo: 'http://3.109.208.132',
  },

  {
    id: 'project-2',
    name: 'MERN Todo App',
    description:
      'A full-stack Todo application built with React, Node.js, Express, and MongoDB featuring CRUD operations and a responsive user interface.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'express', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: todo,
    repo: 'https://github.com/akanksha-bhanage/Todo-App',
    demo: '#',
  },

  {
    id: 'project-3',
    name: 'Weather App',
    description:
      'A weather application that fetches real-time weather data using APIs and displays dynamic weather information with a clean and responsive user interface.',
    tags: [
      { name: 'javascript', color: 'blue-text-gradient' },
      { name: 'api', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: weather,
    repo: 'https://github.com/akanksha-bhanage',
    demo: '#',
  },

  {
    id: 'project-4',
    name: 'Snake Game',
    description:
      'A classic Snake Game built with Python and Pygame featuring score tracking, collision detection, and smooth gameplay mechanics.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'pygame', color: 'green-text-gradient' },
      { name: 'game', color: 'pink-text-gradient' },
    ],
    image: snake,
    repo: 'https://github.com/akanksha-bhanage',
    demo: '#',
  },

  {
    id: 'project-5',
    name: 'Connect Four',
    description:
      'A two-player Connect Four game developed using Python and Pygame with a graphical interface, turn-based gameplay, and win detection logic.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'pygame', color: 'green-text-gradient' },
      { name: 'game', color: 'pink-text-gradient' },
    ],
    image: connectfour,
    repo: 'https://github.com/akanksha-bhanage',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
