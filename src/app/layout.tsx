import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
	title: 'UPA Security Warriors',
	description:
		'Your go-to source for cybersecurity insights, antivirus solutions, and threat prevention. Explore the latest trends and protect what matters most with us!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}
