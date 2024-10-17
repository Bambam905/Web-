
import React, { useState } from 'react';
import './LearningPath.css'


const LearningPath = () => {

    // Test data for learning modules
    const intialModules = [
        { id: 1, title: 'Full Stack Development applications', completed: false },
        { id: 2, title: 'Java Spring MVC projects', completed: false },
        { id: 3, title: 'React front-end projects', completed: false },
        { id: 4, title: 'MySQL Database Management', completed: false },
        { id: 5, title: 'AWS development and implentations', completed: false },
        { id: 6, title: 'Docker for Developers', completed: false },
        { id: 7, title: 'Test-Driven Development (TDD)', completed: false },
        { id: 8, title: 'API Development', completed: false },
    ];



    // State to manage the learning modules
    const [modules, setModules] = useState(intialModules);

    // Function to toggle the completion status of a module
    const toggleCompletion = (id) => {
        setModules(modules.map(module =>
            module.id === id ? { ...module, completed: !module.completed } : module
        ));
    };






    return (
        <div className="learning-path">
            <h2>Learning Path</h2>
            <ul className="module-list">
                {modules.map(module => (
                    <li key={module.id} className={`module-item ${module.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={module.completed}
                            onChange={() => toggleCompletion(module.id)}
                        />
                        <span>{module.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default LearningPath;