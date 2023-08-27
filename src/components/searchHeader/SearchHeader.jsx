import { Tr, Th } from '@chakra-ui/react';
import CustomInput from '../customInput';

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
				<CustomInput
					searchInput={true}
					placeholder="Search First Name"
					value={firstName}
					onChange={(e) => onSearch('firstName', e.target.value)}
				/>
			</Th>
			<Th>
				<CustomInput
					searchInput={true}
					placeholder="Search Last Name"
					value={lastName}
					onChange={(e) => onSearch('lastName', e.target.value)}
				/>
			</Th>
			<Th>
				<CustomInput
					searchInput={true}
					placeholder="Search Customer ID"
					value={customerID}
					onChange={(e) => onSearch('customerID', e.target.value)}
				/>
			</Th>
			<Th>
				<CustomInput
					searchInput={true}
					placeholder="Search Address"
					value={address}
					onChange={(e) => onSearch('address', e.target.value)}
				/>
			</Th>
		</Tr>
	);
};

export default SearchHeaders;
