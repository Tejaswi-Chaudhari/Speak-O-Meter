import React from 'react'
import { Container, Col, Row, Figure } from 'react-bootstrap'
import "./Review.css";
import img1 from "./images/lady1.jpg";
import img2 from "./images/guy1.jpg";
import img3 from "./images/lady2.jpg";

const Review = () => {
    return (
        <Container>
            <h3 className="display-6" align="center"><strong>Reviews</strong></h3>
            <Col xs={12} md={9} className="col1">
                <Row className="rowOne">
                    <Col xs={12} md={3}>
                        <Figure>
                            <Figure.Image
                                className="img imgOne"
                                width={171}
                                height={200}
                                alt="171x180"
                                src={ img1 }
                            />
                        </Figure> 
                    </Col>
                    <Col xs={12} md={9}>
                        <h4>Mrs. Marilyn Swift</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</h6>
                        <h5>⭐⭐⭐⭐⭐</h5>
                    </Col>
                </Row>
            </Col>
            <hr />
            <Col xs={12} md={{ span: 9, offset: 3 }}>
                <Row className="rowTwo">
                    <Col xs={12} md={9}>
                        <h4>Mr. Juned Raza</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</h6>
                        <h5>⭐⭐⭐⭐⭐</h5>                
                    </Col>
                    <Col xs={12} md={3}>
                        <Figure>
                            <Figure.Image
                                className="img imgTwo"
                                width={171}
                                height={200}
                                alt="171x180"
                                src={ img2 }
                            />
                        </Figure>
                    </Col>
                </Row>
            </Col>
            <hr />
            <Col xs={12} md={9}>
                <Row className="rowOne">
                    <Col xs={12} md={3}>
                        <Figure>
                            <Figure.Image
                                className="img imgOne"
                                width={171}
                                height={200}
                                alt="171x180"
                                src={ img3 }
                            />
                        </Figure>
                    </Col>
                    <Col xs={12} md={9}>
                        <h4>Ms. Sanskriti Kushik</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</h6>
                        <h5>⭐⭐⭐⭐⭐</h5>                
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default Review
