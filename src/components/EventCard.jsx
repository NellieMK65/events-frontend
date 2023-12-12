import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

export const EventCard = ({
	image,
	title,
	description,
	location,
	price,
	start_date,
	end_date,
}) => {
	return (
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
						{start_date} - {end_date}
					</Text>
				</Stack>

				<Button colorScheme="teal"> Book</Button>
			</Stack>
		</Box>
	);
};
