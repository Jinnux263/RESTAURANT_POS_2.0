import {Col, Row, Button} from 'react-bootstrap';

function Item(props) {
    //console.log(props.input)
    return (
        <Row className="cartItem">
            
            <Col>
                {props.input.title}:
            </Col>
            <Col xs = {2}>
                <Button onClick = {() => props.decFunc(props.input)}>-</Button>
            </Col>
            <Col xs = {1}>
                {props.input.amount}
            </Col>
            <Col xs = {2}>
                <Button onClick = {() => props.incFunc(props.input)}>+</Button>
            </Col>
        </Row>
    )
}

export default Item