import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Menu from './components/Menu';
import Controls from './components/Controls';

import "./styles/app.scss";

import Home from './routes/Home'
import Investigate from './routes/Investigate'
import NotFound from './routes/NotFound'
import Page from './routes/Page'
import Journals from './routes/Journals'
import JournalPost from './routes/JournalPost'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  
  render() {
    return <Router>
        <React.Fragment>
          <Menu show={this.state.showMenu} />
          <Controls showMenuHandler={this.showMenu} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/investigate" component={Investigate} />
            <Route exact path="/journals" component={Journals} />
            <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={this.props.prismicCtx} />} />

            <Route exact path="/journals/:container/:uid" render={routeProps => <JournalPost {...routeProps} prismicCtx={this.props.prismicCtx} />} />

            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>;
  }
}

export default App;
