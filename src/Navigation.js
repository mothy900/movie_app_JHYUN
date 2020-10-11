import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/join">Join</Link>

        </div>
    )
}

export default Navigation;