//Importing React and other modules

import React, { Component } from 'react';
import Jobs from './components/Jobs'
import './css/App.css'

/**App Component contains Job */
class App extends Component {

  //Renders job component to the Dom
  render() {
    return (
      <div>
         <Jobs/>
      </div>
    );
  }
}

export default App;
