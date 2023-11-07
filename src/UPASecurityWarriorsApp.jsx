import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LayoutComponent } from './components'
import {
	AntivirusAndVirusInfoPage,
	HomePage,
	PasswordsInfoPage,
	PreventiveMaintenanceInfoPage,
	RealCasesInfoPage,
	ResponsibilitiesInfoPage,
	SafeNavigationInfoPage,
	SocialMediaRisksInfoPage,
} from './pages'

const routes = [
	{
		path: '/',
		element: <LayoutComponent page={<HomePage />} />,
	},
	{
		path: '/info',
		children: [
			{
				path: 'antivirusandvirus',
				element: <LayoutComponent page={<AntivirusAndVirusInfoPage />} />,
			},
			{
				path: 'passwords',
				element: <LayoutComponent page={<PasswordsInfoPage />} />,
			},
			{
				path: 'preventivemaintenance',
				element: <LayoutComponent page={<PreventiveMaintenanceInfoPage />} />,
			},
			{
				path: 'realcases',
				element: <LayoutComponent page={<RealCasesInfoPage />} />,
			},
			{
				path: 'responsibilities',
				element: <LayoutComponent page={<ResponsibilitiesInfoPage />} />,
			},
			{
				path: 'safenavigation',
				element: <LayoutComponent page={<SafeNavigationInfoPage />} />,
			},
			{
				path: 'socialmediarisks',
				element: <LayoutComponent page={<SocialMediaRisksInfoPage />} />,
			},
		],
	},
]

const router = createBrowserRouter(routes)

export const UPASecurityWarriorsApp = () => {
	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	)
}
