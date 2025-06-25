import { useTimer } from 'react-timer-hook';
import Stack from 'react-bootstrap/Stack';
import { useRef, useMemo } from 'react';

import longTimeSfx from './assets/audio/short-nuisance-alarm-long-modified.mp3';

export function Timer({ expiryTimestamp }: {expiryTimestamp: Date}) {
    const longAudioRef = useRef<HTMLAudioElement>(null);

    let longAudio = useMemo(() => new Audio(longTimeSfx), []);
    const playLongAudio = () => {
        longAudio.currentTime = 0; // Reset audio to start
        longAudio.play().catch(err => console.warn('Audio blocked', err));
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