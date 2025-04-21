import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error: server not Found</h1>
            <Link to={"/"}>Reload</Link>
        </div>
    );
};

export default ErrorPage;