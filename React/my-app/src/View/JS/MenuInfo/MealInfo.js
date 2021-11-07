import {Col, Row, Container, Card, Button} from 'react-bootstrap';
import '../../CSS/Menu.css'

function MealInfo() {
    return (
        <Container className="MealInfoContainer" >
            <h2 className = "header">Your cart</h2>
            <Row className="OrderListContainer">
                List
            </Row>
            <Row className = "PaymentInfo">
                <Row>
                    <Col>
                        Total:
                    </Col>
                    <Col>
                        0
                    </Col>
                </Row>
                <Button className="btn">PAYMENT</Button>
            </Row>
        </Container>
    )
}

export default MealInfo