import {Card, Button} from 'react-bootstrap';
//import Meal from './Meal';

import chicken from "../../../Img/Chicken.png"
import fish from "../../../Img/Fish.png"
import meat from "../../../Img/Meat.png"
import standard from "../../../Img/Standard.png"

const Mealinfo = [
    {image:chicken, title: 'Chicken', text: 'This is example description'},
    {image:fish, title: 'Fish', text: 'This is example description'},
    {image:meat, title: 'Meat', text: 'This is example description'},
    {image:standard, title: 'Standard Meal', text: 'This is example description'},
    
]

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

function MenuList() {
    return (
        <div className="grid">{Mealinfo.map(Meal)}</div>

    )
}

export default MenuList