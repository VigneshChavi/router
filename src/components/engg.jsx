import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class Engg extends Component {
    state ={
        eng_Course : [{id:1, name:'Civil', desc:'40 Staffs worked in Civil Dept'},
        {id:2, name:'Mechanical', desc:'50 Staffs worked in Mechanical Dept'},
        {id:3, name:'Computer Science', desc:'60 Staffs worked in Cs Dept here'}
        ]
    };
    render () {
        return (            
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link class="nav-link active"  to="/engg">Engineering</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link " to="/arts">Arts</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/science">Science</Link>
            </li>           
        </ul>
        
        <h1>Engineering</h1>   
        <ul>
            {this.state.eng_Course.map(eng_Course => (
                <li key={eng_Course.id}>
                    <Link to={`/engg/${eng_Course.name}/${eng_Course.desc}`}>{eng_Course.name}</Link>
                </li>
            ))}
        </ul>
        </div>
        
        );
     }
}
 
export default Engg;