import React from 'react';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import lines from '../../assets/lines.png';

const styles = {
    jumbotron: {
        backgroundColor: "white",
        marginTop: 100,
        marginBottom: 100
    },
    icon: {
        height: 20,
        marginRight:5
    },
    lines: {
        height: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
}

const Contact = () => (
    <div className='container-sm container-md container-lg container-xl'>
        <div className='jumbotron shadow' style={styles.jumbotron}>
        <h1 className='display-4 text-center'>Let's Work Toegether!</h1>
        <br></br>
        <p className='text-center'>Want to connect? Reach me below:</p>

        <p className='text-center'>
            <img src={email}
            style={styles.icon}></img>
            <a href='mailto:derekmeduri@gmail.com' rel='noreferrer' target='_blank'>derekmeduri@gmail.com</a>

            <img src={lines}
            style={styles.lines}></img>

            <img src={phone}
            style={styles.icon}></img>
        330-283-8221
        </p>
        </div>
    </div>
);

export default Contact;