import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            inputs : {
                email : '',
                password : ''
            }
        }
    }
    onInputChange = (value,type) =>{
        const {inputs} = this.state;
        inputs[type] = value;
        this.setState({inputs});
    }
    onLogin = () =>{
        const {inputs} = this.state;
        console.log(inputs);
    }

    render(){
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

}
export default connect(mapStateToProps)(SignIn);