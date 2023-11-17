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
		path: '/antivirus-virus',
		element: <PageProvider page={<AntivirusAndVirusInfoPage />} />,
	},
	{
		path: '/passwords',
		element: <PageProvider page={<PasswordsInfoPage />} />,
	},
	{
		path: '/mantenimiento',
		element: <PageProvider page={<PreventiveMaintenanceInfoPage />} />,
	},
	{
		path: '/casos-reales',
		element: <PageProvider page={<RealCasesInfoPage />} />,
	},
	{
		path: '/responsabilidades',
		element: <PageProvider page={<ResponsibilitiesInfoPage />} />,
	},
	{
		path: '/navegacion-segura',
		element: <PageProvider page={<SafeNavigationInfoPage />} />,
	},
	{
		path: '/redes-sociales',
		element: <PageProvider page={<SocialMediaRisksInfoPage />} />,
	},
]
