//! This file contains the code for the AboutMe page. Css not kept here.

// import css
import '../App.css'

// export AboutMe function that returns the AboutMe page html
export default function AboutMe() {

    return (
      <div className="main-div">
        <h1 className="page-title">About Me </h1>
        <p className="description-tag">A little bit more about myself: </p>
        <hr></hr>

        <img src="/Pic-of-me.jpg" className="pic-of-me" alt="Picture of Kevin Rosengren"></img>
        <p className="aboutme-content">
            Howdy! I am Kevin Rosengren, a 23 year old Texan native who loves technology and programming. Both of my 
            parents were progammers at IBM for a long time, so the curiosity and passion for technology began at a young age. I am now
            enrolled in the University of Texas web developement bootcamp and have really enjoyed and immersed myself in the course. I 
            love to learn and acquire new skills and have other hobbies which include baseball, hockey, learning and playing musical instruments,
            and getting outdoors whenever I can. I am curious, excited, and determined to make web developement and programming a career.
        </p>
      </div>
    );
  }
