import { useState } from 'react';

import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Textarea,
} from '@chakra-ui/react';

import { BASE_URL } from '../utils';

export const AddEvent = () => {
	const initialData = {
		title: '',
		description: '',
		image: '',
		location: '',
		price: '',
		start_date: '',
		end_date: '',
	};

	const [formData, setFormData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		setIsLoading(true);

		fetch(`${BASE_URL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				// we assume the operation was a success

				// reset form
				setFormData(initialData);

				// stop loading
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	};

	return (
		<Flex align={'center'} justify={'center'}>
			<Stack>
				<Heading fontSize={'4xl'}>Add Event</Heading>

				<Box
					as="form"
					rounded={'lg'}
					bg={'white'}
					p={8}
					onSubmit={handleFormSubmit}
				>
					<Stack>
						<FormControl isRequired>
							<FormLabel>Title</FormLabel>
							<Input
								name="title"
								placeholder="Hiking"
								required
								value={formData['title']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea
								name="description"
								placeholder="description"
								required
								value={formData['description']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Image</FormLabel>
							<Input
								name="image"
								placeholder="image"
								required
								value={formData['image']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Location</FormLabel>
							<Input
								name="location"
								required
								placeholder="Ngong hills"
								value={formData['location']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Price</FormLabel>

							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									color="gray.300"
									fontSize="1.2em"
									children="Kshs"
									px={2}
								/>
								<Input
									type="number"
									name="price"
									required
									placeholder="100"
									value={formData['price']}
									onChange={handleChange}
								/>
							</InputGroup>
						</FormControl>

						<HStack>
							<FormControl isRequired>
								<FormLabel>Start Date</FormLabel>
								<Input
									name="start_date"
									type="datetime-local"
									required
									value={formData['start_date']}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>End Date</FormLabel>
								<Input
									name="end_date"
									type="datetime-local"
									required
									value={formData['end_date']}
									onChange={handleChange}
								/>
							</FormControl>
						</HStack>

						<Stack pt={3}>
							<Button
								isLoading={isLoading}
								loadingText="Saving event"
								type="submit"
								colorScheme="teal"
							>
								Submit
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};
