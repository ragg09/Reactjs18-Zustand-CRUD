import React, { useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCakeStore } from "../store/cakeStore";

function AddCake() {
	const name = useRef("");
	const imageURL = useRef("");
	const cost = useRef("");

	//calling the api call
	const addAPICall = useCakeStore((state) => state.addCakeAPI);

	const navigate = useNavigate();

	//CREATE Trigger
	const createHanlder = async () => {
		let payload = {
			name: name.current.value,
			imageURL: imageURL.current.value,
			cost: Number(cost.current.value),
		};
		await addAPICall(payload);
		navigate("/");
	};

	return (
		<>
			<Container className="mt-2">
				<Row>
					<Col className="col-md-8 offset-md-2">
						<legend>Create A New Cake</legend>
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" ref={name} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formCost">
							<Form.Label>Cost</Form.Label>
							<Form.Control type="text" ref={cost} />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formImageURL">
							<Form.Label>Image URL</Form.Label>
							<Form.Control type="text" ref={imageURL} />
						</Form.Group>
						<Button
							variant="primary"
							type="button"
							onClick={createHanlder}
						>
							Add
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AddCake;
