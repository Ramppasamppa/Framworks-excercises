import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App 
                  applicationName={ "REACT SHOPPING LIST" }
                  applicationDescription= { "The best shopping app in the world!(Probably)" } />,
                document.getElementById('root'));


serviceWorker.unregister();
