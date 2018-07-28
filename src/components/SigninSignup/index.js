import React, { Component } from 'react';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';

class SigninSignup extends Component{
    render(){
        return(
            <div className = 'container'>
                <div className = 'row welcome-page'>
                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <Welcome />
                        <div className = 'col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                            <div className='login-page'>
                                <SignIn/> 
                                <SignUp /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SigninSignup;