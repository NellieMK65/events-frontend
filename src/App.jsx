import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AddEvent } from './pages/AddEvent';

function App() {
	return (
		<>
			{/* Navbar */}
			<Navbar />

			<Container>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					<Route path="add-event" element={<AddEvent />} />
				</Routes>
			</Container>
		</>
	);
}

export default App;
