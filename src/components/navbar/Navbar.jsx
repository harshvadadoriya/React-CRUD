import React from 'react';
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import Logo from '../logo/Logo';
import { NavLink, Outlet } from 'react-router-dom';
import { CloseIcon, MenuIcon } from './navIcons/Icons';

const Navbar = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<NavBarContainer {...props}>
				<Logo
					w="100px"
					color={['white', 'white', 'primary.500', 'primary.500']}
				/>
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<MenuLinks isOpen={isOpen} />
			</NavBarContainer>
			<Outlet />
		</>
	);
};

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	);
};

const MenuItem = ({ children, isLast, to, ...rest }) => {
	return (
		<NavLink to={to}>
			<Text display="block" {...rest}>
				{children}
			</Text>
		</NavLink>
	);
};

const MenuLinks = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={['center', 'space-between', 'flex-end', 'flex-end']}
				direction={['column', 'row', 'row', 'row']}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to="/">Home</MenuItem>
				<MenuItem to="/customers">Customers</MenuItem>
				<MenuItem to="/signup">
					<Button
						size="sm"
						rounded="md"
						color={['primary.500', 'primary.500', 'white', 'white']}
						bg={['white', 'white', 'primary.500', 'primary.500']}
						_hover={{
							bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
						}}
					>
						Create Account
					</Button>
				</MenuItem>
			</Stack>
		</Box>
	);
};

const NavBarContainer = ({ children, ...props }) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			p={3}
			bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
			color={['white', 'white', 'primary.700', 'primary.700']}
			{...props}
		>
			{children}
		</Flex>
	);
};

export default Navbar;
