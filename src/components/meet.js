import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testimage from './assets/not.png';
import motimage from './assets/mot.png';
import yotimage from './assets/yot.png';
import moiimage from './assets/moi.png';
import toiimage from './assets/toi.png';
import Card from 'react-bootstrap/Card';
import './meet.css';

function Meet(){
    return(
        <div>
        <h1>Meet Our Great Doctors</h1>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br />
            eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
          </p>
          <br />
  
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card className="border-0" style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>
                    <img src={testimage} alt="not" />
                  </Card.Title>
                  <div className="image-column1">
                    <div className="title1">
                      <h4>DR.Lindsey Botosh</h4>
                      pediatician
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
  
            <Col xs={12} sm={6} md={4}>
              <Card className="border-0" style={{ width: '100%' }}>
                <Card.Body>
                  <div className="image-column2">
                    <img src={yotimage} alt="yot" />
                    <div className="title2">
                      <h4>Dr.jon Doe</h4>
                      Dentist
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
  
            <Col xs={12} sm={6} md={4}>
              <Card className="border-0" style={{ width: '100%' }}>
                <Card.Body>
                  <div className="image-column3">
                    <img src={motimage} alt="mot" />
                    <div className="title3">
                      <h4>DR.Lindney Botosh</h4>
                      Cardiologist
                    </div>
                    <div className="title5">
                      <img src={toiimage} alt="toi" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="title4">
                <img src={moiimage} alt="moi" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  
    
}
export default Meet;