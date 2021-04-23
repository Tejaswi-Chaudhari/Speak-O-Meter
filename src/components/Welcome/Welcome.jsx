import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import img from '../Images/welcome-page.jpg';
import "./Welcome.css";

const Welcome = () => {
    return (
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="order-1 order-lg-2 col md-6">
        //             <h1 className="display-1">
        //                 <strong>Welcome!</strong>
        //             </h1>
        //             <h2 className="my-3">
        //                 <p>Hello! Speech can be a major confidence booster for many people, This project aims on improving your speech through different exercises and add a brighter element to your personality</p>
        //             </h2>
        //         </div>
        //         <div className="order-2 order-lg-1 col md-6">
        //             <div className="img-responsive">
        //             <Image src={img} alt="home img" fluid/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Container>
            <Row>
                <Col xs={12} md={6} className="col1">
                    <h1 className="display-1">
                        <strong>Welcome!</strong>
                    </h1>
                    <p>Hello! Speech can be a major confidence booster for many people, This project aims on improving your speech through different exercises and add a brighter element to your personality</p>
                </Col>
                <Col xs={12} md={6}>
                    <Image src={img} alt="home img" fluid/>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome