import { Card, Button, Row, Col, Modal, Container, Figure, Image} from 'react-bootstrap';
import { useState } from 'react';
import '../../CSS/Menu.css'
import Popup from './../Popup/Popup';

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
            //Popup when click to meal
        }
        <Popup show={show} handleClose={handleClose} itemPopup= {itemPopup} centered size="lg"/>
        
        </>
    )
}

export default MenuList