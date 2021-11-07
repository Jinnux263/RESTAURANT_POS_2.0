import {Col, Row, Container, Card, Button, Image} from 'react-bootstrap';

function Item(props) {
    console.log(props)
    var input = props.input;
    return (
        <Row className="cartItem">
            <Col xs={6}>
                {input.title}:
            </Col>
            <Col>
                {input.amount}
            </Col>
        </Row>
    )
}

export default Item