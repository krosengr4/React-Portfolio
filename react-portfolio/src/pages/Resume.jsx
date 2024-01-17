//! This file contains the code for the Resume page. Css not kept here.

// import css, my resume, button
import myResume from "../../src/assets/my-resume.pdf"
import '../App.css'
import { BsCloudDownload } from 'react-icons/bs';



// export Resume function that returns the Resume page html
export default function Resume() {
    return (
      <div className="main-div">
        <h1 className="page-title">Resume</h1>
        <p className='description-tag'>Below you can download my Web-Development Resume</p>
        <hr></hr>

        <section className='resume-download'>
          <p className="resume-content">
          Feel free to download my portfolio by clicking the icon below.
          </p>

          <div className='download-section'>
            <a href={myResume} className="download-logo">
              <BsCloudDownload className="download-logo" />
            </a>
          </div>
        </section>

      </div>
    );
  }
  