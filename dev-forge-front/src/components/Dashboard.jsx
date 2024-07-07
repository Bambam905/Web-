import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const Dashboard = () => {

    const learningPathProgress = 70; //Test value
    const projectProgress = 40; //Test value
    const challengesProgress = 70; //Test value
    const feedbackProgress = 70; //Test value


    return (
        <div className="dashboard">
            <h1>Welcome to the Dev Forge Dashboard</h1>
            <div className="dashboard-sections">
                <div className="dashboard-section">
                    <h2>Learning Path</h2>
                    <CircularProgressbar
                        value={learningPathProgress}
                        text={`${learningPathProgress}%`}
                        styles={buildStyles({
                            textColor: "#007bff",
                            pathColor: "#007bff",
                            trailColor: "#d6d6d6"
                        })}
                    />
                    <p>Track my progress and complete modules to advance My skills.</p>
                    <Link to="/learning-path" className="dashboard-link">Go to Learning Path</Link>
                </div>



                <div className="dashboard-section">
                    <h2>Projects</h2>
                    <CircularProgressbar
                        value={projectProgress}
                        text={`${projectProgress}%`}
                        styles={buildStyles({
                            textColor: "#28a745",
                            pathColor: "#28a745",
                            trailColor: "#d6d6d6"
                        })}
                    />
                    <p>Work on projects that apply my knowledge and gain practical experience.</p>
                    <Link to="/project" className="dashboard-link">Go to Projects</Link>
                </div>


                <div className="dashboard-section">
                    <h2>Challenges</h2>
                    <CircularProgressbar
                        value={challengesProgress}
                        text={`${challengesProgress}%`}
                        styles={buildStyles({
                            textColor: "#ffc107",
                            pathColor: "#ffc107",
                            trailColor: "#d6d6d6"
                        })}
                    />
                    <p>Working on projects to apply my knowledge and gain practical experience.</p>
                    <Link to="/challenge" className='dashboard-link'>Go to Challenges</Link>
                </div>



                <div className="dashboard-section">
                    <h2>Feedback</h2>
                    <CircularProgressbar
                        value={feedbackProgress}
                        text={`${feedbackProgress}%`}
                        styles={buildStyles({
                            textColor: "#dc3545",
                            pathColor: "#dc3545",
                            trailColor: "#d6d6d6"
                        })}
                    />
                    <p>Get feedback on my work and improve my skills through constructive critique.</p>
                    <Link to="/feedback" className="dashboard-link">Go to Feedback</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;