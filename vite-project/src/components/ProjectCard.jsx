import React from 'react';

const styles = {
    card: {
        marginBottom: 30
    },

    button: {
        marginRight: 5
    }
}

function ProjectCard(props) {
    return (
        <div className='col-sm-6'>
            <div className='card tex-center' style={styles.card}>
                <img src={props.image} alt={props.title}>
                </img>
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <a href={props.deployed} target='_blank' >View Project</a>
                    <a href={props.repo} target='_blank'>GitHub Repo</a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;