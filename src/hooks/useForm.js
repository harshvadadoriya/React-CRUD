import { useState } from 'react';

export const useForm = (initialState, onSubmit, displayToast) => {
	const [formData, setFormData] = useState(initialState);

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			await onSubmit(formData);
			displayToast();
			setFormData(initialState);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
	};
};
