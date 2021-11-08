import {Col, Row, Container, Card, Button, Stack} from 'react-bootstrap';
import '../../CSS/Menu.css'
import Item from './Item';

function calSum(list) {
    let init = 0;
    return list.reduce(( previousValue, current ) => previousValue + current.amount * current.price,
    0);
}
function MealInfo(props) {
    console.log(props)
    return (
        <Container className="MealInfoContainer" >
            <h2 className = "header">Your cart</h2>
            <Row className="OrderListContainer" xs = {7}> 
                    {props.CartList.map((item) => <Item input = {item}/>)}
            </Row>
            <Row className = "PaymentInfo">
                <Row style={{fontSize:'30px'}}>
                    <Col>
                        Total
                    </Col>
                    <Col>
                        {calSum(props.CartList)}
                    </Col>
                </Row>
                <Button className="btnCancel" onClick = {() => props.handlefunc()}>CANCEL</Button>
                <Button className="btnPayment">PAYMENT</Button>
            </Row>
        </Container>
    )
}

export default MealInfo