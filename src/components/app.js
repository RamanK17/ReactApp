import React from 'react';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from "./main";


class App extends React.Component {
   constructor(props){
       super(props);
   }
   render() {
    return (
        <MuiThemeProvider>
            <div style={{marginTop:"35px"}} className="mui-container">
                <Main />
            </div>
        </MuiThemeProvider>
      );
   }
}
export default App;