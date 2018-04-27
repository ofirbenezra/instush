import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "react-image-gallery/styles/css/image-gallery.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// setup fake backend
import { configureFakeBackend } from './helpers';
// configureFakeBackend();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
