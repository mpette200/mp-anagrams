import InputForm from './InputForm';
import OutputBox from './OutputBox';
import PageBound from './PageBound';
import TopBanner from './TopBanner';
import { useState } from 'react';
import { PressEvent } from 'react-aria-components';


function App() {
  const [wasmRunning, setWasmRunning] = useState(false);
  const [scriptRunning, setScriptRunning] = useState(false);

  const handleWasm = (e: PressEvent) => {
    setWasmRunning(!wasmRunning);
  };

  const handleScript = (e: PressEvent) => {
    setScriptRunning(!scriptRunning);
  };

  return (
      <PageBound>
        <TopBanner><h1>Here You Can Search For Anagrams</h1></TopBanner>
        <InputForm wasmHandler={handleWasm} scriptHandler={handleScript}/>
        <OutputBox wasmRunning={wasmRunning} scriptRunning={scriptRunning} />
      </PageBound>
  );
}

export default App;
