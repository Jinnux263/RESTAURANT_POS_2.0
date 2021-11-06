import {Col, Row, Container, CloseButton} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Box.css'
import Catagory from './MenuList/Catagory';
import { MealinfoL, Meal2 } from '../../Model/Data';

function Menu() {
    const [ShowList, setShowList] = useState(MealinfoL);
    
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <CloseButton className="GoBackBtn"/>
                    </Row>
                    <Row>
                        <Catagory onClick = {() => setShowList(Meal2)}/>
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