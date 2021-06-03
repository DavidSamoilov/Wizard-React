import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import ResetDataButton from './ResetDataButton';

function DisplayData({ userDetails }) {
  const [user, setUser] = useState(userDetails);
  const history = useHistory();
  if (!localStorage.getItem('phase3Valid')) {
    history.push('/phase3');
  }

  useEffect(() => {
    const user = {};
    for (const inputName in userDetails) {
      user[inputName] = userDetails[inputName].value;
    }
    setUser(user);
  }, [userDetails]);

  // Reset local storage and returns user to phase1 of form
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.replace(`/`);
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '1rem auto' }}>
        <div className='rounded-img'>
          <Card.Img variant='top' src={`${user.image}`} />
        </div>
        <Card.Body>
          <Card.Title>{`${user.name}`}</Card.Title>
          <Card.Text>
            {`${user.name} lives in ${user.city} ${
              user.hobbies && `and likes ${user.hobbies}`
            }`}
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>{`${user.email}`}</ListGroupItem>
          <ListGroupItem>{`${user.dob}`}</ListGroupItem>
          <ListGroupItem>{`${user.city} ${user.street} ${user.number}`}</ListGroupItem>
        </ListGroup>
      </Card>

      <div className='text-center'>
        <Button
          className='display-button'
          variant='primary'
          onClick={() => history.push('/phase3')}
        >
          Back
        </Button>
        <ResetDataButton
          className='display-button reset-button'
          onClick={clearLocalStorage}
          text='Reset form'
        />
      </div>
    </>
  );
}
export default DisplayData;
