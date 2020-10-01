import React from 'react';

const fr = new FileReader();

function readFileAndEvauluate(event) {
  const text = event.target.result;
  console.log(text);
  eval(text);

}

fr.onload = readFileAndEvauluate;

function RunRemoteScriptFile() {

  const getFile = (event) => {
    const selectedFile = event.target.files[0];
    fr.readAsText(selectedFile);
  }

  return (
    <div className="funky">
      <header className="funky-header">
        <input type="file" onChange={getFile} />
      </header>
    </div>
  );
}

export default RunRemoteScriptFile;