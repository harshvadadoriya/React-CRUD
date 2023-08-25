import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const CustomerEditModal = ({ customer, isOpen, onClose, onSubmit }) => {
	const toast = useToast();
	const [editedCustomer, setEditedCustomer] = useState(customer);

	useEffect(() => {
		setEditedCustomer(customer);
	}, [customer]);

	const handleFieldChange = (e) => {
		const { name, value } = e.target;
		setEditedCustomer((prevCustomer) => ({
			...prevCustomer,
			[name]: value,
		}));
	};

	const displayToast = () => {
		toast({
			title: 'Customer Record Updated',
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'top',
		});
	};

	const handleSubmit = () => {
		onSubmit(editedCustomer);
		onClose();
		displayToast();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader color="primary.500">Edit Customer Details</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel color="primary.500">Customer ID</FormLabel>
						<Input
							isDisabled
							name="customerID"
							value={editedCustomer?.customerID}
							onChange={handleFieldChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">First Name</FormLabel>
						<Input
							name="firstName"
							value={editedCustomer?.firstName}
							onChange={handleFieldChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">Last Name</FormLabel>
						<Input
							name="lastName"
							value={editedCustomer?.lastName}
							onChange={handleFieldChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">Address</FormLabel>
						<Input
							name="address"
							value={editedCustomer?.address}
							onChange={handleFieldChange}
						/>
					</FormControl>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
					<Button onClick={onClose} ml={3}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CustomerEditModal;
