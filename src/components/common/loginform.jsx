import React, { Component } from 'react';
class LoginForm extends Component {
    state = {  }

    username = React.createRef();

    
    handleSubmit = e =>{
        e.preventDefault();
        const username=this.username.current.value;
        console.log("Form Submitted");
    }
    render() { 
        return ( 
            <div>
                <center>
                <h1>Login</h1>                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">UserName</label>
                        <input autoFocus id="username" type="text" className="form-control col-sm-6" ref={this.username} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control col-sm-6"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
                </center>
            </div>
        );
    }
}
 
export default LoginForm;