const projects = [
  {
    id: 0,
    title: "Seemail",
    img: "seemail.png",
    color: "#152a38",
    description:
      "Automated login and pin entering process using Puppeteer",
    spark:
      "'Extremely popular with my pirate friends.'",
    stack: ["TypeScript, Puppeteer, Next 13, Vercel"],
    links: {
      githubFrontend: "https://github.com/plasmadice/seemail",
      liveSite: "https://www.seemail.dev/",
    },
  },
  {
    id: 1,
    title: "LazyFTP",
    img: "lazyanime.png",
    color: "#00747A",
    description:
      "Navigate FTP servers in the browser. Who asked for this? I asked for this.",
    spark:
      "'None of my friends understand FTP but all of them want to use it for anime.'",
    stack: ["React, Express, Gatsby, Netlify"],
    links: {
      githubFrontend: "https://github.com/plasmadice/lazyftp",
      githubBackend: "https://github.com/plasmadice/lazyftp-backend",
      liveSite: "https://lazyftp.com/",
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
      "'Remnants of the time I fought GraphQL. Not sure who won.'",
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
