import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function UserForm()
{
    return(
    <>
    <Form class = "LabForm">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Enter your username.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="genderSelect">
            <Form.Check
            type="radio"
            label="Male"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            />
            <Form.Check
            type="radio"
            label="Female"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            />
        </Form.Group>

        <Form.Control as="select">
        <option>Europe</option>
        <option>Africa</option>
        <option>South America</option>
        <option>North America</option>
        <option>Asia</option>
        </Form.Control>   

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your story</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </>
    )
}