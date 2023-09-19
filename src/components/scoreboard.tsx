import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


export function Scoreboard() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const [team1, setTeamName1] = useState('Team Name1');
    const [team2, setTeamName2] = useState('Team Name2');

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (
        <Container>
            <hr />
            <Row>
                <Col>
                    <h3>{team1}
                        <div className="icon baseline">
                            <FontAwesomeIcon
                                icon={faCirclePlus}
                                onClick={handleShow1}
                            />
                        </div>
                    </h3>
                    <h4>Score: {score1}</h4>
                    <Row>
                        <div className="btn-group" role="group">
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore1(score1 + 1)}
                            >
                                +1
                            </Button>
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore1(0)}
                            >
                                Reset
                            </Button>
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore1(score1 - 5)}
                            >
                                -5
                            </Button>
                        </div>
                    </Row>
                </Col>
                <Col></Col>
                <Col>
                    <h3>{team2}
                        <div className="icon baseline">
                            <FontAwesomeIcon
                                icon={faCirclePlus}
                                onClick={handleShow2}
                            />
                        </div>
                    </h3>
                    <h4>Score: {score2}</h4>
                    <Row>
                        <div className="btn-group" role="group">
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore2(score2 + 1)}
                            >
                                +1
                            </Button>
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore2(0)}
                            >
                                Reset
                            </Button>
                            <Button variant="outline-primary" className="btn btn-outline-primary"
                                onClick={() => setScore2(score2 - 5)}
                            >
                                -5
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Team Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Team Name: <input 
                    type="text" 
                    defaultValue={team1} 
                    name="teamName1" 
                    onChange={e => setTeamName1(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Team Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Team Name: <input 
                    type="text" 
                    defaultValue={team2} 
                    name="teamName2" 
                    onChange={e => setTeamName2(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>

    );
}