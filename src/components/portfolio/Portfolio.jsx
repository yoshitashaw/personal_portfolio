import "./portfolio.css";

import IMG1 from "../../assets/GENImage.jpg";
import IMG2 from "../../assets/MyntGram.jpg";
import IMG3 from "../../assets/FlatApartment.jpg";
import IMG4 from "../../assets/ExoRealm.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "GENImage",
      img: IMG1,
      description:
        "GENImage gives your imagination a platform to showcase your creative and artistic mind. Generate images that you wish to create using the Open AI prompt and share them with the community.",
      technologies: "React.JS | TailWindCSS | OpenAI | DALL-E | Cloudinary | MongoDB | Node.JS | Express.JS",
      link: "https://github.com/yoshitashaw/GenAIImage",
    },
    {
      id: 2,
      title: "MyntGram",
      img: IMG2,
      description:
        "The E-commerce site would be no less than a social media interaction that would not only serve the customer’s demands but would also come to aid small-scale businesses to grow and scale up widely.",
      technologies: "React.JS | Bootstrap | Firebase | Redux | Node.JS | Express.JS",
      link: "https://myntra-gram.vercel.app/",
    },
    {
      id: 3,
      title: "Flats/Apartment Rental Portal",
      img: IMG3,
      description:
        "Developed a comprehensive rental platform using React for the students living nearby their college for a go to easy accomodation just at your finger-tips.",
      technologies: "Nginx | PHP | MySQL | jQuery",
      link: "https://flat-apartment-rent.vercel.app/",
    },
    {
      id: 4,
      title: "ExoRealm",
      img: IMG4,
      description:
        "ExoRealm is specially curated for space enthusiasts, who are inspired by new exploration and innovation. ExoRealm helps you to explore the exoplanets through a virtual gaming experience.",
      technologies: " React.js | TailWindCSS | JavaScript | Redux | Unity | ML Model ",
      link: "https://exo-realm.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
