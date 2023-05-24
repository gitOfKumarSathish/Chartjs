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
import LargeHeatmapChart from './components/charts/LargeHeatMap';
import LargeHeatMap2 from './components/charts/LargeHeatMap2';

function App() {

  return (
    <>
      {/* <HeatmapHistogramChart /> */}
      <LargeHeatMap2 />
      {/* <LargeHeatmapChart /> */}
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
