import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		addCustomerFormData: (state, action) => {
			state.push(action.payload);
		},
		deleteCustomerData: (state, action) => {
			const customerID = action.payload;
			return state.filter((customer) => customer.customerID !== customerID);
		},
		resetCustomerFormData: () => initialState,
	},
});

export const {
	addCustomerFormData,
	deleteCustomerData,
	resetCustomerFormData,
} = customerSlice.actions;
export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
