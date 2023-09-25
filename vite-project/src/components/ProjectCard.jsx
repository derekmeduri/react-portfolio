import React from 'react';

function ProjectCard(props) {
    return (
        <div className=''>
            <div>
                <img src={props.image} alt={props.title}>
                </img>
                <div>
                    <h5>{props.title}</h5>
                    <a href={props.deployed}>View Project</a>
                    <a href={props.repo}>GitHub Repo</a>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;