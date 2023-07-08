const fs = require("fs");

const image = fs.readFileSync(`${__dirname}/img/noman.jpg`, {
  encoding: "base64",
});

const about = {
  headline: "Hi, I'm Noman",
  details:
    "A JavaScript Developer with a focus on frontend development using React.js and familiar with backend technology like Node Js.",
  cvLink:
    "https://drive.google.com/file/d/1mKeur2fhtxc31FcZ0FLBOC_hMd6MX5cP/view?usp=sharing",
  img: image,
};

module.exports = about;
