import { useState } from 'react';
import './App.css';
import HeatmapHistogramChart from './pages/Check';
import HeatmapChart from './components/charts/HeatMap';
import HistogramChart from './components/charts/Histogram';
import RealTimeChart from './components/charts/RealTimeChart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HeatmapHistogramChart /> */}
      <HeatmapChart />
      <HistogramChart />
      <RealTimeChart />
    </>
  );
}

export default App;
