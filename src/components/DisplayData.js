import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
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
    const [user,setUser] = useState({})
 const history = useHistory()
    
    useEffect(() => {
        if(!localStorage.getItem('phase3Data')) {
            history.push('/phase3')
        }
        const phase1Data = JSON.parse(localStorage.getItem('phase1Data'))
        const phase2Data = JSON.parse(localStorage.getItem('phase2Data'))
        const phase3Data = JSON.parse(localStorage.getItem('phase3Data'))

        console.log(phase3Data)
        const newUser = {...phase1Data, ...phase2Data, ...phase3Data}
        setUser(newUser)
    }, [])
    return <>
        <Card style={{ width: '18rem', margin: '1rem auto' }}>
            <Card.Img variant="top" src={`${user.image}`} />
            <Card.Body>
                <Card.Title>{`${user.name}`}</Card.Title>
                <Card.Text>
                    {`${user.name} lives in ${user.city} ${user.hobbies && `and likes ${user.hobbies}`}`}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{`${user.email}`}</ListGroupItem>
                <ListGroupItem>{`${user.city} ${user.street} ${user.number}`}</ListGroupItem>
            </ListGroup>
        </Card>
    </>
}
export default DisplayData;