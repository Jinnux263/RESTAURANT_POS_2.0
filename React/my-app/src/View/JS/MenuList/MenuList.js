import { Card, Button, Row, Col } from 'react-bootstrap';
import '../../CSS/Menu.css'

function MenuList(props) {
    //console.log(props.handlefunc)
    return (
        <div className="grid">
            {props.Mlist.map( (MealInfo , index) => {
                return (
                    <Card style={{ width: '18rem' }} key={index} className="box">
                        <Card.Img variant="top" src={MealInfo.image} className = "card-img-top" />
                        <Card.Body>
                            <Card.Title>
                                {MealInfo.title}
                            </Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        ${MealInfo.price}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Button variant="primary" className="btn" onClick = {() => props.handlefunc(MealInfo)}>Add</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    )
                }    
            )}
        </div>
    )
}

export default MenuList