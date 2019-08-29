import React, {
  Component,
  Fragment,
}                    from 'react';
import {
  Route,
  Switch,
}                    from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Formation     from './components/page/Formation';
import MainMenu      from './components/display/MainMenu';
import Players       from './components/page/Players';

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
              component={Formation}
              exact
              path='/'
            />
            <Route
              component={Players}
              path='/players'
            />
          </Switch>
        </Container>
      </Fragment>
    );
  }

}

export default App;
