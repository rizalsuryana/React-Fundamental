import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navigation">
            <ul>
                <li>
                    <Link to='/'>Home</Link>

                    <li>
                    <Link to='/add'>Add</Link>
                    </li>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation;