import React, { Component } from 'react';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SigninSignup extends Component{
    render(){
        return(
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-xs-12'>
                        <div className = 'col-xs-9'>
                            <Welcome />
                        </div>
                        <div className = 'col-xs-3'>
                            <SignIn/> 
                            <SignUp /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigninSignup;