import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import App from './App';
import './index.css';

import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId="685b3283-f5d4-447b-b3e8-396acea721a9" language="en-US">
        <Provider>
        <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);