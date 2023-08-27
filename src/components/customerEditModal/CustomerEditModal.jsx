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
import { editCustomerFormFields } from '../../constant/constant';

const CustomerEditModal = ({ customer, isOpen, onClose, onSubmit }) => {
	const toast = useToast();
	const [editedCustomer, setEditedCustomer] = useState(customer);

	useLayoutEffect(() => {
		setEditedCustomer(customer);
	}, [customer]);

	const handleFieldChange = (e) => {
		const { name, value } = e.target;
		setEditedCustomer((prevCustomer) => ({
			...prevCustomer,
			[name]: value,
		}));
	};

	const handleSubmit = () => {
		onSubmit(editedCustomer);
		onClose();
		toast({
			title: 'Customer Record Updated',
			status: 'success',
			duration: 2000,
			isClosable: true,
			position: 'top',
		});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					color="primary.500"
					bgColor="gray.200"
					borderTopRadius="md"
				>
					Edit Customer Details
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{editCustomerFormFields.map((field) => (
						<FormControl key={field.key}>
							<FormLabel color="primary.500">{field.label}</FormLabel>
							<Input
								isDisabled
								name={field.name}
								value={editedCustomer ? editedCustomer[field.key] : ''}
								onChange={handleFieldChange}
								disabled={field.isDisabled}
							/>
						</FormControl>
					))}
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
