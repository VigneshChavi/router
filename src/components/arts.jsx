import React, { Component } from 'react';

import { Link } from 'react-router-dom';
const Arts = () => {
    return ( 
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link class="nav-link "  to="/engg">Engineering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active" to="/arts">Arts</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/science">Science</Link>
            </li>           
        </ul>
        <h1>Arts</h1>
        </div>
     );
}
 
export default Arts;