import { Box, Text } from '@chakra-ui/react';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import { CustomerForm, CustomerTable, Navbar } from './components';

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
