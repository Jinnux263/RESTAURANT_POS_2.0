import {Col, Row, Container, CloseButton, Card, CardGroup} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Menu.css'
import { Normal , Coca, Cupcake, SeaFood, Juice} from '../../Model/Data';


function Menu() {
    const [ShowList, setShowList] = useState(Normal);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (clickedItem) => {
        setCartItems(prev => {
            // 1. Is the item already added in the cart?
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map(item =>
                item.id === clickedItem.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
                );
            }
            // First time the item is added
            return [...prev, { ...clickedItem, amount: 1 }];
            });
    }

    const HandleClearCart = () => {
        setCartItems([]);
    }

    const handleClickCata = (item) => {
        setShowList(item)
    }
    console.log(cartItems)
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <CloseButton className="GoBackBtn"/>
                    </Row>
                    <Row>
                        <CardGroup>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Normal)}>
                                <Card.Title>Normal</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Cupcake)}>
                                <Card.Title>Cupcake</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(SeaFood)}>
                                <Card.Title>Sea Food</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Juice)}>
                                <Card.Title>Juice</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Coca)}>
                                <Card.Title>Coca</Card.Title>
                            </Card.Body>
                        </CardGroup>
                    </Row>
                    <Row >
                        <MenuList Mlist = {ShowList} handlefunc = {handleAddToCart}/>
                    </Row>
                </Col>
                <Col> 
                    <MealInfo CartList = {cartItems} handlefunc = {HandleClearCart}/>
                </Col>
            </Row>
    </Container>
    )
}

export default Menu