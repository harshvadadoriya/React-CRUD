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

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormData(initialState);
		displayToast();
	};

	return {
		formData,
		handleFormChange,
		handleFormSubmit,
	};
};
