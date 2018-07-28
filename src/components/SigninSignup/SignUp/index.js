import React ,{ Component } from 'react';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    
    render(){
        return(
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <label> Signup </label>
                    <form>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <label> Name </label> <br />
                            <input type = 'text' />
                        </div>
                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <label> Email </label> <br />
                            <input type = 'email' />
                        </div>
                        <div className = 'col-xs-12 col-lg-12'>
                            <label> Password </label> <br />
                            <input type = 'password' />
                        </div>
                        <button> Submit </button>
                    </form>
                </div>
        )
    }
}

export default SignUp;