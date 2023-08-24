import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Logo(props) {
	return (
		<Box {...props}>
			<NavLink to="/">
				<Text fontSize="lg" fontWeight="bold">
					Logo
				</Text>
			</NavLink>
		</Box>
	);
}
