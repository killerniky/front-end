import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import LocatieOverview from '../Locaties/LocatieOverview';
import LocatieDetail from '../LocatieDetail/LocatieDetail';
import Header from '../Header/Header';
import LocatieAdd from '../LocatieAdd/LocatieAdd';
import LocatieEdit from '../LocatieEdit/LocatieEdit';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/locaties' component={LocatieOverview} />
        <Route exact path='/locaties/add' component={LocatieAdd} />
        <Route path='/locaties/detail/:id' component={LocatieDetail} />
        <Route path='/locaties/edit/:id' component={LocatieEdit} />

      </div>
    );
  }
}

export default App;
