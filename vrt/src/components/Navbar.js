import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (


        <div >
            <nav className="w3-bar w3-green">
              < div className = "container-fluid">


            <Link to ="/" className = "w3-bar-item" >File Upload And Download</Link>


                <ul classsName="w3-right">
                    <li className = "w3-bar-item">

                        <Link className="w3-button w3-mobile" to="/"
                            exact={true}>
                            Home
                        </Link>
                    </li>
                    <li className="w3-bar-item">
                        <Link className="w3-button w3-mobile" to="/list">
                            Files List
                        </Link>
                    </li>
                </ul>
                            </div>
            </nav>
        </div>

    );
};

export default Navbar;
