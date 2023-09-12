// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';


import { CountdownCircleTimer, Utils } from 'react-countdown-circle-timer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { Timer } from './components/countdown-timer';
import { Scoreboard } from './components/scoreboard';

import './App.css';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="text">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function QuizRoundButton() {
  return (
    <>
      <Button onClick={() => doSomething()}>Start Round</Button>
    </>
  )
}

function RoundTimer() {
  <div className="timer">
    Round Timer
  </div>
}

function SettingsRow() {
  return (
    <div>
      Settings
    </div>
  )
}

function QuizRoomRow({ room }) {
  return (
    <tr>
      <th>
        {room}
      </th>
    </tr>
  )
}

function App() {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(0);
  const [key2, setKey2] = useState(0);
  const [play2, setPlay2] = useState(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 900); // 15 minutes timer

  return (
    <div className="App">
      <Container className="p-1">
        <h1 className="header">
          QuizBowl
        </h1>
        <Container className="p-3 mb-4 bg-light rounded-3 text-center">
          <Row className="text-center">
              <h3>Room Name</h3>
            </Row>
          <hr/>
          <Row className="m-auto">
            <Col className="text-center justify-content-center">
              { /*Round Timer */}
              <Timer expiryTimestamp={time} />

            </Col>
            { /* Spacer Column */}
            <Col></Col>

            { /* Question Timers - Top: 20sec, Bottom: 10sec */}
            <Col className="text-center justify-content-center">
            <Stack gap={3}>
                <CountdownCircleTimer
                  key={key}
                  isPlaying={play}
                  duration={20}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[20, 15, 10, 0]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                  {renderTime}
                </CountdownCircleTimer>
                <div className="ms-4">
                <Stack direction="horizontal" gap={1}>
                  <button onClick={() => !play ? setPlay(true) : setPlay(false)}>
                    {play ? "Pause" : "Start"}
                  </button>
                  <button onClick={() => setKey(prevKey => prevKey + 1)}>
                    Restart
                  </button>      
                </Stack>
                </div>
              </Stack>
            </Col>
            { /* 10sec Question Timer */}
            <Col className="text-center justify-content-center">
              <Stack gap={3}>
                <CountdownCircleTimer
                  key={key2}
                  isPlaying={play2}
                  duration={10}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[10, 6, 3, 0]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                  {renderTime}
                </CountdownCircleTimer>
                <div className="ms-4">
                <Stack direction="horizontal" gap={1}>
                  <button onClick={() => !play2 ? setPlay2(true) : setPlay2(false)}>
                    {play2 ? "Pause" : "Start"}
                  </button>
                  <button onClick={() => setKey2(prevKey => prevKey + 1)}>
                    Restart
                  </button>      
                </Stack>
                </div>
              </Stack>
              
            </Col>
          </Row>
          <Row></Row>
          <Row>
        { /* Scoreboard */}
        <Scoreboard/>

        </Row>
        </Container>

        <Row>
          <div className="footer">
            Hosted by ESU3
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
