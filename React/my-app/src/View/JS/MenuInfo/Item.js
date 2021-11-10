import {Col, Row, Button} from 'react-bootstrap';

function Item(props) {
    //console.log(props.input)
    return (
        <Row className="cartItem" style={{paddingRight:"1.4rem"}}>
            
            <Row>
                {props.input.title}:
            </Row>
            <Row>
            <Col xs = {4} md={1} sm={4}>
                <Button onClick = {() => props.decFunc(props.input)}>-</Button>
            </Col>
            <Col xs = {4} md ={1} style={{paddingLeft:"2rem"}}>
                {props.input.amount}
            </Col>
            <Col xs = {4} md={2} sm={1}>
                <Button onClick = {() => props.incFunc(props.input)}>+</Button>
            </Col>
            </Row>
        </Row>
    )
}

export default Item
