//! This file contains the code for the Portfolio page. Css not kept here.

// import css
import '../App.css'

// export Portfolio function that returns the portfolio page html
export default function Portfolio() {
    return (
    <div className="main-div">
        <h1 className="page-title">My Portfolio </h1>
        <p className='description-tag'>Below are a few of the projects that I have created or helped create!</p>
        <hr></hr>
    <section className='projects-container'>
        <a className='top-project' href='https://lmansilla92.github.io/rooster-tail/'>
            <img className='project-img' src='/Rooster-Tail.png' alt='Clickable image of my project'></img>
            <div className='overlay'>
                <h3 className='big-project-label'>Rooster Tail</h3>
            </div>
        </a>

        <a className='lower-project' href='https://krosengr4.github.io/Weather-Dashboard/'>
            <img className='project-img' src='/Weather-Dashboard.png' alt='Clickable image of my project'></img>
            <div className='overlay2'>
                <h3 className='small-project-label'>Weather Dashboard</h3>
            </div>
        </a>
        <a className='lower-project' href='https://krosengr4.github.io/Coding-Quiz/'>
            <img className='project-img' src='/Code-Quiz.png' alt='Clickable image of my project'></img>
            <div className='overlay3'>
                <h3 className='small-project-label'>Coding Quiz</h3>
            </div>
        </a>
        <a className='lower-project' href='https://krosengr4.github.io/WorkDayScheduler/'>
            <img className='project-img' src='/Workday-scheduler.png' alt='Clickable image of my project'></img>
            <div className='overlay4'>
                <h3 className='small-project-label'>Workday Scheduler</h3>
            </div>
        </a>
        <a className='lower-project' href='https://krosengr4.github.io/Password-Generator/'>
            <img className='project-img' src='/Password-Generator.png' alt='Clickable image of my project'></img>
            <div className='overlay5'>
                <h3 className='small-project-label'>Random Password Generator</h3>
            </div>
        </a>
    </section>

    </div>
    );
  }
