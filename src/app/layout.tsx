import type { Metadata } from 'next'

import { Footer } from '@/components/layout'

import './globals.css'

export const metadata: Metadata = {
	title: 'UPA Security Warriors',
	description:
		'Your go-to source for cybersecurity insights, antivirus solutions, and threat prevention. Explore the latest trends and protect what matters most with us!',
}

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="es">
			<body className="flex flex-col min-h-screen">
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
