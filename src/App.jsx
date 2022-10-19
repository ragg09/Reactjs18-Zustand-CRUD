import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLaout from "./components/shared/MasterLayout";
import AllCakes from "./pages/AllCakes";
import AddCake from "./pages/AddCake";
import EditCake from "./pages/EditCake";

function App() {
	return (
		<MasterLaout>
			<Browser>
				<Routes>
					<Route path="/" element={<AllCakes />}></Route>
					<Route path="/add-cake" element={<AddCake />}></Route>
					<Route path="/edit-cake/:id" element={<EditCake />}></Route>
				</Routes>
			</Browser>
		</MasterLaout>
	);
}

export default App;
