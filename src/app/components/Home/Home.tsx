import * as React from 'react';
import { ContactLinks } from '../ContactLinks';
import { Portrait } from '../Portrait';

import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home__portrait">
                    <Portrait />
                </div>
                <div className="home__name">
                    Jim Kong
                    </div>
                <div className="home__title">
                    <div>Software Engineer</div>
                </div>
                <div className="home__links">
                    <ContactLinks />
                </div>
            </div>
        );
    }
}