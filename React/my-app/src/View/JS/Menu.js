import {Col, Row, Container, CloseButton, Card, CardGroup} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Menu.css'
import { Normal , Coca, Cupcake, SeaFood, Juice} from '../../Model/Data';


function Menu() {
    const [ShowList, setShowList] = useState(Normal);
    const [cartItems, setCartItems] = useState([]);

    const handleClick = (inp) => {
        setShowList(inp)
    }
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <CloseButton className="GoBackBtn"/>
                    </Row>
                    <Row>
                        <CardGroup>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClick(Normal)}>
                                <Card.Title>Normal</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClick(Cupcake)}>
                                <Card.Title>Cupcake</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClick(SeaFood)}>
                                <Card.Title>Sea Food</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClick(Juice)}>
                                <Card.Title>Juice</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClick(Coca)}>
                                <Card.Title>Coca</Card.Title>
                            </Card.Body>
                        </CardGroup>
                    </Row>
                    <Row >
                        <MenuList Mlist = {ShowList}/>
                    </Row>
                </Col>
                <Col> 
                    <MealInfo/>
                </Col>
            </Row>
    </Container>
    )
}

export default Menu