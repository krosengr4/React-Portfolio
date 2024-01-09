import { useState } from "react";
import '../App.css'


export default function AboutMe() {

  const [count, setCount] = useState(0)

    return (
      <div>
        <h1>About Page</h1>
        <p>
          This is where the about me page will go.
        </p>

        <div className="like-dislikeBtn">
        <button onClick={() => setCount((count) => count + 1)}>
          I like this! 
        </button>

        <h3> Current status: {count} likes/dislikes </h3> 

        <button onClick={() => setCount((count) => count - 1)}>
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