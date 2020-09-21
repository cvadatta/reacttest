import React from 'react';
//importing js functions
import Hello from './trail/Hello';
import Json from './trail/Kson';
import './App.css';

 class App extends React.Component{
  async postData(){
    try{
      let result=await fetch('https://egov-micro-dev.egovernments.org/egov-mdms-service/v1/_search',{
        method: 'POST',
        mode: 'no-cors',
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
          <h1>To Post the Data </h1>
          <button onClick={()=>this.postData()}>Click Here </button>
        </div>
    );
  }
}

export default App;
