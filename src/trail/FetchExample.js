import React from 'react';
class FetchExample extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    submit()
    {
      let urlink='https://egov-micro-dev.egovernments.org/egov-mdms-service/v1/_search';
      let data = {
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
      };
      fetch(urlink,{
        method: 'POST',
        mode:'no-cors',
        headers: {
          'Accept':'application/json',
          'content-type':'application/json',
        },
        body:JSON.stringify(data)
      }).then((resp) => resp.json())
        .then(function(response) {
            console.info('fetch()', response);
            return response;
        });
      /*
      .then(response => response.json())
        .then(ans => console.log(ans));
      */
    }
    render(){
      return(
        <div>

        <h1>Post Api example</h1>
        <button onClick={()=>{this.submit()}}>Submit Data</button>

        </div>
      );
    }
}
export default FetchExample;