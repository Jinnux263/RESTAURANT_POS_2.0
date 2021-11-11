import {Col, Row, Container, Card, CardGroup} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Menu.css'
import { All , Meat, SeaFood, Dessert, Drink} from '../../Model/Data';
// import { BsFillHouseDoorFill } from "react-icons/bs";
import Navbar from './navbar'

function Menu() {
    //console.log("App")
    const [ShowList, setShowList] = useState(All);
    const [cartItems, setCartItems] = useState([]);

    //Them san pham vao trong cart
    const handleAddToCart = (clickedItem, quantity = 1) => {
        setCartItems(prev => {
            // 1. Is the item already added in the cart?
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map(item =>
                item.id === clickedItem.id
                    ? { ...item, amount: item.amount + quantity }
                    : item
                );
            }
            // First time the item is added
            return [...prev, { ...clickedItem, amount: quantity }];
            });
    }
    //Khi an nut + ben canh san pham trong cart
    const incFunc = (clickedItem) => {
        setCartItems(prev => {
            return prev.map(item =>
            item.id === clickedItem.id
                ? { ...item, amount: item.amount + 1 }
                : item
            );
        });
    }
    //Khi an nut - ben canh san pham trong cart
    const decFunc = (clickedItem) => {
        setCartItems(prev => {
            return prev.reduce((base, item) => {
                if (item.id === clickedItem.id) {
                    if (item.amount === 1) {
                        return base
                    } else {
                        return [...base, { ...item, amount: item.amount - 1 }]
                    }
                } else {
                    return [...base, item]
                }
            }, []);
        });
    }

    //Huy bo ca order
    const handleCancelCart = () => {
        //console.log(clickedItem)
        setCartItems([]);
    }

    //Loc mon an theo catagory
    const handleClickCata = (item) => {
        setShowList(item)
    }

    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <Navbar/>
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
                        <MenuList Mlist = {ShowList} handlefunc = {handleAddToCart} incfunc = {incFunc} decFunc = {decFunc}/>
                    </Row>
                </Col>
                <Col style = {{backgroundColor: "white"}}> 
                    <MealInfo CartList = {cartItems} handlefunc= {handleCancelCart} incfunc = {incFunc} decFunc = {decFunc}/>
                </Col>
            </Row>
    </Container>
    )
}

export default Menu
