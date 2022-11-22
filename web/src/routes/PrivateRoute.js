import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    const token = useSelector((state) => state.user.token);

    if(!token) {
        return <Redirect to="/login" />
    }
    
    return ( 
        <Route {...rest} render={(props) => (
            <Component {...props} />
        )} />
     );
}

export default PrivateRoute;