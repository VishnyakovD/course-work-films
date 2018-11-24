import React, { Component } from 'react';
import Root from './components'


// Styles
import './styles/index.css';
import './styles/app.css';
/*
  Это тот самый компонент в котором стоит подключать все ваши обертки, Общие стили и т.д
*/


/*
  Redux
*/
import { Provider } from "react-redux";
import store from './redux/store';
/*
  Stuff
*/
import { BrowserRouter } from 'react-router-dom';

const supportsHistory = 'pushState' in window.history;

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter forceRefrech={!supportsHistory}>        
            <Root/>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
