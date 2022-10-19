import React, { useEffect } from "react";
import { useCakeStore } from "../store/cakeStore";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AllCakes() {
	//calling data from cakeStore.js | (CRUD: READ)
	const allCakes = useCakeStore((state) => state.cakeData);
	const getCakeAPICall = useCakeStore((state) => state.getCakeAPI);
	useEffect(() => {
		getCakeAPICall();
	}, []);

	const navigate = useNavigate();

	return (
		<div>
			<Container className="mt-4">
				<h1>ALl Cakes</h1>

				<Row>
					<Col className="col-md-4 offset-md-4">
						<Button
							variant="primary"
							type="button"
							onClick={() => navigate("/add-cakes")}
						>
							Add
						</Button>
					</Col>
				</Row>

				<Row xs={1} md={2} className="g-4">
					{allCakes.map((cake) => (
						<Col key={cake.id}>
							<Card>
								<Card.Img
									variant="top"
									src={cake.imageURL}
									className="w-100"
									style={{ height: 400 }}
								/>
								<Card.Body>
									<Card.Title>{cake.name}</Card.Title>
									<Card.Text>Price - {cake.cost}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}

export default AllCakes;
