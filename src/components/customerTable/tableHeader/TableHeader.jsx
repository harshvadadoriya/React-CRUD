import { Text, Th } from '@chakra-ui/react';

const TableHeader = ({ label, onClick }) => {
	return (
		<Th onClick={onClick} cursor="pointer">
			<Text fontSize="md" color="primary.600">
				{label}
			</Text>
		</Th>
	);
};

export default TableHeader;
