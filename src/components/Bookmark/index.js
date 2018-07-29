import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {browserHistory, Link} from 'react-router';
import { Table,Button } from 'antd';
import { getBookmarks,logout,deleteBookmark } from '../../redux/actions/bookmark';
import AddBookmarkComponent from './AddBookmark';
class Bookmark extends Component{
    constructor(){
        super();
        this.state = {
            bookmark : [],
            addBookmark : false,
            editBookmark : false,
            editdata : {}
        }
    }
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(getBookmarks());
    }
    componentWillReceiveProps(props){
        let temp = [];
        _.map(props.bookmark,function(v,k){
            temp.push(v);
        })
        this.setState({bookmark : temp});
    }
    toggleEditVisiblity = (value) =>{
        const { editBookmark,editdata } = this.state;
        this.setState({editBookmark : !editBookmark,editdata : value });
    }
    removeToken = () =>{
        const { dispatch } = this.props;
        dispatch(logout());deleteBookmark
    }
    toggleVisiblity = () =>{
        const {addBookmark} = this.state;
        this.setState({addBookmark : !addBookmark });
    }
    bookmarkDelete = (id) =>{
        const { dispatch } = this.props;
        dispatch(deleteBookmark(id));
    }
  
    render(){

       const { bookmark,addBookmark,editBookmark ,editdata } = this.state;
        const columns = [{
            title: 'URL',
            dataIndex: 'url',
            key: 'url',
            render : (record,index) =>{
                return(
                    <div>
                        <Link to = {'https://' + record } target="_blank" > {record}</Link>
                    </div>
                )
            }
          }, {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          }, {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
          }, {
            title: 'Action',
            key: 'action',
            render : (record,index) =>{
                return (
                    <div>
                        <Button onClick = {()=> this.toggleEditVisiblity(record)} >Edit</Button>
                        <Button onClick = {()=> this.bookmarkDelete(record._id)}>Delete</Button>
                    </div>
                )
            }
          }];
        return(
            <div>
                <h1> Bookmark Manager </h1><br/><br/>
                <button onClick = {() =>this.toggleVisiblity()}>Add Bookmark</button>
                <button onClick = {() =>this.removeToken() }> Logout </button>
                <Table columns={columns} dataSource={bookmark} />
                { addBookmark && <AddBookmarkComponent visiblity={ addBookmark } onClose={ this.toggleVisiblity.bind(this) } /> }
                { editBookmark && <AddBookmarkComponent visiblity={ editBookmark }  onClose={ this.toggleEditVisiblity.bind(this) }  value = {editdata} /> }

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {bookmark : state.bookmark.bookmark.data };
}
export default connect(mapStateToProps)(Bookmark);
