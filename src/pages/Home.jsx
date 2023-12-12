import { useEffect, useState } from 'react';

import { Center, Flex, Heading, Input, SimpleGrid } from '@chakra-ui/react';

import { EventCard } from '../components/EventCard';
import { BASE_URL } from '../utils';

const data = [
	{
		id: 1,
		title: 'Hiking',
		description: 'Enjoy scenic views',
		image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png',
		location: 'Ngong',
		price: 200,
		start_date: 'Dec 12, 2023',
		end_date: 'Dec, 15, 2023',
	},
];

export const Home = () => {
	const [events, setEvents] = useState(data);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const handleFetchData = () => {
			fetch(`${BASE_URL}/events`)
				.then((res) => res.json())
				.then((events) => setEvents(events))
				.catch((err) => console.log(err));
		};

		handleFetchData();
	}, []);

	const searchedEvents = events.filter((event) =>
		event.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Flex direction="column" p={4} gap={4}>
			<Input
				placeholder="Search"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			{/* Display events */}
			{searchedEvents.length > 0 ? (
				<SimpleGrid columns={{ sm: 1, md: 3, lg: 4 }} spacing={5}>
					{searchedEvents.map((event, index) => (
						<EventCard key={index} {...event} />
					))}
				</SimpleGrid>
			) : (
				<Center>
					<Heading size={'4xl'}>No events</Heading>
				</Center>
			)}
		</Flex>
	);
};
