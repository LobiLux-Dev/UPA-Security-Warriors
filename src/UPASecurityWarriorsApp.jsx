import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

const theme = extendTheme({
	config: {
		initialColorMode: 'dark',
	},
	colors: {
		primary_x: '#FF6079',
		primary_xx: '#FE3051',
		dark_x: '#0A0A0A',
		dark_xx: '#111111',
		dark_xxx: '#222222',
		muted: '#A1B0BF',
		light_50: '#ffffff80',
	},
})

export const UPASecurityWarriorsApp = () => {
	return (
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	)
}
