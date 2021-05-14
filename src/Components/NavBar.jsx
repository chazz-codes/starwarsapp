import React from 'react';
import {Link} from 'react-router-dom'

function NavBar(props) {
    return (
        <div className="navBar">
            <div>
            <Link to='/'><h2>Home </h2> </Link>
            </div>
            <div className="rightside">
            <Link to='/episode1'><h2>i</h2> </Link>
            <Link to='/episode2'><h2>ii</h2> </Link>
            <Link to='/episode3'><h2>iii</h2> </Link>
            <Link to='/episode4'><h2>iv</h2> </Link>
            <Link to='/episode5'><h2>v</h2> </Link>
            <Link to='/episode6'><h2>vi</h2> </Link>
            <Link to='/episode7'><h2>vii</h2> </Link>
            <Link to='/episode8'><h2>viii</h2> </Link>
            <Link to='/episode9'><h2>ix</h2> </Link>
            </div>
        </div>
    );
}

export default NavBar;