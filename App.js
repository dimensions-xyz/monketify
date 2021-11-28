import React, { Component } from 'react';
import Router from './src/navigation/Router';
import { Provider } from 'mobx-react';
import SongStateStore from './src/store/SongStateStore';

export default class App extends Component {

  render() {

    return (
      <Provider songStateStore={SongStateStore}>
        <Router />
      </Provider>
    );

  }

}