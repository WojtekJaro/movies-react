import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const NAV_ITEMS = [
	{
		label: 'Homepage',
		href: '/',
	},
	{
		label: 'Filmy',
		href: '/FilmsPage',
	},
	{
		label: 'Seriale',
		href: '/SerialsPage'
	}
]

const Header = () => {
	return (
		<Box >
			<Flex>
				<Stack direction='row'>
					{NAV_ITEMS.map(navItem => (
						<Button size='lg'>
							<Link to={navItem.href}>{navItem.label}</Link>
						</Button>
					))}
				</Stack>
			</Flex>
		</Box>
	)
}

export default Header
