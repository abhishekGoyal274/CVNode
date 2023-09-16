import React from "react";
import checkmark from "../assets/checkmark.png";
import data from "../Data/index.json";
import data2 from "../Data/index2.json";

const Experience = () => {
    return (
        <>
            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {data?.skills?.map((item) => (
                            <div key={item.id} data-aos="zoom-out" className="details-container">
                                <h2 className="experience-sub-title">
                                    {item.name}
                                </h2>
                                {item?.skill?.map((item2,index) => (
                                    <div key={item2.index} className="article-container">
                                        <article>
                                            <img
                                                src={checkmark}
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>{item2.name}</h3>
                                                <p>{item2.exposure}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section style={{paddingTop:"0px", marginTop:"-5%"}}>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {data2?.skills?.map((item) => (
                            <div key={item.id} data-aos="zoom-out" className="details-container">
                                <h2 className="experience-sub-title">
                                    {item.name}
                                </h2>
                                {item?.skill?.map((item2,index) => (
                                    <div key={item2.index} className="article-container">
                                        <article>
                                            <img
                                                src={checkmark}
                                                alt="Experience icon"
                                                className="icon"
                                            />
                                            <div>
                                                <h3>{item2.name}</h3>
                                                <p>{item2.exposure}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;
