import {
	Box,
	Button,
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack,
	useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/Hooks';
import { addCustomerFormData } from '../../redux/customerSlice/CustomerSlice';

const CustomerForm = () => {
	const initialState = {
		firstName: '',
		lastName: '',
		customerID: '',
		address: '',
	};
	const dispatch = useDispatch();
	const toast = useToast();
	const displayToast = () => {
		toast({
			title: 'New Customer Record Created',
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'top',
		});
	};
	const { formData, handleFormChange, handleFormSubmit } = useForm(
		initialState,
		(data) => dispatch(addCustomerFormData(data)),
		displayToast
	);

	return (
		<Box maxW="2xl" mx="auto" my={5}>
			<Box mx={2} borderWidth="1px" borderTopRadius="5" p={3}>
				<Box>
					<Center>
						<Heading color="primary.500">Customer Form</Heading>
					</Center>
				</Box>
				<Box mt={5}>
					<form onSubmit={handleFormSubmit}>
						<VStack spacing="2" alignItems="flex-start">
							<FormControl>
								<FormLabel color="primary.600">First Name</FormLabel>
								<Input
									type="text"
									name="firstName"
									placeholder="Enter First Name"
									value={formData.firstName}
									onChange={handleFormChange}
									required
								/>
							</FormControl>
							<FormControl>
								<FormLabel color="primary.600">Last Name</FormLabel>
								<Input
									type="text"
									name="lastName"
									placeholder="Enter Last Name"
									value={formData.lastName}
									onChange={handleFormChange}
									required
								/>
							</FormControl>
							<FormControl>
								<FormLabel color="primary.600">Customer ID</FormLabel>
								<Input
									type="text"
									name="customerID"
									placeholder="Enter CustomerID"
									value={formData.customerID}
									onChange={handleFormChange}
									required
								/>
							</FormControl>
							<FormControl>
								<FormLabel color="primary.600">Address</FormLabel>
								<Input
									type="text"
									name="address"
									placeholder="Enter Address"
									value={formData.address}
									onChange={handleFormChange}
									required
								/>
							</FormControl>
							<Button
								size="md"
								rounded="md"
								color="white"
								bg="primary.500"
								_hover={{
									bg: 'primary.600',
								}}
								px={8}
								mt={1}
								type="submit"
							>
								Submit
							</Button>
						</VStack>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default CustomerForm;
