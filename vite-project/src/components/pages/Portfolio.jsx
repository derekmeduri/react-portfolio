import React, {Component} from 'react';
import projects from '../pages/projects.json';

class Portfolio extends Component {
    state = {
        projects
    };

    render () {
        return (
            <div className='container'>
                <h1>Portfolio</h1><br></br>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            {this.state.projects.map(project => (
                                <ProjectCard
                                id={project.id}
                                title={project.title}
                                image={''}
                                repo={project.repo}
                                deployed={project.deployed} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;