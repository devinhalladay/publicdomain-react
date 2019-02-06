import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Menu from './components/Menu';
import Controls from './components/Controls';

import "./styles/app.scss";

import Home from './routes/Home'
import Investigate from './routes/Investigate'
import NotFound from './routes/NotFound'
import Journal from './routes/Journal'
import JournalPost from './routes/JournalPost'
import Systems from './routes/Systems'

class Container extends Component {
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
    return (
      <React.Fragment>
        <Menu show={this.state.showMenu} />
        <Controls showMenuHandler={this.showMenu} />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={600}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/investigate" component={Investigate} />
                  <Route exact path="/journal" component={Journal} />

                  <Route exact path="/journal/systems" component={Systems} />

                  <Route exact path="/journal/:container/:uid" render={routeProps => <JournalPost {...routeProps} prismicCtx={this.props.prismicCtx} />} />

                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </React.Fragment>
    )
  }
}
  
class App extends Component {
  render() {
    return <Router>
      <Container />
    </Router>
  }
}

export default App;
