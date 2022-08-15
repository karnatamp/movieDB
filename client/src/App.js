import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Home from "./components/HomePage";



function App() {


	return (
		<Routes>

			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" exact element={<Signup/>} />
			<Route path="/Home" exact element={<Home />} />



			
		</Routes>
	);
}

export default App;
