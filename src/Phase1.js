import { Form, Button } from 'react-bootstrap';

function Phase1() {
    return <>
        <Form>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>Day</Form.Label>
                <Form.Control type="text" placeholder="1" />

                <Form.Label>Month</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </Form.Select>

                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="1990" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Next
  </Button>
        </Form>
    </>

}
export default Phase1;