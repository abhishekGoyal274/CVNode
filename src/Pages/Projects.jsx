import React from "react";
import data from "../Data/index.json";

const Projects = () => {
  return (
    <>
      <section id="internships">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Internships</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {data?.internships?.map((item) => (
              <div
                key={item.id}
                className="details-container color-container"
                data-aos={item.dataAos}
              >
                <div className="article-container">
                  <img
                    src={item.src}
                    alt="Placeholder"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  {item.title}
                </h2>
                <p className="project-description">{item.description} </p>
                <div className="btn-container">
                  <a href={item.github} target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {data?.projects?.map((item) => (
              <div
                key={item.id}
                data-aos="zoom-in-up"
                ata-aos-easing="ease-out-cubic"
                data-aos-duration="700"
                className="details-container color-container"
              >
                <div className="article-container">
                  <img
                    src={item.src}
                    alt="Placeholder"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  {item.title}
                </h2>
                <p className="project-description">{item.description} </p>
                <div className="btn-container">
                  <a href={item.github} target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Github
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button className="btn btn-color-2 project-btn">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
