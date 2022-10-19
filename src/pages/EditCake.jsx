import React, { useEffect, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getCakeById, useCakeStore } from "../store/cakeStore";

export default function EditCake() {
	const params = useParams();
	const navigate = useNavigate();

	//get specific data by id
	const cakeToEdit = useCakeStore(getCakeById(params.id));

	const name = useRef("");
	const imageURL = useRef("");
	const cost = useRef("");

	const updateAPICall = useCakeStore((state) => state.updateCakeAPI);

	useEffect(() => {
		if (cakeToEdit) {
			name.current.value = cakeToEdit.name;
			cost.current.value = cakeToEdit.cost;
			imageURL.current.value = cakeToEdit.imageURL;
		}
	}, [cakeToEdit]);

	const updateHandler = async () => {
		let payload = {
			name: name.current.value,
			imageURL: imageURL.current.value,
			cost: Number(cost.current.value),
			id: Number(params.id),
		};

		await updateAPICall(payload);

		//return home after update
		navigate("/");
	};

	return (
		<>
			<Container className="mt-2">
				<Row>
					<Col className="col-md-8 offset-md-2">
						<legend>Update Cake</legend>
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
							onClick={updateHandler}
						>
							Update
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
}
