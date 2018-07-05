import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import createStore from './store';
import themeReducer from './reducer';

const store = createStore(themeReducer);

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }
  
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;