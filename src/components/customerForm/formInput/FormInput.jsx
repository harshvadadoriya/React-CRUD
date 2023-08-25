import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FormInput = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	required,
}) => {
	return (
		<FormControl>
			<FormLabel color="primary.600">{label}</FormLabel>
			<Input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</FormControl>
	);
};

export default FormInput;
