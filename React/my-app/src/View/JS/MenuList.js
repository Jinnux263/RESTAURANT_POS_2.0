import {Col, Row, Container, Card, Button} from 'react-bootstrap';
import Meal from './Meal';
import '../CSS/Menu.css'


function MenuList() {
    return (
        <Container className="Menu" fluid>
            <Row>
                <Meal></Meal>
            </Row>
        </Container>
    )
}

export default MenuList