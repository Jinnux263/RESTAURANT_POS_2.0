import { Card, Button, Row, Col } from 'react-bootstrap';



function Meal(MealInfo, index) {
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
                        <Button variant="primary" className="btn">Add</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Meal