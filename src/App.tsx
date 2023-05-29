import { useState } from 'react';
import './App.css';
import HeatmapHistogramChart from './pages/Check';
import HeatmapChart from './components/charts/HeatMap';
import HistogramChart from './components/charts/Histogram';
import RealTimeChart from './components/charts/RealTimeChart';
import BarChart from './components/charts/BarChart';
import Annotation from './components/charts/Annotation';
import BarAnnotation from './components/charts/BarAnnotation';
import XRangeChart from './components/charts/Xseries';

function App() {

  return (
    <>
      {/* <HeatmapHistogramChart /> */}
      <BarAnnotation />
      <Annotation />
      <HeatmapChart />
      <HistogramChart />
      <RealTimeChart />
      <BarChart />
      <XRangeChart />
    </>
  );
}

export default App;
