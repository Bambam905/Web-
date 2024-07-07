import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Challenge.css';

const Challenge = () => {
    //Example challenge data
    const [challenges, setChallenges] = useState([
        { id: 1, title: 'Spring MVC Basic', description: 'Complete tutorials on Spring MVC.', progress: 80 },
        { id: 2, title: 'React Components', description: 'Build reusable React components.', progress: 60 },
        { id: 3, title: 'MySQL Queries', description: 'Practice complex SQL queries.', progress: 40 },
    ]);


    return (
        <div className="challenge-page">
            <h1>Challenges</h1>
            <div className="challenges-container">
                {challenges.map((challenge) => (
                    <div key={challenge.id} className="challenge-card">
                        <h2>{challenge.title}</h2>
                        <p>{challenge.description}</p>
                        <CircularProgressbar
                            value={challenge.progress}
                            text={`${challenge.progress}%`}
                            styles={buildStyles({
                                textColor: "#4caf50",
                                pathColor: "#4caf50",
                                trailColor: "#d6d6d6"
                            })}
                        >
                        </CircularProgressbar>
                        <p>Progress: {challenge.progress}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Challenge;