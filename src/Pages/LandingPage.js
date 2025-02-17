import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "../Components/TypingEffect";
import posts from "./projectElements";

import profile from "./pic.png"
import linkedIn from "./link.svg"
import gh from "./github.svg"


// TO update : 
// https://medium.com/@ninadkarlekar/updating-your-deployed-react-project-on-github-pages-a-quick-guide-f510bedc70c9 
const LandingPage = () => {
    let element = posts[2]

    return <div>
        {/* put an about me */}
        {/* large paragraph next to linked in pictureas a circle, maybe scale on hover */}
        <h1 className="title2">{useTypingEffect("About Me:", 100)}</h1>
        <div className="landing-cols">
            <div className="col1">
            <p className="landing-text">
                Hello all! My name is Jacob Young and I am a Computer Science and Computational Finance
                 + Risk Management Double Major studying at the University of Washington. Originally 
                 from the Bay Area, I aim to be the most versatile engineer I can, eager to learn new 
                 technologies and quick to apply them. In my free time I like swimming, playing water polo, Nintendo games, 
                 reading, camping, hiking and hanging out with friends! Feel free to look around my site 
                 and contact me if you have any questions or interest.
            </p>
            <a href="https://www.linkedin.com/in/jacob-young-a08a21242/" className="ex-link" target="_blank"><img src={linkedIn} className="image-link"></img></a>
            <a href="https://github.com/jyoung28" className="ex-link" target="_blank"><img src={gh} className="image-link1"></img></a>
            <button className="resume"><Link to="Jacob_Young_Resume.pdf" className="ex-link" target="_blank" download>My Resume &#x2913;</Link></button>
            </div>
            <img src={profile} className="landing-pic"></img>
        </div>
        {/* put useful links as a footer*/}
        
        {/* put my resume as a pdf download option*/}
        {/* Some pics Linked profile maybe and pic of mac and UW stadium*/}
    </div>
}

export default LandingPage
