import React from "react";
import { Container, Navbar } from "react-bootstrap";

function MasterLaout({ children }) {
	return (
		<>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="/">Sweet Keki</Navbar.Brand>
				</Container>
			</Navbar>

			<Container>{children}</Container>
		</>
	);
}

export default MasterLaout;
