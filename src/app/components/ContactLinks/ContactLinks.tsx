import * as React from 'react';

import './ContactLinks.css';

export class ContactLinks extends React.Component {
    render() {
        return (
            <div className="contact-links">
                <a 
                    className="contact-links__icon contact-links__git"
                    target="_blank" 
                    href="https://github.com/jimfkong" 
                />
                <a 
                    className="contact-links__icon contact-links__linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/jim-kong/"
                />
                <a 
                    className="contact-links__icon contact-links__email"
                    href="mailto:jim.f.kong@gmail.com"
                />
            </div>
        );
    }
}