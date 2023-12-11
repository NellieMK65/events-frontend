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

export const AddEvent = () => {
	const initialData = {
		title: '',
		description: '',
		location: '',
		price: '',
		start_date: '',
		end_date: '',
	};

	const [formData, setFormData] = useState(initialData);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	console.log(formData);

	return (
		<Flex align={'center'} justify={'center'}>
			<Stack>
				<Heading fontSize={'4xl'}>Add Event</Heading>

				<Box rounded={'lg'} bg={'white'} p={8}>
					<Stack>
						<FormControl isRequired>
							<FormLabel>Title</FormLabel>
							<Input
								name="title"
								placeholder="Hiking"
								value={formData['title']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea
								name="description"
								placeholder="description"
								value={formData['description']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Location</FormLabel>
							<Input
								name="location"
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
									value={formData['start_date']}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl isRequired>
								<FormLabel>End Date</FormLabel>
								<Input
									name="end_date"
									type="datetime-local"
									value={formData['end_date']}
									onChange={handleChange}
								/>
							</FormControl>
						</HStack>

						<Stack pt={3}>
							<Button>Submit</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};
