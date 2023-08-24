import { Button, Stack, Td, Tr } from '@chakra-ui/react';

const CustomerData = ({ customer, onEdit, onDelete }) => {
	const { firstName, lastName, customerID, address } = customer;
	return (
		<Tr>
			<Td>{firstName}</Td>
			<Td>{lastName}</Td>
			<Td>{customerID}</Td>
			<Td>{address}</Td>
			<Td>
				<Stack spacing={4} direction="row" align="center">
					<Button
						colorScheme="primary"
						bgColor="primary.500"
						_hover={{
							bg: 'primary.600',
						}}
						onClick={onEdit}
					>
						Edit
					</Button>
					<Button colorScheme="red" onClick={onDelete}>
						Delete
					</Button>
				</Stack>
			</Td>
		</Tr>
	);
};

export default CustomerData;
