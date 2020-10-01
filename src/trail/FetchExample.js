import React from 'react';

class FetchExample extends React.Component {
  componentDidMount() {
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

    }
    fetch('https://egov-micro-dev.egovernments.org/egov-mdms-service/v1/_search', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default FetchExample;