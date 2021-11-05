import {Card, Button} from 'react-bootstrap';

function Meal(MealInfo, index) {
    return (    
        <Card style={{ width: '18rem' }} key={index} className="box">
            <Card.Img variant="top" src={MealInfo.image} />
            <Card.Body>
                <Card.Title>
                    {MealInfo.title}
                </Card.Title>
                <Card.Text>
                    {MealInfo.text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Meal