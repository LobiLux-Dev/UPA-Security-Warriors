import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([])

export const UPASecurityWarriorsApp = () => {
	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	)
}
