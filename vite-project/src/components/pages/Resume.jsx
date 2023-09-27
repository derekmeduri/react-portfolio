import React from 'react';
import resume from '../../assets/dmeduriresume1.png';
import resume2 from '../../assets/dmeduriresume2.png';

const Resume = () => (
    <div className='container'>
        <h1>Resume</h1>
        <br></br>
        <p>
            <img src={resume} id='resume' alt='Derek Meduri Wrok Experience'>
            </img>
            <img src={resume2} id='resume' alt='Derek Meduri Sample Applications'>
            </img>
        </p>
        <br></br>
        <p>
            <a href='https://github.com/derekmeduri/react-portfolio/blob/main/vite-project/src/assets/DerekMeduriResume.pdf' target='_blank'>
                Download a PDF of my Resume
            </a>
        </p>
    </div>
);

export default Resume;