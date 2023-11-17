import {
	AntivirusAndVirusInfoPage,
	HomePage,
	PasswordsInfoPage,
	PreventiveMaintenanceInfoPage,
	RealCasesInfoPage,
	ResponsibilitiesInfoPage,
	SafeNavigationInfoPage,
	SocialMediaRisksInfoPage,
} from '../pages'
import { PageProvider } from '../providers'

/**
 * @typedef {import('react-router-dom').RouteObject} RouteObject
 * @type RouteObject
 */
export const routes = [
	{
		index: true,
		element: <PageProvider page={<HomePage />} />,
	},
	{
		path: 'info',
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
