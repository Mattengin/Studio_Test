import React, { Component } from 'react';
import MovieList from './MovieList';
class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            films:[]
        };
    }
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) =>{
            return res.json()
        })
        .then((films)=>{
            this.setState({
                films
            });
        }).catch((err)=>{
            this.setState({
                hasError: true,
                error: err
            })
        })
    }
    render(){
        return (<MovieList films={ this.state.films }/>)
    }
} 

export default Movies;