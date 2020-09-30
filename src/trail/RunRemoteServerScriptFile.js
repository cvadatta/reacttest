import React, { useEffect , useState} from 'react';

function RunRemoteServerScriptFile() {
  const [count, setcount]=useState(0);

  function increment(){
     setcount(prevcount=>prevcount+1);
  }

  useEffect(() => {
    const getFile = async () => {
      const url = "https://raw.githubusercontent.com/cvadatta/JAVA-SCRIPT_FILES/master/hellow.js";
      const response = await fetch(url);
      const scriptText = await response.text();
      eval(scriptText);
    }
    getFile();
  },[count]);

  return (
    <div>

    <h1>If You did not submit the file!...No problem...To load Js file from Server Click below.</h1>
    <button onClick={increment}>LOAD</button>
      <h1>Running java script file from the server!!...check the console!!</h1>

    </div>
  );
}

export default RunRemoteServerScriptFile;