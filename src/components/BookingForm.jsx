import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Stack,
	FormControl,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BASE_URL } from '../utils';

export const BookingForm = ({ isOpen, onClose, eventId, eventName }) => {
	const intitialData = {
		name: '',
		phone: '',
	};

	const [formData, setFormData] = useState(intitialData);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleForm = (e) => {
		e.preventDefault();

		setIsLoading(true);

		const data = {
			...formData,
			event_id: eventId,
			booking_date: new Date(),
		};

		fetch(`${BASE_URL}/booking`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				// stop loading button
				setIsLoading(false);
				// this will close our modal
				onClose();
			})
			.catch((err) => console.log(err));

		// make post request to server
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent as={'form'} onSubmit={handleForm}>
				<ModalHeader>Book for {eventName}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack>
						<FormControl isRequired>
							<FormLabel>Name</FormLabel>
							<Input
								name="name"
								required
								value={formData['name']}
								onChange={handleChange}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Phone number</FormLabel>
							<Input
								name="phone"
								required
								value={formData['phone']}
								onChange={handleChange}
							/>
						</FormControl>
					</Stack>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="red" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button
						type="submit"
						colorScheme="teal"
						isLoading={isLoading}
						loadingText="Booking event..."
					>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
