import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Row, Col, Card } from 'react-bootstrap';

import data from '../../shared/Students.json';
import avatar from './avatar.png';
import './styles.css';

const CardsComp = () => {

    return (
        <div className="grid">
             <Row style={row_style}>
                {data.map((data, idx) => (
                    <Col xs={12} md={4} style={col_style} key={idx}>
                        <div className="cont">
                            <Zoom delay={100}>
                                <Fade delay={200}>
                                    <Card className="cards">
                                        <Card.Img variant="bottom" src={(data.image==='')?avatar:data.image} className="img" />
                                        <Card.Body>
                                        <Card.Title className="text">{ data.name }</Card.Title>
                                        <Card.Subtitle className="body">
                                            <a href={`https://www.instagram.com/${data.id}/`} className="a">
                                                { (data.id !=='') && `@${data.id}` }
                                            </a>
                                        </Card.Subtitle>
                                        </Card.Body>
                                    </Card>
                                </Fade>
                            </Zoom>
                        </div>
                    </Col>
                ))}
            </Row>
            
        </div>
    )
}

const row_style = {
    height: '100%',
    margin: 'auto',
    marginTop: '11vh',
    padding: '1%',
    maxWidth: '100%',
    flexGrow: '1'
}

const col_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%'
}

export default CardsComp
