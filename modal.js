const projects = [
  {
    identity: 'one',
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/featured.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'two',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask1.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'three',
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask6.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'four',
    name: 'Profesional Art Printing',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask5.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'five',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask4.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'six',
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask3.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },

  {
    identity: 'myBtn',
    name: 'Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: 'images/mask2.png',
    technologies: ['Ruby on Rails', 'HTML', 'Javacript'],
    links: [
      'https://darrenodi.me/Project-Portfolio/',
      'https://github.com/darrenodi/Project-Portfolio',
    ],
  },
];

const buttons = document.querySelectorAll('.clickbtn');
buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const project = projects[i];

    const modal = document.getElementById('modal_pop');
    modal.style.display = 'block';

    const title = modal.querySelector('.modal_title');
    const image = modal.querySelector('.modal_image');
    const tech = modal.querySelector('.tags');
    const desc = modal.querySelector('.modal_desc');

    title.textContent = project.name;
    image.src = project.image;

    tech.querySelectorAll('button').forEach((tech, j) => {
      tech.textContent = project.technologies[j];
    });

    desc.textContent = project.description;

    const aTags = modal.querySelectorAll('.sourcelinks');
    const [liveLink, sourceLink] = project.links;

    aTags[0].href = liveLink;
    aTags[1].href = sourceLink;
  });
});

const closepop = document.querySelector('.close');
closepop.addEventListener('click', () => {
  const popup = document.querySelector('.modal_popup');
  popup.style.display = 'none';
});