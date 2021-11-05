import {Col, Row, Container, Card, Button} from 'react-bootstrap';
import Meal from './Meal';

function MenuList() {
    return (
        <Container className="Menu" fluid>
            <Row>
                <Meal/>
            </Row>
        </Container>
    )
}

export default MenuList