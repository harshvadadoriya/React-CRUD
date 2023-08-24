import { useEffect, useState } from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Heading,
	TableContainer,
	Center,
	Divider,
} from '@chakra-ui/react';
import SearchHeaders from '../searchHeader';
import CustomerData from '../customerData';
import { useDispatch, useSelector } from 'react-redux';
import {
	deleteCustomerData,
	getCustomerData,
} from '../../redux/customerSlice/CustomerSlice';

const CustomerTable = () => {
	const [sortConfig, setSortConfig] = useState({
		key: null,
		direction: 'ascending',
	});
	const [searchTerm, setSearchTerm] = useState({
		firstName: '',
		lastName: '',
		customerID: '',
		address: '',
	});
	const customerData = useSelector(getCustomerData);
	const [filteredData, setFilteredData] = useState(customerData);

	const sortData = (key) => {
		let direction = 'ascending';
		if (sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const handleSearch = (column, value) => {
		console.log();
		setSearchTerm((prevSearchTerms) => ({
			...prevSearchTerms,
			[column]: value,
		}));

		const filtered = customerData.filter((item) =>
			item[column].toLowerCase().includes(value.toLowerCase())
		);
		setFilteredData(filtered);
	};

	const sortedData = [...filteredData].sort((a, b) => {
		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === 'ascending' ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === 'ascending' ? 1 : -1;
		}
		return 0;
	});

	const dispatch = useDispatch();
	const handleDelete = (customerID) => {
		dispatch(deleteCustomerData(customerID));
	};

	useEffect(() => {
		setFilteredData(customerData);
	}, [customerData]);

	return (
		<>
			<TableContainer mt="6">
				<Center>
					<Heading color="primary.500">Customer Details</Heading>
				</Center>
				<Divider my={2} />
				<Table width={'95%'} margin="auto" variant="striped" p="5">
					<Thead userSelect="none">
						<SearchHeaders
							firstName={searchTerm.firstName}
							lastName={searchTerm.lastName}
							customerID={searchTerm.customerID}
							address={searchTerm.address}
							onSearch={handleSearch}
						/>
						<Tr color="primary.600" mt="10" bgColor="gray.300">
							<Th onClick={() => sortData('firstName')} cursor="pointer">
								<Heading fontSize="md" color="primary.600">
									First Name
								</Heading>
							</Th>
							<Th onClick={() => sortData('lastName')} cursor="pointer">
								<Heading fontSize="md" color="primary.600">
									Last Name
								</Heading>
							</Th>
							<Th onClick={() => sortData('customerID')} cursor="pointer">
								<Heading fontSize="md" color="primary.600">
									Customer ID
								</Heading>
							</Th>
							<Th onClick={() => sortData('address')} cursor="pointer">
								<Heading fontSize="md" color="primary.600">
									Address
								</Heading>
							</Th>
							<Th>
								<Heading fontSize="md" color="primary.600">
									Action
								</Heading>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{sortedData.map(({ firstName, lastName, customerID, address }) => (
							<CustomerData
								key={customerID}
								firstName={firstName}
								lastName={lastName}
								customerID={customerID}
								address={address}
								onDelete={() => handleDelete(customerID)}
							/>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default CustomerTable;
