import {Col, Row, Container, CloseButton, Card, CardGroup} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Menu.css'
import { All , Meat, SeaFood, Dessert, Drink} from '../../Model/Data';
// import { BsFillHouseDoorFill } from "react-icons/bs";


function Menu() {
    const [ShowList, setShowList] = useState(All);
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
    //console.log(cartItems)
    // const handleAddToCart = (clickedItem) => {
    //     //console.log(clickedItem)
    //     setCartItems(prev => {
    //         return [...prev, clickedItem];
    //     });
    // }

    const handleClickCata = (item) => {
        setShowList(item)
    }

    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <CloseButton className="GoBackBtn"/>
                        {/* <BsFillHouseDoorFill/> */}
                    </Row>
                    <Row>
                        <CardGroup>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(All)}>
                                <Card.Title>All</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Meat)}>
                                <Card.Title>Meat</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(SeaFood)}>
                                <Card.Title>Sea Food</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Dessert)}>
                                <Card.Title>Dessert</Card.Title>
                            </Card.Body>
                            <Card.Body className = 'CataBlock' onClick = {() => handleClickCata(Drink)}>
                                <Card.Title>Drink</Card.Title>
                            </Card.Body>
                        </CardGroup>
                    </Row>
                    <Row >
                        <MenuList Mlist = {ShowList} handlefunc = {handleAddToCart}/>
                    </Row>
                </Col>
                <Col> 
                    <MealInfo CartList = {cartItems}/>
                </Col>
            </Row>
    </Container>
    )
}

export default Menu
