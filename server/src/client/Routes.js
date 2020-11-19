import React from "react";
import { Route } from 'react-router-dom';
import Home from "./components/Home";


const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={() => <div>user</div>} />
        </div>
    )

}

export default Routes;