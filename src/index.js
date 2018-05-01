import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line
import particlesJS from 'particles.js/particles';

import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
