import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tariq Khawaja | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tariq Khawaja',
  subtitle: "I'm a JavaScript Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile pic.jpg',
  paragraphOne:
    "I'm a positive and enthusiastic self-motivated learner, teaching myself to code over the last year and looking to gain professional experience.",
  paragraphTwo:
    "I have worked in the Music Industry for the last 6 years as a Member Service Representative, dealing with member queries and solving complex music copyright queries. I aim to transfer the skills I've gained from a career in the Music Industry over to the tech industry.",
  paragraphThree:
    'Outside of coding, my hobbies include Martial Arts - Kickboxing and Brazilian Jiu Jitsu, and tabletop roleplaying games.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Brighton BJJ School',
    info: 'I built a website for my Jiu Jitsu club in Brighton, using React and Styled-Components.',
    info2:
      'I used the Google Maps API to display a Google Map and used Nodemailer to create a contact form that sends the user an email upon submission.',
    url: 'https://boring-kilby-ec86fc.netlify.app/',
    repo: 'https://github.com/Tariqk26/BrightonBJJSchool/tree/netlify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'javascript30.png',
    title: 'Javascript 30',
    info: 'I went through the javascript30 course by Wes Bos as a way to build practical projects doing 30 mini projects, to get more hands on experience with JavaScript',
    info2:
      'Some of my favourite projects from this are the Speech Recognition Chrome Web App, the JavaScript DrumKit and the Whack a Mole Game.',
    url: 'https://tariqk26.github.io/JavaScript30/',
    repo: 'https://github.com/Tariqk26/JavaScript30', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dang thats delicious.JPG',
    title: "Dang That's Delicious",
    info: "I created this Node App using Mongo DB and Express to create a website which has information on restaurants and coffee shops. This is from Wes Bos's Learn Node Course",
    info2:
      'The user can add data via a form which is stored in the database. This taught me alot about using async functions in Node.js',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tariqkhawaja26@live.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/tariqtkhawaja',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/Tariqk26',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tariq-khawaja-a8334184/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Tariqk26',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
