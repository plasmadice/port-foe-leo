const projects = [
  {
    id: 0,
    title: "LazyAnime",
    img: "lazyanime.png",
    color: "purple",
    description:
      "Navigate FTP servers in the browser. Who asked for this? I asked for this.",
    spark: "None of my friends understand FTP but all of them want to use it.",
    stack: ["React, Express, Gatsby, Netlify"],
    links: {
      githubFrontend: "https://github.com/plasmadice/lazy-ftp",
      githubBackend: null,
      liveSite: "https://lazyanime.com/",
    },
  },
  {
    id: 1,
    title: "LazyAnime Backend",
    img: "lazyanimebackend.png",
    color: "#e27a3f",
    description:
      "Functional FTP through node.js. Extends the capabilities of a library into an interface for the frontend. Made using Express.js and dark magic.",
    spark: "Bet I can get FTP through a webpage.",
    stack: ["Express, Heroku"],
    links: {
      githubFrontend: null,
      githubBackend: "https://github.com/plasmadice/lazyanime-backend",
      liveSite: null,
    },
  },
  {
    id: 2,
    title: "Butterscotch Taco",
    img: "butterscotchtaco.png",
    color: "#e27a3f",
    description:
      "Frontend for TheMovieDatabase API. Could use a new coat of paint.",
    spark:
      "Me: I wonder if I can make a movie filter that I don't hate. (spoiler: I failed)",
    stack: ["React, Firebase, Firestore"],
    links: {
      githubFrontend: "https://github.com/plasmadice/butterscotch-taco",
      githubBackend: null,
      liveSite: "http://butterscotchtaco.com/",
    },
  },
  {
    id: 3,
    title: "Magiql",
    img: "magiql.png",
    color: "#e27a3f",
    description:
      "Frontend for TheMovieDatabase API. Could use a new coat of paint.",
    spark:
      "Me: I wonder if I can make a movie filter that I don't hate. (spoiler: I failed)",
    stack: ["React, Firebase, Firestore"],
    links: {
      githubFrontend: null,
      githubBackend: "https://github.com/plasmadice/magiql",
      liveSite: "http://butterscotchtaco.com/",
    },
  },
];

export default projects;
