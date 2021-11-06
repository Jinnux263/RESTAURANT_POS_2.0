import {Card, CardGroup} from 'react-bootstrap';
import '../../CSS/Box.css'

function Catagory() {
    return(
        <CardGroup>
            <Card.Body className = 'CataBlock'>
                <Card.Title>Cupcake</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock'>
                <Card.Title>Sea Food</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock'>
                <Card.Title>Juice</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock'>
                <Card.Title>Coca</Card.Title>
            </Card.Body>
        </CardGroup>
    )
}

export default Catagory