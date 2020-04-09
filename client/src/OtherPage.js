import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm Some other page!
            <Link to="/">Go Back Home</Link>
        </div>
    );
};