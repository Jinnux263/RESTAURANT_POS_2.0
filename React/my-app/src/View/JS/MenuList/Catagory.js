import {Card, CardGroup} from 'react-bootstrap';
import '../../CSS/Box.css'

function Catagory(props) {
    var inputFunc = props.onClick;

    return(
        <CardGroup>
            <Card.Body className = 'CataBlock' onClick = {inputFunc}>
                <Card.Title>Cupcake</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock' onClick = {inputFunc}>
                <Card.Title>Sea Food</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock' onClick = {inputFunc}>
                <Card.Title>Juice</Card.Title>
            </Card.Body>
            <Card.Body className = 'CataBlock' onClick = {inputFunc}>
                <Card.Title>Coca</Card.Title>
            </Card.Body>
        </CardGroup>
    )
}

export default Catagory