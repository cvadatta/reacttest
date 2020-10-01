import React from 'react';
//importing js function
import Hello from './trail/Hello';
import Json from './trail/Kson';
import './App.css';
import RunRemoteServerScriptFile from './trail/RunRemoteServerScriptFile';
import FetchExample from './trail/FetchExample';

 class App extends React.Component{
  render(){
    return (
        <div className="App">

          <FetchExample />

          <footer>
          <RunRemoteServerScriptFile />
          </footer>

        </div>
    );
  }
}

export default App;
