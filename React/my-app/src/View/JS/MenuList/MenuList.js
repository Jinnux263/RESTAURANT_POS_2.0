import { Card, Button, Row, Col, Modal, Container, Figure, Image} from 'react-bootstrap';
import { useState } from 'react';
import '../../CSS/Menu.css'

function MenuList(props) {
    //console.log(props)
    const [show, setShow] = useState(false);
    const [itemPopup, setItemPopup] = useState(props.Mlist[0])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePopup = (item) => setItemPopup(item)


    return (
        <>

        {
            //The Meal list
        }
        <div className="grid">
            {props.Mlist.map( (MealInfo , index) => {
                return (
                    
                    <Card style={{ width: '18rem' }} key={index} className="box" onClick={() => {handlePopup(MealInfo); handleShow()}}>
                        <Card.Img variant="top" src={MealInfo.image} className = "card-img-top" />
                        <Card.Body>
                            <Card.Title>
                                {MealInfo.title}
                            </Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        ${MealInfo.price}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Button variant="primary" className="btn" onClick = {(e) => {e.stopPropagation(); props.handlefunc(MealInfo)}}>Add</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    )
                }    
            )}
        </div>

        {
            /*
            Popup when click to meal
            */
        }
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>ADD TO CART</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Container >
                                <Row>
                                    <Image src={itemPopup.image} rounded className="DetailImgContainer"/>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs={6} md={8}>
                            <Row className = "boldText">
                                <Col>ID</Col>
                                <Col>{itemPopup.title}</Col>
                                <Col>Unit Price</Col>
                            </Row>
                            <Row>
                                <Col>{itemPopup.id}</Col>
                                <Col></Col>
                                <Col>{itemPopup.price}</Col>
                            </Row>
                            <Row className="DetailQuantity">
                                <Col>Quantity</Col>
                                <Col></Col>
                                <Col>0</Col>
                            </Row>
                            <Row className="Mealdetail">
                                <Row>Protein:</Row>
                                <Row>Assitives:</Row>
                                <Row>Baking material:</Row>
                                <Row>Food decoration:</Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {() => {props.handlefunc(itemPopup); handleClose()}}>
                    Add this meal to cart
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default MenuList