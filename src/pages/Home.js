import React from "react";
import aboutme from "../img/AFFICHE ARTICLE-81.jpg";
import findhere from "../img/AFFICHE ARTICLE-82.jpg";
import HomeSlideshow from "./HomeSlideshow";

function AboutMe() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> About me </h2>
                        <p>A crazy teacher who has embarked on a crazy project !</p>
                        <p> I am a (slightly less) beginner teacher, who teaches mathematics. I have taught in
                            mainstream education as well as in special education.</p>
                        <p>Having noticed that the students were asking for more dynamic lessons, I questioned my
                            practice and changed my outlook !</p>
                        <p>So I decided to create myself a place where we could come and get inspiration or simply
                            ready-made content.</p>
                        <p>This blog is intended to help you in your practice and share with you my passion, teaching
                            mathematics !</p>
                        <img style={{width: "50%"}} src={aboutme} alt={aboutme}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FindHere() {
    return (
        <div id="box1">
            <div className="Article-Home">
                <div className="type1">
                    <div className="leftbox">
                        <h2> What find here ? </h2>
                        <p>Welcome ! </p>
                        <p>You are a mathematics teacher and you are looking for a place to find different educational
                            resources! You are in the right place ! </p>
                        <p>Here you will find a multitude of activities and practical ideas for mainstream
                            education. </p>
                        <p>You will be able to discover complete lessons based on the program, but not only! You will
                            have access to content on learning through play and new technologies. </p>
                        <p>I invite you to explore my blog to discover all the surprises hidden there.</p>
                        <img style={{width: "50%"}} src={findhere} alt={findhere}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <>
            <div className={"Home"}>
                <HomeSlideshow/>
                <AboutMe/>
                <FindHere/>
            </div>
        </>
    )
};
export default Home;

