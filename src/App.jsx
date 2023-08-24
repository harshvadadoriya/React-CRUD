import { Box, Text } from '@chakra-ui/react';
import CustomerForm from './components/customerForm';
import Navbar from './components/navbar';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import CustomerTable from './components/customerTable';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Navbar />}>
					<Route element={<CustomerForm />} index />
					<Route path="customers" element={<CustomerTable />} />
					<Route
						path="*"
						element={
							<Box>
								<Text>Page Not Found</Text>
							</Box>
						}
					/>
				</Route>
			</>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
