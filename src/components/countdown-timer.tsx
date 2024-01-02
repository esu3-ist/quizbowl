import { useTimer } from 'react-timer-hook';
import Stack from 'react-bootstrap/Stack';
import { useRef } from 'react';

const longTimeSfx = require('./assets/audio/short-nuisance-alarm-long-modified.mp3');

export function Timer({ expiryTimestamp }: {expiryTimestamp: Date}) {
    const longAudioRef = useRef<HTMLAudioElement>(null);

    let longAudio = new Audio('/quizbowl/static/media/short-nuisance-alarm-long-modified.fce1f3ee839591ae86b5.mp3');
    const playLongAudio = () => {
      longAudio.play();
    }  

    const {
        seconds,
        minutes,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {return playLongAudio()},autoStart: false });


    return (
        <div style={{ textAlign: 'center' }}>
        <div>
        <audio src={longTimeSfx} ref={longAudioRef} id="long-timer"/>
        </div>
            <div style={{ fontSize: '100px' }}>
                <span>{minutes > 9 ? minutes : '0' + minutes}</span>:
                <span>{seconds > 9 ? seconds : '0' + seconds}</span>
            </div>
            <div className="text-center justify-content-center ms-5">
            <Stack direction="horizontal" gap={1}>
                
                    <button onClick={resume}>Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={() => {
                        // Restarts to 15 minutes timer
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + 900);
                        restart(time, false)
                    }}>Restart</button>
            </Stack>
            </div>
        </div>
    );
}