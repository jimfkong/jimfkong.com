import * as React from 'react';

import './Portrait.css';

const me = require('../../../assets/me.png');

export class Portrait extends React.Component {
    render() {
        return (
            <div className="portrait">
                <img 
                    className="portrait__me" 
                    src={me}
                />
            </div>
        );
    }
}