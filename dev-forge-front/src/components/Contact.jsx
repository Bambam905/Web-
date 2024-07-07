import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email: </label>
                    <input type="email" id="email" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit"> Submit</button>
            </form>
        </div>
    );
};

export default Contact;