import { Card, Button, Row, Col, Modal, Container, Image} from 'react-bootstrap';
import { useState } from 'react';
import '../../CSS/Menu.css'

function MenuList(props) {
    //  console.log("MenuList")
    const [show, setShow] = useState(false);
    const [itemPopup, setItemPopup] = useState(props.Mlist[0])
    const [quantity, setQuantity] = useState(1)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlePopup = (item) => setItemPopup(item)

    function handleMinus() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
            setQuantity(1)
        }
        // Co the them truong hop else o day de cho nguoi dung khong khai thac duoc lo hong bang cach dat quantity am, neu quantity khong lon hon 0 thi luon dat quantity = 0 cho chac
        
    }
    function handleAdd() {
        setQuantity(quantity + 1)
    }
    function resetQuantity() {
        setQuantity(1)
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
                    
                    <Card key={index} className="box" onClick={() => {handlePopup(MealInfo); handleShow()}}>
                        <Card.Img variant="top" src={MealInfo.image} className = "card-img-top" />
                        <Card.Body>
                            <Card.Title>
                                {MealInfo.title}
                            </Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text style={{fontWeight:"bolder"}}>
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
                        <Col xs={2} md={4} lg={2}>
                                <Row>
                                    <Image src={itemPopup.image} rounded className="DetailImgContainer"/>
                                </Row>
                        </Col>
                        <Col xs={10} md={8} lg={10}>
                            <Row className = "boldText">
                                <Col xs={1}>ID</Col>
                                <Col xs={2}>Food name</Col>
                                <Col xs={3}>Unit Price</Col>
                            </Row>
                            <Row>
                                <Col xs={1}>{itemPopup.id}</Col>
                                <Col xs={2}>{itemPopup.title}</Col>
                                <Col xs={4}>{itemPopup.price}</Col>
                            </Row>
                            <Row className="DetailQuantity">
                            <Col xs = {2}>Quantity:</Col>
                                </Row>
                            <Row className="DetailQuantity">
                                <Col xs = {2} lg={1}>
                                    <Button onClick = {handleMinus}>-</Button></Col>
                                <Col xs = {2} lg={1}>{quantity}</Col>
                                <Col xs = {1} lg={1}>
                                    <Button onClick = {handleAdd}>+</Button></Col>
                            </Row>
                            <Row className="Mealdetail">
                                <Row>Protein: {itemPopup.protein}</Row>
                                <Row>Assitives: {itemPopup.additives}</Row>
                                <Row>Baking material: {itemPopup.material}</Row>
                                <Row>Food decoration: {itemPopup.decor}</Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {() => {props.handlefunc(itemPopup, quantity); resetQuantity(); handleClose()}}>
                    Add this meal to cart
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default MenuList
