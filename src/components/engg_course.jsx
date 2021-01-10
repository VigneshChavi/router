import React, { Component } from 'react';
class Engg_Course extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Engg Course : {this.props.match.params.name}</h2><br></br>
                {this.props.match.params.desc}
            </div>
         );
    }
}
export default Engg_Course;