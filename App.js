import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardsIndexComponent from "./src/components/cardIndexComponent.js";//cards displaying on index page

class App extends React.Component {
   constructor(props){
       super(props);
   }
   render() {
      return (
            <MuiThemeProvider>
                <div style={{marginTop:"35px"}}>
                    <CardsIndexComponent data={this.props.app} />
                </div>
            </MuiThemeProvider>
      );
   }
}
export default App;