import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function DisplayData({ userDetails }) {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('phase3Valid')) {
      history.push('/phase3');
    }

    const user = {};
    for (const inputName in userDetails) {
      user[inputName] = userDetails[inputName].value;
    }
    setUser(user);
  }, []);

  return (
    <>
      <Card style={{ width: '18rem', margin: '1rem auto' }}>
        <div className="rounded-img">
          <Card.Img variant='top' src={`${user.image}`} />
        </div>
        <Card.Body>
          <Card.Title>{`${user.name}`}</Card.Title>
          <Card.Text>
            {`${user.name} lives in ${user.city} ${user.hobbies && `and likes ${user.hobbies}`
              }`}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>{`${user.email}`}</ListGroupItem>
          <ListGroupItem>{`${user.city} ${user.street} ${user.number}`}</ListGroupItem>
        </ListGroup>
      </Card>

      <div className='text-center'>
        <Button variant='primary mr-2' onClick={() => history.push('/phase3')}>
          Back
        </Button>
      </div>
    </>
  );
}
export default DisplayData;
