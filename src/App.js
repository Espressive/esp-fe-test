import React, {
  Component,
  Fragment,
}               from 'react';
import {
  Switch,
  Route,
}               from 'react-router-dom';
import {
  Header,
  Container,
}               from 'semantic-ui-react';
import MainMenu from './components/display/MainMenu';

class App extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    return (
      <Fragment>
        <MainMenu />
        <Container style={{ paddingTop: '64px' }}>
          <Switch>
            <Route
              exact
              path='/'
            >
              <Header content='Home' />
            </Route>
            <Route
              exact
              path='/team'
            >
              <Header content='Team' />
            </Route>
          </Switch>
        </Container>
      </Fragment>
    );
  }

}

export default App;
