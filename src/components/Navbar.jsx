import { Link } from 'react-router-dom';

import { Box, Flex, HStack } from '@chakra-ui/react';
import { AtSignIcon, CalendarIcon } from '@chakra-ui/icons';

export const Navbar = () => {
	return (
		<Box px={4}>
			<Flex h={16} justifyContent={'space-between'}>
				<HStack spacing={8}>
					<CalendarIcon w={8} h={8} />

					<HStack spacing={4}>
						<Link to={'/'}>Home</Link>
						<Link to={'/add-event'}>Add event</Link>
					</HStack>
				</HStack>
				<Flex py={4}>
					<AtSignIcon h={8} w={8} />
				</Flex>
			</Flex>
		</Box>
	);
};
