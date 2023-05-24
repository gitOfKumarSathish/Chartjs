import { useState } from 'react';
import './App.css';
import HeatmapHistogramChart from './pages/Check';
import HeatmapChart from './components/charts/HeatMap';
import HistogramChart from './components/charts/Histogram';
import RealTimeChart from './components/charts/RealTimeChart';
import BarChart from './components/charts/BarChart';
import SpectrogramChart from './components/charts/Spectogram';
import WaterfallChart from './components/charts/WaterfallChart';
import TimelineChart from './components/charts/TimelineChart';
import HeatmapChart2 from './components/charts/HeatMap2';

function App() {

  return (
    <>
      {/* <HeatmapHistogramChart /> */}
      <HeatmapChart />
      <HeatmapChart2 />
      <TimelineChart />
      <SpectrogramChart />
      <WaterfallChart />
      <HistogramChart />
      <RealTimeChart />
      <BarChart />
    </>
  );
}

export default App;
