import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
import { PageProvider } from './providers'

const routes = [
	{
		path: '/',
		element: <PageProvider page={<HomePage />} />,
	},
	{
		path: '/info',
		children: [
			{
				path: 'antivirusandvirus',
				element: <PageProvider page={<AntivirusAndVirusInfoPage />} />,
			},
			{
				path: 'passwords',
				element: <PageProvider page={<PasswordsInfoPage />} />,
			},
			{
				path: 'preventivemaintenance',
				element: <PageProvider page={<PreventiveMaintenanceInfoPage />} />,
			},
			{
				path: 'realcases',
				element: <PageProvider page={<RealCasesInfoPage />} />,
			},
			{
				path: 'responsibilities',
				element: <PageProvider page={<ResponsibilitiesInfoPage />} />,
			},
			{
				path: 'safenavigation',
				element: <PageProvider page={<SafeNavigationInfoPage />} />,
			},
			{
				path: 'socialmediarisks',
				element: <PageProvider page={<SocialMediaRisksInfoPage />} />,
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
