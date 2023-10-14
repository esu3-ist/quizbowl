import React, { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { Timer } from './components/countdown-timer';
import { Scoreboard } from './components/scoreboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function renderTime ({remainingTime}: {remainingTime: number}) {
  if (remainingTime === 0) {
    return <div className="timer">Times Up!</div>
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="text">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
}

function App() {
  const [key, setKey] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(false);
  const [key2, setKey2] = useState<number>(0);
  const [play2, setPlay2] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>('Room Name');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleRestart(prevKey: number, timerNum: number) {
    if (timerNum === 1){
    setKey(prevKey + 1);
    setPlay(false);
    } else {
    setKey2(prevKey + 1);
    setPlay2(false);
    }    
  }

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
              <div>
                <h3>{roomName}
                  <div className="icon baseline">
                    <FontAwesomeIcon 
                      icon={faCirclePlus}
                      onClick={handleShow}
                      rotation={90}/>
                  </div>
                </h3>
               
              </div>
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
                  onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                >
                  {renderTime}
                </CountdownCircleTimer>
                <div className="ms-4">
                <Stack direction="horizontal" gap={1}>
                  <button onClick={() => !play ? setPlay(true) : setPlay(false)}>
                    {play ? "Pause" : "Start"}
                  </button>
                  <button onClick={() => handleRestart(key, 1)}>
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
                  onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                >
                  {renderTime}
                </CountdownCircleTimer>
                <div className="ms-4">
                <Stack direction="horizontal" gap={1}>
                  <button onClick={() => !play2 ? setPlay2(true) : setPlay2(false)}>
                    {play2 ? "Pause" : "Start"}
                  </button>
                  <button onClick={() => handleRestart(key, 2)}>
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
          Developed and supported by ESU #3 Information Systems & Technology.
          </div>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Room Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Room Name: <input 
                    type="text" 
                    defaultValue={roomName} 
                    name="roomName" 
                    onChange={e => setRoomName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
    </div>
  );
}

export default App;
