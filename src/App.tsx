import { useState } from 'react';
import './App.css';
import HeatmapHistogramChart from './pages/Check';
import HeatmapChart from './components/charts/HeatMap';
import HistogramChart from './components/charts/Histogram';
import RealTimeChart from './components/charts/RealTimeChart';
import BarChart from './components/charts/BarChart';
import Annotation from './components/charts/Annotation';
import BarAnnotation from './components/charts/BarAnnotation';
import Waveform from './components/charts/AudioExtract';
import TimelineExample from './components/charts/AudioTimeLine';

// import audioSample from '../src/assets/Audio/xcheck.mp3';
import audioSample from '../src/assets/Audio/Sample.mp3';
import RegionWaveform from './components/charts/Region';
import XRangeChart from './components/charts/Xseries';
// import 'wavesurfer.js/dist/wavesurfer.min.css';
function App() {

  return (
    <>
      {/* <Waveform url={audioSample} /> */}
      {/* <RegionWaveform url={audioSample} /> */}
      {/* <TimelineExample /> */}
      <XRangeChart />
      {/* <HeatmapHistogramChart /> */}
      {/* <BarAnnotation />
      <Annotation />
      <HeatmapChart />
      <HistogramChart />
      <RealTimeChart />
      <BarChart /> */}
    </>
  );
}

export default App;
