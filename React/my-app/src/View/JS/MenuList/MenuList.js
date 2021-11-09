import { Card, Button, Row, Col, Modal, Container, Image} from 'react-bootstrap';
import { useState } from 'react';
import '../../CSS/Menu.css'

function MenuList(props) {
    //console.log(props)
    const [show, setShow] = useState(false);
    const [itemPopup, setItemPopup] = useState({...props.Mlist[0], quantity: 1 })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePopup = (item) => setItemPopup({...item, quantity: 1})

    function handleMinus() {
        setItemPopup({...itemPopup, quantity: itemPopup.quantity - 1})
    }
    //console.log(itemPopup)
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
                                <Col xs = {6}>Quantity</Col>
                                <Col xs = {2}>
                                    <Button>-</Button></Col>
                                <Col xs = {2}>{itemPopup.quantity}</Col>
                                <Col xs = {1}>
                                    <Button>+</Button></Col>
                            </Row>
                            <Row className="Mealdetail">
                                <Row>Protein: {itemPopup.price}</Row>
                                <Row>Assitives: {itemPopup.price}</Row>
                                <Row>Baking material: {itemPopup.price}</Row>
                                <Row>Food decoration: {itemPopup.price}</Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {() => {props.handlefunc(itemPopup, itemPopup.quantity); handleClose()}}>
                    Add this meal to cart
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default MenuList