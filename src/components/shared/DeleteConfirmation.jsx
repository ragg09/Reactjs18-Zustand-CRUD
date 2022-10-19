import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DeleteConfirmation(props) {
	return (
		<>
			<Modal
				show={props.showModal}
				onHide={props.closeDeleteConfimationModalHandler}
			>
				<Modal.Header closeButton>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.body}</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={props.closeDeleteConfimationModalHandler}
					>
						Close
					</Button>
					<Button
						variant="danger"
						onClick={props.deleteConfirmHandler}
					>
						Confirm Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
