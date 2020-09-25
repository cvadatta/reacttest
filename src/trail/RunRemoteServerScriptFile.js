import React, { useEffect } from 'react';

function RunRemoteServerScriptFile() {

  useEffect(() => {
    const getFile = async () => {
      const url = "https://raw.githubusercontent.com/cvadatta/JAVA-SCRIPT_FILES/master/hellow.js";
      const response = await fetch(url);
      const scriptText = await response.text();
      eval(scriptText);
    }
    getFile();
  },[]);

  return (
    <div>

    <h1>If You did not submit the file!...No problem...JS file is loading from the server!!......</h1>
      <h1>Running java script file from the server!!...check the console!!</h1>

    </div>
  );
}

export default RunRemoteServerScriptFile;