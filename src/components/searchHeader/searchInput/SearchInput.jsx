import { Input } from '@chakra-ui/react';

const SearchInput = ({ placeholder, value, onChange }) => {
	return (
		<Input
			borderWidth="2px"
			bgColor="gray.100"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default SearchInput;
