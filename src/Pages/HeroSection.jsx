import React from "react";
import profilepic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";

const HeroSection = () => {
    const scrollToContactSection = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section id="profile" data-aos="fade-up">
            <div className="section__pic-container">
                <img src={profilepic} style={{border:"2px solid black",borderRadius:"100%"}} alt="Profile pic" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Abhishek Goyal</h1>
                <p className="section__text__p2">MERN Stack Developer</p>
                <div className="btn-container">
                    <a href="https://drive.google.com/file/d/1eLliDLl0I54sa97e_8asSq-DYEM1StP4/view?usp=sharing">
                    <button
                        className="btn btn-color-2"
                    >
                        View Resume
                    </button>
                    </a>
                    <button
                        className="btn btn-color-1"
                        onClick={scrollToContactSection}
                    >
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={linkedin}
                        alt="Linkdin Image"
                        class="icon"
                        onClick={()=>window.open('https://www.linkedin.com/in/abhishek274','_black')}
                    />
                    <img
                        src={github}
                        alt="github image"
                        class="icon"
                        onClick={()=>window.open('https://github.com/abhishekGoyal274')}
                    />
                    <img
                        src={leetcode}
                        alt="Leetcode image"
                        class="icon"
                        onClick={()=>window.open('https://leetcode.com/abhishekgoyal274/')}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
