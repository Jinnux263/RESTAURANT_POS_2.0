import {Col, Row, Container, CloseButton} from 'react-bootstrap';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';
import '../CSS/Box.css'

function Menu() {
    return (
        <Container fluid>
            <Row>
                <Col xs = {9} className="Menucontainer">
                <Row>
                    <CloseButton/>  
                </Row>
                    <Row>
                        <MenuList/>
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