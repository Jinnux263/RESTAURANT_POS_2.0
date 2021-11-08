import {Col, Row, Button} from 'react-bootstrap';

function Item(props) {
    //console.log(props.input)
    return (
        <Row className="cartItem">
            <Col>
                <Button onClick = {() => props.decFunc(props.input)}>-</Button>
            </Col>
            <Col xs={6}>
                {props.input.title}:
            </Col>
            <Col>
                {props.input.amount}
            </Col>
            <Col>
                <Button onClick = {() => props.incFunc(props.input)}>+</Button>
            </Col>
        </Row>
    )
}

export default Item