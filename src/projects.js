const projects = [
  {
    id: 0,
    title: "LazyAnime",
    img: "lazyanime.png",
    color: "#00747A",
    description:
      "Navigate FTP servers in the browser. Who asked for this? I asked for this.",
    spark:
      "'None of my friends understand FTP but all of them want to use it.'",
    stack: ["React, Express, Gatsby, Netlify"],
    links: {
      githubFrontend: "https://github.com/plasmadice/lazy-ftp",
      githubBackend: "https://github.com/plasmadice/lazyanime-backend",
      liveSite: "https://lazyanime.com/",
    },
  },
  {
    id: 1,
    title: "Butterscotch Taco",
    img: "butterscotchtaco.jpg",
    color: "#A94E19",
    description:
      "Frontend for TheMovieDatabase API. Could use a new coat of paint.",
    spark:
      "'I wonder if I can make a movie filter that I don't hate.' (spoiler: I failed)",
    stack: ["React, Firebase, Firestore"],
    links: {
      githubFrontend: "https://github.com/plasmadice/butterscotch-taco",
      githubBackend: null,
      liveSite: "http://butterscotchtaco.com/",
    },
  },
  {
    id: 2,
    title: "MagiQL",
    img: "magiql.png",
    color: "#101f2c",
    description:
      "GraphQL interface for MongoDB database designed to hold Magic The Gathering cards.",
    spark:
      "'GraphQL is awesome on the frontend. I wonder how it is on the backend.'",
    stack: ["GraphQL, Fastify, MongoDB, Apollo"],
    links: {
      githubFrontend: null,
      githubBackend: "https://github.com/plasmadice/magiql",
      liveSite: null,
    },
  },
  // {
  //   id: 3,
  //   title: "LazyAnime Backend",
  //   img: "lazyanimebackend.png",
  //   color: "#e27a3f",
  //   description:
  //     "Functional FTP through node.js. Extends the capabilities of a library into an interface for the frontend. Made using Express.js and dark magic.",
  //   spark: "Bet I can get FTP through a webpage.",
  //   stack: ["Express, Heroku"],
  //   links: {
  //     githubFrontend: null,
  //     githubBackend: "https://github.com/plasmadice/lazyanime-backend",
  //     liveSite: null,
  //   },
  // },
];

export default projects;
