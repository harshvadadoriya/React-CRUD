import { Tr, Th, Input } from '@chakra-ui/react';

const SearchHeaders = ({
	firstName,
	lastName,
	customerID,
	address,
	onSearch,
}) => {
	return (
		<Tr>
			<Th>
				<Input
					borderWidth="2px"
					bgColor="gray.100"
					placeholder="Search First Name"
					value={firstName}
					onChange={(e) => onSearch('firstName', e.target.value)}
				/>
			</Th>
			<Th>
				<Input
					borderWidth="2px"
					bgColor="gray.100"
					placeholder="Search Last Name"
					value={lastName}
					onChange={(e) => onSearch('lastName', e.target.value)}
				/>
			</Th>
			<Th>
				<Input
					borderWidth="2px"
					bgColor="gray.100"
					placeholder="Search Customer ID"
					value={customerID}
					onChange={(e) => onSearch('customerID', e.target.value)}
				/>
			</Th>
			<Th>
				<Input
					borderWidth="2px"
					bgColor="gray.100"
					placeholder="Search Address"
					value={address}
					onChange={(e) => onSearch('address', e.target.value)}
				/>
			</Th>
		</Tr>
	);
};

export default SearchHeaders;
