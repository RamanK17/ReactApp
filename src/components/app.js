import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Main from "./main";
import CardsIndexComponent from "./cardIndexComponent";

class App extends React.Component {
   constructor(props){
       super(props);
   }
   render() {
    return (
        <MuiThemeProvider>
            <div>
                <AppBar
                    title="Incredible India"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    className="appBar"
                    style={{position: "fixed"}}
                    iconClassNameLeft="iconLeft"
                    onTitleClick={()=>{this.context.router.history.push("/")}}
                    titleStyle={{cursor:"pointer"}}
                />
                <div className="main mui-container">
                    <Main />
                </div>
            </div>
        </MuiThemeProvider>
      );
   }
}

App.contextTypes = {
    router: PropTypes.object
};

export default App;