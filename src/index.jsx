import react from 'react';
import { Container } from 'react-bootstrap';
import reactDOM from 'react-dom';
import  MainView  from './components/main-view/main-view';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer  } from 'redux-devtools-extension';
// Import statement to indicate that you need to bundle './index.sccs'

import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());
// this will create the redux store!


//main component (will eventually use all the others)

class myFlixApplication extends react.Component {
render() {
return (
<Provider store={store}>
<Container>
<MainView />
  </Container>
  </Provider>
  ); 
 }
}

//finds root of the app
const container = document.getElementsByClassName('app-container')
[0];

// tells react to render the app in the root DOM element
reactDOM.render(react.createElement(myFlixApplication), container);