import {
	Box,
	Button,
	Center,
	Heading,
	VStack,
	useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { addCustomerFormData } from '../../redux/customerSlice/CustomerSlice';
import { customerFormFields } from '../../constant/constant';
import CustomInput from '../customInput';

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
							{customerFormFields.map((field) => (
								<CustomInput
									searchInput={false}
									key={field.name}
									type={field.type}
									label={field.label}
									name={field.name}
									placeholder={field.placeholder}
									value={formData[field.name]}
									onChange={handleFormChange}
									required={field.required}
								/>
							))}
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
