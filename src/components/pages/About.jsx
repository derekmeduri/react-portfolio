import React from 'react';
import me from '../../assets/derekmeduripicture.jpg';

const styles = {
    me: {
        maxWidth: "50%",
        maxHeight: "auto",
        minWidth: 325,
        paddingLeft: 15,
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
                <img className='img-fluid float-sm-right float-md-right float-lg-right float-xl-right'
                style={styles.me}
                src={me}
                alt='Derek Meduri'></img>
                <p>I'm Derek!</p>
                <p>I'm a freelance product developer and full-stack engineer. As a recent graduate of The Ohio State University Full-Stack Web Development certificate program I am looking for full-time or part-time work in web development. My degree in Fashion Merchandising lead me to New York City, but growing up in Ohio brought me back to Columbus.</p>
                <p>My professional career started in retail, selling shoes, in 2007. Upon graduation from Kent State University in 2015 I began working in corporate fashion as a Product Developer. I have worked closely with fashion designers to bring their visions to life. Now, I have shifted my focus to software development where I have been learning to code for the past year. I look forward to bringing many more visions to life with the knowledge and skills I have obtained.</p>
                <p>I am a creative, passionate and dedicated Web Developer with strong leadership, communication and organizational skills. If you would like to see some of my recent applications checkout out my portfolio and resume tabs in the navigation.</p>
                <p>Thanks for stopping by!</p>
            </div>
        </div>
        </div>
    </div>
);


export default About;