import { Tr, Th } from '@chakra-ui/react';
import SearchInput from './searchInput';

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
				<SearchInput
					placeholder="Search First Name"
					value={firstName}
					onChange={(e) => onSearch('firstName', e.target.value)}
				/>
			</Th>
			<Th>
				<SearchInput
					placeholder="Search Last Name"
					value={lastName}
					onChange={(e) => onSearch('lastName', e.target.value)}
				/>
			</Th>
			<Th>
				<SearchInput
					placeholder="Search Customer ID"
					value={customerID}
					onChange={(e) => onSearch('customerID', e.target.value)}
				/>
			</Th>
			<Th>
				<SearchInput
					placeholder="Search Address"
					value={address}
					onChange={(e) => onSearch('address', e.target.value)}
				/>
			</Th>
		</Tr>
	);
};

export default SearchHeaders;
