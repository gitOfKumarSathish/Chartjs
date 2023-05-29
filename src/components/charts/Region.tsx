import Wavesurfer from "wavesurfer.js";
import { useEffect, useRef, useState } from "react";
import * as WaveformRegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions";
import randomColor from "randomcolor";

const RegionWaveform = ({ url }) => {
    const waveform = useRef();
    const [zoomer, setZoomer] = useState(10);
    console.log('zoomer', zoomer);
    const random = (min, max) => Math.random() * (max - min) + min;
    const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`;

    useEffect(() => {
        if (!waveform.current) {
            console.log(' waveform.current', waveform.current);
            waveform.current = Wavesurfer.create({
                container: "#waveform",
                waveColor: "#567FFF",
                barGap: 2,
                barWidth: 3,
                barRadius: 3,
                cursorWidth: 3,
                cursorColor: "#567FFF",
                minPxPerSec: 100,
                // Add the regions plugin.
                // More info here https://wavesurfer-js.org/plugins/regions.html
                plugins: [WaveformRegionsPlugin.create({ maxLength: 190 })],
            });
            waveform.current.load(url);

            // =========== ADDED =========

            // Enable dragging on the audio waveform
            waveform.current.enableDragSelection({
                maxLength: 90,
            });
            // Perform action when new region is created
            // waveform.current.on("region-created", (e) => {
            //     // let color = randomColor({
            //     //     luminosity: "light",
            //     //     alpha: 0.3,
            //     //     format: "rgba",
            //     // });
            //     // e.color = color;
            // });
            let loop = true;
            let activeRegion = null;
            waveform.current.on('region-click', (region, e) => {
                e.stopPropagation(); // prevent triggering a click on the waveform
                activeRegion = region;
                // waveform.current.play();
                region.play();
                region.color = randomColor();
                console.log('region-clicked', region);
            });



            // // Track the time
            // waveform.current.on('timeupdate', (currentTime) => {
            //     // When the end of the region is reached
            //     if (activeRegion && waveform.current.isPlaying() && currentTime >= activeRegion.end) {
            //         if (loop) {
            //             // If looping, jump to the start of the region
            //             waveform.current.setTime(activeRegion.start);
            //         } else {
            //             // Otherwise, exit the region
            //             activeRegion = null;
            //         }
            //     }
            // });

            // Update the zoom level on slider change
            waveform.current.on('decode', () => {
                console.log('object');
            });

            // waveform.current.once('decode', () => {
            //     const slider = document.querySelector('input[type="range"]');

            //     slider.addEventListener('input', (e) => {
            //         const minPxPerSec = e.target.valueAsNumber;

            //     });
            // });
        }

        // =========== ADDED =========
    }, []);

    useEffect(() => {
        waveform.current.zoom(zoomer);
    }, [zoomer]);


    //    ========== ADDED ===========;

    // delete a particular region
    const deleteClip = (clipid) => {
        waveform.current.regions.list[clipid].remove();
    };

    // play a particular region
    const playClip = (clipid) => {
        waveform.current.regions.list[clipid].play();
    };

    //   ========== ADDED ===========

    const playAudio = () => {
        if (waveform.current.isPlaying()) {
            waveform.current.pause();
        } else {
            waveform.current.play();
        }
    };



    return (
        <div style={{ width: '1000px' }}>
            <div id="waveform" />
            <input type="range" id="vol" name="vol" min="0" max="100" value={zoomer} onChange={(e) => setZoomer(e.target.value)} /> Zoom Level
            <button onClick={playAudio}>
                Play / Pause
            </button>
        </div>
    );
};

export default RegionWaveform;

