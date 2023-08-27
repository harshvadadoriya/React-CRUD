export const headerLabels = [
	{ label: 'First Name', key: 'firstName' },
	{ label: 'Last Name', key: 'lastName' },
	{ label: 'Customer ID', key: 'customerID' },
	{ label: 'Address', key: 'address' },
];

export const customerFormFields = [
	{
		label: 'First Name',
		name: 'firstName',
		placeholder: 'Enter First Name',
		type: 'text',
		required: true,
	},
	{
		label: 'Last Name',
		name: 'lastName',
		placeholder: 'Enter Last Name',
		type: 'text',
		required: true,
	},
	{
		label: 'Customer ID',
		name: 'customerID',
		placeholder: 'Enter CustomerID',
		type: 'text',
		required: true,
	},
	{
		label: 'Address',
		name: 'address',
		placeholder: 'Enter Address',
		type: 'text',
		required: true,
	},
];

export const editCustomerFormFields = [
	{
		label: 'Customer ID',
		name: 'customerID',
		key: 'customerID',
		isDisabled: true,
	},
	{
		label: 'First Name',
		name: 'firstName',
		key: 'firstName',
		isDisabled: false,
	},
	{
		label: 'Last Name',
		name: 'lastName',
		key: 'lastName',
		isDisabled: false,
	},
	{
		label: 'Address',
		name: 'address',
		key: 'address',
		isDisabled: false,
	},
];

export const searchHeaderFields = [
	{
		value: 'firstName',
		placeholder: 'Enter First Name',
	},
	{
		value: 'lastName',
		placeholder: 'Enter Last Name',
	},
	{
		value: 'customerID',
		placeholder: 'Enter CustomerID',
	},
	{
		value: 'address',
		placeholder: 'Enter Address',
	},
];
