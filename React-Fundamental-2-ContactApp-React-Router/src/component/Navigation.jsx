import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

const Navigation = () => {
    return(
        <nav className="navigation">
            <ul>
                <li>
                    <Link to='/'><FiHome/></Link>

                    <li>
                    <Link to='/add'><FiPlusCircle/></Link>
                    </li>
                </li>
            </ul>
        </nav>
    )
}


export default Navigation;