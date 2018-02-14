import React, { Component, Fragment } from 'react';
import logo from './component/logo.png'
import './App.css';
import Movies from './component/Movies';
import People from './component/People';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
class App extends Component {
  
  renderLoading(){
    return(
      <div className="llink">
        <img 
          src={ logo }
          alt="monster"
        />
    <Link to='/films'> Look at all the Movies___ </Link>


    <Link to='/people'> Look at all the people </Link>
  </div>
    )
  }
  
  render() {
    return (
      <BrowserRouter>

      <Fragment>

        { this.renderLoading() }
        <Switch>
          <Route exact path='/films' component={ Movies } />

          <Route exact path='/people' component={ People } />

        </Switch>

      </Fragment>  

      </BrowserRouter>
    );
  }
}

export default App;
