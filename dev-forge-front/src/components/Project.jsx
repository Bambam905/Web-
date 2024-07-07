//import React from 'react'
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Project.css';

const Project = () => {


    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', progress: 75 },
        { id: 2, name: 'project B', progress: 50 },
        { id: 3, name: 'project C', progress: 20 },
    ])




    return (
        <div className="project-page">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.name}</h2>
                        <CircularProgressbar
                            value={project.progress}
                            text={`${project.progress}%`}
                            styles={buildStyles({
                                textColor: "#4caf50",
                                pathColor: "#4caf50",
                                trailColor: "#d6d6d6"
                            })}
                        />
                        <p>Progress: {project.progress}%</p>
                    </div>
                ))}
            </div>
            <p>Details about the projects......</p>
        </div>
    );
}

export default Project;