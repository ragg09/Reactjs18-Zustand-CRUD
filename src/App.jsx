import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import "./App.css";
import MasterLaout from "./components/shared/MasterLayout";
import AllCakes from "./pages/AllCakes";
import AddCake from "./pages/AddCake";

function App() {
	return (
		<MasterLaout>
			<Browser>
				<Routes>
					<Route path="/" element={<AllCakes />}></Route>
					<Route path="/add-cakes" element={<AddCake />}></Route>
				</Routes>
			</Browser>
		</MasterLaout>
	);
}

export default App;
