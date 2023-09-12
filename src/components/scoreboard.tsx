import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';



export function Scoreboard() {
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    return (
        <Container>
            <hr/>
            <Row>
                <Col>
                    <h3>Team Name1</h3>
                    <p>
                        <h4>Score: {score1}</h4>
                    </p>
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
                    <h3>Team Name2 </h3>
                    <p>
                        <h4>Score: {score2}</h4>
                    </p>
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
        </Container>
    );
}