import {
	Box,
	Button,
	Heading,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { formatDate } from '../utils';
import { BookingForm } from './BookingForm';

export const EventCard = ({
	id,
	image,
	title,
	description,
	location,
	price,
	start_date,
	end_date,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<BookingForm
				isOpen={isOpen}
				onClose={onClose}
				eventId={id}
				eventName={title}
			/>

			<Box w={'full'} rounded={'md'} bg={'white'} p={5}>
				<Box h={'200px'} mb={6} position={'relative'}>
					<img src={image} alt="" />
				</Box>

				<Stack>
					<Heading>{title}</Heading>
					<Text color={'gray.500'}>{description}</Text>

					<Stack direction={'column'} fontSize={'sm'}>
						<Text>Kshs {price}</Text>
						<Text>
							{formatDate(start_date)} - {formatDate(end_date)}
						</Text>
					</Stack>

					<Button colorScheme="teal" onClick={onOpen}>
						{' '}
						Book
					</Button>
				</Stack>
			</Box>
		</>
	);
};
