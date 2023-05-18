import { useState } from 'react';
import './App.css';
import ReactChart from './pages/Charts';
import Histogram from './pages/Histogram';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactChart />
      {/* <Histogram /> */}
    </>
  );
}

export default App;
