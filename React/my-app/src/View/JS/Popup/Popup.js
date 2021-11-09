import React from 'react'
import { Card, Button, Row, Col, Modal, Container, Figure, Image} from 'react-bootstrap';
import { useState } from 'react';
import '../../CSS/Menu.css'

function Popup(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ADD TO CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Container >
                                <Row>
                                    <Image src={props.itemPopup.image} rounded className="DetailImgContainer"/>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={6} md={8}>
                            <Row>
                                <Col>
                                    ID
                                </Col>
                                <Col>
                                    {props.itemPopup.title}
                                </Col>
                                <Col>
                                    Unit Price
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                {props.itemPopup.id}
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    {props.itemPopup.price}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Body>
            <Modal.Footer>
                <Button>
                    Add this meal to cart
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Popup
