import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const CustomInput = ({
	label,
	type,
	name,
	placeholder,
	value,
	onChange,
	required,
	searchInput,
}) => {
	return (
		<>
			{searchInput ? (
				<Input
					borderWidth="2px"
					bgColor="gray.100"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			) : (
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
			)}
		</>
	);
	// if (searchInput) {
	// 	return (
	// 		<Input
	// 			borderWidth="2px"
	// 			bgColor="gray.100"
	// 			placeholder={placeholder}
	// 			value={value}
	// 			onChange={onChange}
	// 		/>
	// 	);
	// }

	// return (
	// 	<FormControl>
	// 		<FormLabel color="primary.600">{label}</FormLabel>
	// 		<Input
	// 			type={type}
	// 			name={name}
	// 			placeholder={placeholder}
	// 			value={value}
	// 			onChange={onChange}
	// 			required={required}
	// 		/>
	// 	</FormControl>
	// );
};

export default CustomInput;
