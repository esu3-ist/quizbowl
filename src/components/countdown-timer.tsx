import React from 'react';
import { useTimer } from 'react-timer-hook';
import Stack from 'react-bootstrap/Stack';

export function Timer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{minutes > 9 ? minutes : '0' + minutes }</span>:
        <span>{seconds > 9 ? seconds : '0' + seconds }</span>
      </div>
      <Stack direction="horizontal" gap={1}>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
      }}>Restart</button>
      </Stack>
    </div>
  );
}