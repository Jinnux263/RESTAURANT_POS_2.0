import {Col, Row, Container, CloseButton} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Box.css'

import chicken from "../../Img/Chicken.png"
import fish from "../../Img/Fish.png"
import meat from "../../Img/Meat.png"
import standard from "../../Img/Standard.png"

const MealinfoL = [
    {image:chicken, title: 'Chicken', text: '$50.000'},
    {image:fish, title: 'Fish', text: '$35.000'},
    {image:meat, title: 'Meat', text: '$24.000'},
    {image:standard, title: 'Standard Meal', text: '$30.000'},
]

const Meal2 = [
    {image:chicken, title: 'Chicken2', text: '$50.000'},
    {image:fish, title: 'Fish2', text: '$35.000'},
    {image:meat, title: 'Meat2', text: '$24.000'},
    {image:standard, title: 'Standard Meal2', text: '$30.000'},
    {image:chicken, title: 'Chicken', text: '$50.000'},
    {image:fish, title: 'Fish', text: '$35.000'},
    {image:meat, title: 'Meat', text: '$24.000'},
    {image:standard, title: 'Standard Meal', text: '$30.000'},
]


function Menu() {
    const [ShowList, setShowList] = useState(MealinfoL);
    
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer">
                    <Row>
                        <CloseButton className="GoBackBtn" onClick = {() => setShowList(Meal2)}/>
                    </Row>
                    <Row>
                        
                    </Row>
                    <Row>
                        <MenuList Mlist = {ShowList.map(entry => entry)}/>
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