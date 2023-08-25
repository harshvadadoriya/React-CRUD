import { useEffect, useState } from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Heading,
	TableContainer,
	Center,
	Divider,
	useToast,
	Th,
	Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import SearchHeaders from '../searchHeader';
import {
	deleteCustomerData,
	editCustomerData,
	getCustomerData,
} from '../../redux/customerSlice/CustomerSlice';
import CustomerData from '../customerData';
import CustomerEditModal from '../customerEditModal';
import { headerLabels } from '../../constant/constant';
import TableHeader from './tableHeader';

const CustomerTable = () => {
	const dispatch = useDispatch();
	const toast = useToast();
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

	const displayToast = () => {
		toast({
			title: 'Customer Record Deleted',
			status: 'warning',
			duration: 2000,
			isClosable: true,
			position: 'top',
		});
	};
	const handleDelete = (customerID) => {
		dispatch(deleteCustomerData(customerID));
		displayToast();
	};

	const [editingCustomer, setEditingCustomer] = useState(null);

	const handleEdit = (customer) => {
		setEditingCustomer(customer);
	};

	const handleEditSubmit = (editedCustomer) => {
		dispatch(editCustomerData(editedCustomer));
		setEditingCustomer(null);
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
						<SearchHeaders {...searchTerm} onSearch={handleSearch} />
						<Tr color="primary.600" mt="10" bgColor="gray.300">
							{headerLabels.map((header) => (
								<TableHeader
									key={header.key}
									label={header.label}
									onClick={() => sortData(header.key)}
								/>
							))}
							<Th>
								<Text fontSize="md" color="primary.600">
									Action
								</Text>
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						{sortedData.map((customer) => (
							<CustomerData
								key={customer?.customerID}
								customer={customer}
								onEdit={() => handleEdit(customer)}
								onDelete={() => handleDelete(customer?.customerID)}
							/>
						))}
					</Tbody>
				</Table>
				<CustomerEditModal
					customer={editingCustomer}
					isOpen={editingCustomer !== null}
					onClose={() => setEditingCustomer(null)}
					onSubmit={handleEditSubmit}
				/>
			</TableContainer>
		</>
	);
};

export default CustomerTable;
