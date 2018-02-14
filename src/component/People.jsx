import React, { Component } from 'react';
import PeopleList from './PeopleList';
class People extends Component{
    constructor(props){
        super(props)
        this.state = {
            people:[]
        };
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/people')
        .then((res) =>{
            return res.json()
        })
        .then((people)=>{
            this.setState({
                people
            });
        }).catch((err)=>{
           this.setState({
            hasError: true,
            error: err
           });
        })
    }
    render(){
        return (<PeopleList people={ this.state.people }/>)
    }
} 

export default People;