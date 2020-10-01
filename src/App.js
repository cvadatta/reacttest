import React from 'react';
//importing js function
import Hello from './trail/Hello';
import Json from './trail/Kson';
import './App.css';
import RunRemoteScriptFile from './trail/RunRemoteScriptFile';
import RunRemoteServerScriptFile from './trail/RunRemoteServerScriptFile';

 class App extends React.Component{
  async postData(){
    try{
      let result=await fetch('https://egov-micro-dev.egovernments.org/egov-mdms-service/v1/_search',{
        method: 'POST',
        mode: 'no-cors',
        credentials: "include",
        headers: {
            'Accept':'application/json',
            'content-type':'application/json',
        },
        body: JSON.stringify(
           {
             "RequestInfo": {},
             "MdmsCriteria": {
               "tenantId": "pb",
               "moduleDetails": [
                 {
                   "moduleName": "tenant",
                   "masterDetails": [
                     {
                       "name": "tenants",
                       "filter": "$.*.code"
                     }
                   ]
                 }
               ]
             }
           }

        )
      });

      console.log(result);
    }
    catch(e){
        console.log(e);
    }

  }
  render(){
    return (
        <div className="App">

          <Hello name="Siva Datta" />

          <Json />

          <button onClick={()=>this.postData()}>Click Here to post on Egovt website </button>




          <h1>Please submit the javascript file below to execute</h1>
          <RunRemoteScriptFile />


          <footer>
          <RunRemoteServerScriptFile />
          </footer>

        </div>
    );
  }
}

export default App;
