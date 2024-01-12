// import css
import '../App.css'

export default function Portfolio() {
    return (
      <div className="main-div">

        <h1 className="page-title">Portfolio: </h1>
        <p className="aboutme-content">
            This is where your portfolio page will go. 
        </p>
        <div className="top-two">
        <a className="top-project" href="https://lmansilla92.github.io/rooster-tail/" alt="Image of My Project Website">
          {/* <image className"big-image" src="./assets/images/Weather-Dashboard.png" alt="Image of Horiseon Accessibility website"> </image> */}
            <img src= "./public/Rooster-Tail.png" className="picture-btn" alt="Vite logo" href="./public/Rooster-Tail.png"/>
              <div className="overlay">
                  {/* <h3 class="text-h3">Weather Dashboard</h3> */}
                  {/* <div class="text"> Click me to go to the Website!</div> */}
              </div>
        </a>
        <a className="left-project" href="https://krosengr4.github.io/Weather-Dashboard/" alt="Image of My Project Website">
          {/* <image class="big-image" src="./assets/images/Weather-Dashboard.png" alt="Image of Horiseon Accessibility website"> </image> */}
            <img src= "./public/Weather-Dashboard.png" className="btm-picture-btn" alt="Vite logo" href="./public/Rooster-Tail.png"/>
              <div className="overlay">
                  {/* <h3 class="text-h3">Weather Dashboard</h3> */}
                  {/* <div class="text"> Click me to go to the Website!</div> */}
              </div>
        </a>
        <a className="left-project" href="https://krosengr4.github.io/Coding-Quiz/" alt="Image of My Project Website">
          {/* <image class="big-image" src="./assets/images/Weather-Dashboard.png" alt="Image of Horiseon Accessibility website"> </image> */}
            <img src= "./public/Workday-Scheduler.png" className="btm-picture-btn" alt="Code quiz app" />
              <div className="overlay">
                  {/* <h3 class="text-h3">Weather Dashboard</h3> */}
                  {/* <div class="text"> Click me to go to the Website!</div> */}
              </div>
        </a>
        <a className="right-project" href="https://krosengr4.github.io/Coding-Quiz/" alt="Image of My Project Website">
          {/* <image class="big-image" src="./assets/images/Weather-Dashboard.png" alt="Image of Horiseon Accessibility website"> </image> */}
            <img src= "./public/Code-Quiz.png" className="btm-picture-btn" alt="Vite logo" href="./public/Rooster-Tail.png"/>
              <div className="overlay">
                  {/* <h3 class="text-h3">Weather Dashboard</h3> */}
                  {/* <div class="text"> Click me to go to the Website!</div> */}
              </div>
        </a>
        <a className="right-project" href="https://krosengr4.github.io/Weather-Dashboard/" alt="Image of My Project Website">
          {/* <image class="big-image" src="./assets/images/Weather-Dashboard.png" alt="Image of Horiseon Accessibility website"> </image> */}
            <img src= "./public/Password-Generator.png" className="btm-picture-btn" alt="Vite logo" href="./public/Rooster-Tail.png"/>
              <div className="overlay">
                  {/* <h3 class="text-h3">Weather Dashboard</h3> */}
                  {/* <div class="text"> Click me to go to the Website!</div> */}
              </div>
        </a>
        </div>
      </div>
    );
  }
  