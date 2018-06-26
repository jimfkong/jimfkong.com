import * as React from 'react';

import './Blade.css';

export class Blade extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className="blade">
                {children}
            </div>
        )
    }
}