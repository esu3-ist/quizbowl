import { useTimer } from 'react-timer-hook';
import Stack from 'react-bootstrap/Stack';

export function Timer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'),autoStart: false });


    return (
        <div style={{ textAlign: 'center' }}>
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