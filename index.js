import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './src/css/mui.min.css';
import './src/css/style.scss';
import App from './src/components/app.js';

render(

      <BrowserRouter>
          <App />
      </BrowserRouter>,
    document.getElementById('app')
);
