import {Col, Row, Container, CloseButton} from 'react-bootstrap';
import { useState } from 'react';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Box.css'
import { MealinfoL, Meal2 } from '../../Model/Data';
import Catagory from './MenuList/Catagory';


function Menu() {
    const [ShowList, setShowList] = useState(MealinfoL);
    
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer" >
                    <Row>
                        <CloseButton className="GoBackBtn" onClick = {() => setShowList(Meal2)}/>
                    </Row>
                    <Row>
                        <Catagory />
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