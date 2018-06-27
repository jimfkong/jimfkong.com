import * as React from 'react';
import { Blade } from '../Blade';

import './Home.css'

export class Home extends React.Component {
    render() {
        return (
            <Blade>
                <div className="home">
                    {/* TODO image */}
                    <div className="home__name">
                        Jim Kong
                    </div>
                    <div className="home__title">
                        Software Engineer
                    </div>
                </div>
            </Blade>
        )
    }
}