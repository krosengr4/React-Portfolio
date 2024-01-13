import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx'
import Error from "./pages/Error";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// import './index.css'

const router = createBrowserRouter([
  {
    path: '/', //<--- What url we are using
    element: <App />, //<--- What component to render
    errorElement: <Error />, // What componenet to render if error
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      // { 
      //   path: '/AboutMe',
      //   element: <AboutMe />,
      // },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
