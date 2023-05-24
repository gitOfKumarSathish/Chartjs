import { useState } from 'react';
import './App.css';
import HeatmapHistogramChart from './pages/Check';
import HeatmapChart from './components/charts/HeatMap';
import HistogramChart from './components/charts/Histogram';
import RealTimeChart from './components/charts/RealTimeChart';
import BarChart from './components/charts/BarChart';

function App() {

  return (
    <>
      {/* <HeatmapHistogramChart /> */}
      <HeatmapChart />
      <HistogramChart />
      <RealTimeChart />
      <BarChart />
    </>
  );
}

export default App;
