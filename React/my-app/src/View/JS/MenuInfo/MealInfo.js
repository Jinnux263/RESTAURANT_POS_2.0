import {Col, Row, Container, Button} from 'react-bootstrap';
import '../../CSS/Menu.css'
import Item from './Item';

function calSum(list) {
    return list.reduce(( previousValue, current ) => previousValue + current.amount * current.price,
    0);
}
function MealInfo(props) {
    //console.log("MenuInfo")
    return (
        <Container className="MealInfoContainer" >
            <h2 className = "header">Your cart</h2>
            <Row className="OrderListContainer" xs = {7}> 
                    {props.CartList.map((item, index) => <Item key = {index} input = {item} incFunc = {props.incfunc} decFunc = {props.decFunc}/>)}
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