import react from 'react';
import { Container } from 'react-bootstrap';
import reactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import { RegistrationView } from './components/registration-view/registration-view';
// Import statement to indicate that you need to bundle './index.sccs'

import './index.scss';


//main component (will eventually use all the others)

class myFlixApplication extends react.Component {
render() {
return (
  <Container>

<MainView />
  </Container>
  
  ); 
 }
}

//finds root of the app
const container = document.getElementsByClassName('app-container')
[0];

// tells react to render the app in the root DOM element
reactDOM.render(react.createElement(myFlixApplication), container);