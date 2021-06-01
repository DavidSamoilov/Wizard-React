import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const user = {
    fullName: 'hello goodbye',
    email: 'lala@gmail.com',
    dateOfBirth: '01/01/1990',
    city: 'Rishon LeZion',
    street: 'wawa',
    streetNumebr: 12,
    image: 'image.png',
    hobbies: 'movies'
}

function DisplayData() {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${user.img}`} />
            <Card.Body>
                <Card.Title>{`${user.fullName}`}</Card.Title>
                <Card.Text>
                    {`${user.fullName} lives in ${user.city} and likes ${user.hobbies}`}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{`${user.email}`}</ListGroupItem>
                <ListGroupItem>{`${user.city} ${user.street} ${user.streetNumebr}`}</ListGroupItem>
            </ListGroup>
        </Card>
    </>
}
export default DisplayData;