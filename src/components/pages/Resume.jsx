import React from 'react';
import resume from '../../assets/dmeduriresume1.png';
import resume2 from '../../assets/dmeduriresume2.png';

const styles = {
    jumbotron: {
        backgroundColor: 'white',
        marginTop: 150,
        marginBottom: 100,
        marginLeft: 50,
        marginRight: 50
    }
};


const Resume = () => (
    <div className='container-sm container-md container-lg container-xl'>
        <div className='jumbotron shadow' style={styles.jumbotron}>
        <h1 className='display-4 text-center'>Resume</h1>
        <br></br>
        <p className='center'>
            <img  src={resume} id='resume' alt='Derek Meduri Work Experience'>
            </img>
            <img src={resume2} id='resume' alt='Derek Meduri Sample Applications'>
            </img>
        </p>
        <br></br>
        <p className='text-center'>
           
            <a href='https://github.com/derekmeduri/react-portfolio/blob/main/vite-project/src/assets/DerekMeduriResume.pdf' target='_blank'>
                Download a PDF of my Resume
            </a>
        </p>
        </div>
    </div>
);

export default Resume;