// import use state
import { useState } from "react";
// import css
import '../App.css'


export default function AboutMe() {

  const [count, setCount] = useState(0)

    return (
      <div className="main-div">
        <h1 className="page-title">About Me: </h1>
        <hr></hr>
        <p className="aboutme-content">
                        Howdy! I am Kevin Rosengren, a 23 year old Texan native who loves technology and programming. Both of my 
                        parents were progammers at IBM for a long time, so the curiosity and passion for technology began at a young age. I am now
                        enrolled in the University of Texas web developement bootcamp and have really enjoyed and immersed myself in the course. I 
                        love to learn and acquire new skills and have other hobbies which include baseball, hockey, learning and playing musical instruments,
                        and getting outdoors whenever I can. I am curious, excited, and determined to make web developement and programming a career.
        </p>

        <div className="like-dislikeBtn">
        <button className='likeBtn' onClick={() => setCount((count) => count + 1)}>
          I like this! 
        </button>

        <h3 className="counter-status"> Total: {count}</h3> 

        <button className='dislikeBtn'onClick={() => setCount((count) => count - 1)}>
          I dislike this!  
        </button>
       </div>
      </div>
    );
  }


  // function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Increase count 
//         </button>
//        <h3> Count is: {count} </h3> 
//         <button onClick={() => setCount((count) => count - 1)}>
//           Decrease count 
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }