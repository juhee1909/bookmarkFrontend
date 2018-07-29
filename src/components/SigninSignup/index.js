import React, { Component } from 'react';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { isAuthorized, clearMessage } from '../../redux/actions/auth';


class SigninSignup extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount = () =>{
        const {dispatch} = this.props;
        dispatch( isAuthorized( this.props.location.query.next ) );
    }
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

const mapStateToProps = (state) =>{
   return state;
}
export default connect(mapStateToProps)(SigninSignup);
