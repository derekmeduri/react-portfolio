import React from 'react';
import me from '../../assets/derekmeduripicture.jpg';

const styles = {
    me: {
        maxWidth: "50%",
        maxHeight: "auto",
        minWidth: 325,
        paddingRight: 25,
        paddingBottom:15
    },
    jumbotron: {
        backgroundColor:"white",
        marginTop:100,
        marginBottom:100
    }
}

const About = () => (
    <div className='container'>
        <div className='jumbotron shadow' style={styles.jumbotron}>
        <h1 className='display-4 text-center'>About Me</h1>
        <br></br>
        <div className='row'>
            <div className='col'>
                <img className='img-fluid float-sm-left float-md-left float-lg-left float-xl-left'
                style={styles.me}
                src={me}
                alt='Derek Meduri'></img>
                <p>I'm Derek!</p>
                <p>first paragraph</p>
                <p>second paragraph</p>
                <p>third paragraph</p>
            </div>
        </div>
        </div>
    </div>
);


export default About;