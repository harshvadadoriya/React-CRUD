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
import { useLayoutEffect, useState } from 'react';

const CustomerEditModal = ({ customer, isOpen, onClose, onSubmit }) => {
	const toast = useToast();
	const [editedCustomer, setEditedCustomer] = useState(customer);

	useLayoutEffect(() => {
		setEditedCustomer(customer);
	}, [customer]);

	const handleFieldChange = (field, value) => {
		setEditedCustomer((prevCustomer) => ({
			...prevCustomer,
			[field]: value,
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
				<ModalHeader color="primary.500">Edit Customer</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel color="primary.500">Customer ID</FormLabel>
						<Input
							isDisabled
							name="customerID"
							value={editedCustomer?.customerID}
							onChange={(e) => handleFieldChange('customerID', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">First Name</FormLabel>
						<Input
							name="firstName"
							value={editedCustomer?.firstName}
							onChange={(e) => handleFieldChange('firstName', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">Last Name</FormLabel>
						<Input
							name="lastName"
							value={editedCustomer?.lastName}
							onChange={(e) => handleFieldChange('lastName', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel color="primary.500">Address</FormLabel>
						<Input
							name="address"
							value={editedCustomer?.address}
							onChange={(e) => handleFieldChange('address', e.target.value)}
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
