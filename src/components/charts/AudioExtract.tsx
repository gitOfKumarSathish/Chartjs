import Wavesurfer from "wavesurfer.js";
import { useEffect, useRef } from "react";

const Waveform = ({ url }) => {
    const waveform = useRef();

    useEffect(() => {
        // Check if wavesurfer object is already created.
        if (!waveform.current) {
            // Create a wavesurfer object
            // More info about options here https://wavesurfer-js.org/docs/options.html
            waveform.current = Wavesurfer.create({
                container: "#waveform",
                // "height": 128,
                // "width": 500,
                // "waveColor": "#ff4e00",
                // "progressColor": "#dd5e98",
                // "cursorColor": "#ddd5e9",
                // "cursorWidth": 2,
                // "barWidth": null,
                // "barGap": null,
                // "barRadius": null,
                // "barHeight": null,
                // "minPxPerSec": 1,
                // "fillParent": true,
                // "media": {},
                // "autoplay": false,
                // "interact": true,
                // "hideScrollbar": false,
                // "audioRate": 1,
                // "autoScroll": true,
                // "autoCenter": true,
                // "sampleRate": 8000
            });
            // Load audio from a remote url.
            waveform.current.load(url);
            /* To load a local audio file
                  1. Read the audio file as a array buffer.
                  2. Create a blob from the array buffer
                  3. Load the audio using wavesurfer's loadBlob API
           */
        }
    }, []);

    const playAudio = () => {
        // Check if the audio is already playing
        if (waveform.current.isPlaying()) {
            waveform.current.pause();
        } else {
            waveform.current.play();
        }
    };

    return (
        <div style={{ width: '1000px' }}>
            <div id="waveform" />
            <button onClick={playAudio}>
                Play / Pause
            </button>
        </div>
        // <Flex flexDirection="column" w="100%">

        //     <Flex flexDirection="row" justifyContent="center">
        //         <Button m="4" onClick={playAudio}>
        //             Play / Pause
        //         </Button>
        //     </Flex>
        // </Flex>
    );
};

export default Waveform;
