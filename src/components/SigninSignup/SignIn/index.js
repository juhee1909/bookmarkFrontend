import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, notification } from 'antd';
import { login } from '../../../redux/actions/auth';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            inputs : {
                email : '',
                password : ''
            },
            error : '',
            success : ''
        }
    }
    componentWillReceiveProps(props){
        if(props.login.error != undefined){
            this.setState({error : props.login.error});
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
    onLogin = () =>{
        const { dispatch } = this.props;
        const {inputs} = this.state;
        if(inputs.email == '' || inputs.password == ''){
            notification['error']({
                message: 'Error',
                description: 'Both Fields Required',
            });   
        }else if(inputs.email !== ''){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test((inputs.email).toLowerCase()) == false){
                notification['error']({
                    message: 'Error',
                    description: 'Not a Valid Email',
                });      
            }else{
                dispatch(login(inputs));
            }
        }else{
            dispatch(login(inputs));
        }
    }

    render(){
        const {error} = this.state;
        console.log(error);
        return(
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <label> Login </label>
                <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <label> Email </label> <br />
                    <input type = 'email' onChange = {(e)=>this.onInputChange(e.target.value,'email') }/>
                </div>
                <div className = 'col-xs-12 col-lg-12'>
                    <label> Password </label> <br />
                    <input type = 'password'  onChange = {(e)=>this.onInputChange(e.target.value,'password') } />
                </div>
                <div className = 'col-xs-12 col-lg-12'>
                    <button onClick = {() => this.onLogin() }> Submit </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {login : state.auth.login };
}
export default connect(mapStateToProps)(SignIn);