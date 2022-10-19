import React, { useEffect, useState } from "react";
import { useCakeStore } from "../store/cakeStore";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";

function AllCakes() {
	//calling data from cakeStore.js | (CRUD: READ)
	const allCakes = useCakeStore((state) => state.cakeData);
	const getCakeAPICall = useCakeStore((state) => state.getCakeAPI);
	useEffect(() => {
		if (allCakes.length === 0) {
			getCakeAPICall();
		}
	}, []);

	const navigate = useNavigate();

	//delete and delete modal
	const [itemIdToDelete, setItemIdToDelete] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const openDeleteConfimationModalHandler = (id) => {
		setItemIdToDelete(id);
		setShowModal(true);
	};
	const closeDeleteConfimationModalHandler = () => {
		setItemIdToDelete(0);
		setShowModal(false);
	};
	const deleteCakeAPICall = useCakeStore((state) => state.deleteCakeAPI);

	const deleteConfirmHandler = async () => {
		await deleteCakeAPICall(itemIdToDelete);
		setShowModal(false);
	};

	return (
		<div>
			<DeleteConfirmation
				showModal={showModal}
				title="Delete Confimation"
				body="Are you sure you want to delte this item?"
				closeDeleteConfimationModalHandler={
					closeDeleteConfimationModalHandler
				}
				deleteConfirmHandler={deleteConfirmHandler}
			></DeleteConfirmation>

			<Container className="mt-4">
				<h1>ALl Cakes</h1>

				<Row>
					<Col className="col-md-4 offset-md-4">
						<Button
							variant="primary"
							type="button"
							onClick={() => navigate("/add-cake")}
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
									<Button
										variant="primary"
										type="button"
										onClick={() =>
											navigate(`/edit-cake/${cake.id}`)
										}
									>
										Edit
									</Button>{" "}
									|{" "}
									<Button
										variant="danger"
										type="button"
										onClick={() =>
											openDeleteConfimationModalHandler(
												cake.id
											)
										}
									>
										Delete
									</Button>
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
