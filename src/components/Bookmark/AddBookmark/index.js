import React ,{ Component } from 'react';
import { Button, notification } from 'antd';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { bookmarkAdd } from '../../../redux/actions/bookmark.js';

class AddBookmark extends Component{
    constructor(){
        super();
        this.state = {
            visible : true,
            inputs : {
                _id : '',
                url : '',
                title : '',
                tags : ''
            }
        }
    }

    toggleVisiblity = () =>{
        const {addBookmark} = this.state;
        this.setState({ addBookmark : !addBookmark });
    }
    show() {
        this.setState({ visible: true });
    }
    onInputChange = (value,type) =>{
        const { inputs } = this.state;
        inputs[type] = value;
        this.setState({inputs});
    }
    componentWillMount(){
        const { inputs } = this.state;
        if(this.props.value != undefined){
            inputs['_id'] = this.props.value._id;
            inputs['url'] = this.props.value.url;
            inputs['title'] = this.props.value.title;
            inputs['tags'] = this.props.value.tags;
    
            this.setState({inputs});
        }


    }
    
    onSubmit = () =>{
        const { dispatch } = this.props;
        const { inputs } = this.state;
        if(inputs.url == '' || inputs.title == '' || inputs.tags == ''){
            notification['error']({
                message: 'Error',
                description: 'All Fields Required',
            }); 
        }else{
            dispatch(bookmarkAdd(inputs));
            this.props.onClose();

        }
    }
 
    hide() {
        this.setState({ visible: false });
        if( typeof this.props.onClose === 'function' ){
            this.props.onClose();
        }
    }

    render(){
        const { inputs } = this.state;
        return(
            <div>
                <Rodal visible={this.props.visiblity} onClose={this.hide.bind(this)} animation="door" duration={700} width={50} height={50} measure="%" >
                    <label> URL </label>
                    <input type='text' onChange = {(e) => this.onInputChange(e.target.value,'url')} value = {inputs.url }/> <br />
                    <label> Title </label>
                    <input type='text'  onChange = {(e) => this.onInputChange(e.target.value,'title')} value = {inputs.title }/> <br />
                    <label> Tags </label>
                    <input type='text'  onChange = {(e) => this.onInputChange(e.target.value,'tags')} value = {inputs.tags }/> <br />
                    <button onClick = {() => this.onSubmit()}> Save </button>
                </Rodal> 
            </div>     
        )
    }
}

const mapStateToProps = (state) =>{
   return;
}
export default connect(mapStateToProps)(AddBookmark);