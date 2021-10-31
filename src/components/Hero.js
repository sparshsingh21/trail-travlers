import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';
import { Tabs, Form, Tab, Row, Col, Nav, Accordion, Button, Modal, FloatingLabel } from "react-bootstrap";
const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};
	const [show1, setShow1] = useState(false);
	const handleClose = () => setShow1(false);
	const handleShow = () => setShow1(true);
	return (
		<>
		<div className="container1">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Ready to Trail?</h1>
					<p>
						So what are you waiting for? Reach us now, book your dream tour and world of a incredible vacation with TrailTravlers!
					</p>
					<Button className="btn" size="lg" onClick={handleShow}>Book now</Button>
				</div>
			</div>
		</div>
		<Modal
		size="lg"
		show={show1}
		onHide={handleClose}
		backdrop="static"
		keyboard={false}

	>
		<Modal.Header closeButton>
			<Modal.Title>Add New Question</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
		</Modal.Body>
	</Modal>
	</>
	);
};

export default Hero;
