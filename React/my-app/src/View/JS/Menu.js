import {Col, Row, Container, CloseButton} from 'react-bootstrap';
import MenuList from './MenuList/MenuList';
import MealInfo from './MenuInfo/MealInfo';


function Menu() {
    return (
        <Container>
            <Row>
                <CloseButton/>  
            </Row>
            <Row>
                <Col xs = {8}>
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