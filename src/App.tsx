// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';


import { CountdownCircleTimer, Utils } from 'react-countdown-circle-timer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import {Timer} from './components/countdown-timer';

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

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="App">
      <Container className="p-3">

        <h1 className="header">
          QuizBowl
        </h1>
        <Container className="p-5 mb-4 bg-light rounded-3">
      <Row className="mx-auto">
        <Col md={6} className="my-auto">
        <QuizRoundButton />

        <Timer expiryTimestamp={time}/>
        </Col>
        <Col md={6} className="mx-auto">
          <Stack gap={3}>
          <CountdownCircleTimer
            key={key}
            isPlaying={play}
            duration={10}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>

          <Stack direction="horizontal" gap={1}>
          <button onClick={() => !play ? setPlay(true) : setPlay(false)}>
            {play ? "Pause" : "Start"}
          </button>
          <button onClick={() => setKey(prevKey => prevKey + 1)}>
            Restart
          </button>
          </Stack>
          </Stack>
  
        </Col>
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
