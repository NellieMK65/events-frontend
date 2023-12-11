import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AddEvent } from './pages/AddEvent';

function App() {
	return (
		<main style={{ height: '100vh' }}>
			{/* Navbar */}
			<Navbar />

			<Box bg={'gray.50'} style={{ height: '100vh' }}>
				<Routes>
					<Route path="/" element={<Home />}></Route>

					<Route path="add-event" element={<AddEvent />} />
				</Routes>
			</Box>
		</main>
	);
}

export default App;
