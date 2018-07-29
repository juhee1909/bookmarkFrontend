import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, notification } from 'antd';
import { signup } from '../../../redux/actions/auth';


class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            inputs : {
                name : '',
                email : '',
                password : ''
            },
            error : ''
        }
    }
    componentWillReceiveProps(props){
        if(props.signup.error != undefined){
            this.setState({error : props.signup.error});
            notification['error']({
                message: 'Error',
                description: props.login.error,
            });
        }else{
            browserHistory.push('/bookmark');
        }
    }

    onInputChange = (value,type) =>{
        const {inputs} = this.state;
        inputs[type] = value;
        this.setState({inputs});
    }
    onSignUp = () =>{
        const { dispatch } = this.props;
        const {inputs} = this.state;
        if(inputs.email == '' || inputs.name == '' || inputs.password == ''){
            notification['error']({
                message: 'Error',
                description: 'ALL Fields Required',
            });   
        }else if(inputs.email !== ''){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test((inputs.email).toLowerCase()) == false){
                notification['error']({
                    message: 'Error',
                    description: 'Not a Valid Email',
                });      
            }else{
                dispatch(signup(inputs));
            }
        }else{
            dispatch(signup(inputs));
        }
    }
    
    render(){
        return(
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <label> Signup </label>
                <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <label> Name </label> <br />
                    <input type = 'text' onChange = {(e)=>this.onInputChange(e.target.value,'name') }/>
                </div>
                <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <label> Email </label> <br />
                    <input type = 'email' onChange = {(e)=>this.onInputChange(e.target.value,'email') }/>
                </div>
                <div className = 'col-xs-12 col-lg-12'>
                    <label> Password </label> <br />
                    <input type = 'password' onChange = {(e)=>this.onInputChange(e.target.value,'password') }/>
                </div>
                <div className = 'col-xs-12 col-lg-12'>
                    <button onClick = {() => this.onSignUp() }> Submit </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {signup : state.auth.signup };
}
export default connect(mapStateToProps)(SignUp);