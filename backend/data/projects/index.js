const fs = require("fs");

const youtubeImg = fs.readFileSync(`${__dirname}/youtube.png`, {
  encoding: "base64",
});

const ecommerceImg = fs.readFileSync(`${__dirname}/ecommerce.png`, {
  encoding: "base64",
});

const hoobankImg = fs.readFileSync(`${__dirname}/hoobank.png`, {
  encoding: "base64",
});

const projects = [
  {
    name: "Youtube Clone",
    desc: "This is a youtube clone project. created using rapid api and react js.",
    img: youtubeImg,
    liveLink: "https://youtube-clone-noman.netlify.app/",
    githubLink: "https://github.com/noman023/youtube-clone",
  },
  {
    name: "FoodExpress",
    desc: "This is an ecommerce project we've created in a team collaboration as our first react project at a course we're in.",
    img: ecommerceImg,
    liveLink: "https://foodexpress-0x.vercel.app/",
    githubLink: "https://github.com/noman023/foodExpress-client",
  },
  {
    name: "Hoobank",
    desc: "This project created from a figma design to a react project.",
    img: hoobankImg,
    liveLink: "https://hoobank-noman.netlify.app/",
    githubLink: "https://github.com/noman023/figma-to-react",
  },
];

module.exports = projects;
