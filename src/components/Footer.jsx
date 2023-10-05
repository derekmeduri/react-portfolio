import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin-01.png';

const styles = {
    footer: {
        backgroundColor: "white",
        flexShrink: "none"
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}
const Footer = () => (
    <footer
    id='sitcky-footer'
    className='py-4 bg-light text-black-50'
    style={styles.footer}>
        <div className='container text-center justify-content-center'>
            <a href='https://github.com/derekmeduri'><img src={github} alt='github' style={styles.icon}></img></a>
            <a href='https://www.linkedin.com/in/derekmeduri/'><img src={linkedin} alt='linkedin' style={styles.icon}></img></a>
         
            <br></br>
            <small>Copyright &copy; Derek Meduri 2023 </small>
        </div>
    </footer>

)

export default Footer;