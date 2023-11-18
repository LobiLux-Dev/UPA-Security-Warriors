import { Mulish } from 'next/font/google'
import type { Metadata } from 'next'

import { Footer, Header } from '@/components/layout'

import './globals.css'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
	authors: [
		{ name: 'Diego Vera Guerra' },
		{ name: 'Erik Rafael Martínez Ponce' },
		{ name: 'Jessica Ximena Medina Gutiérrez' },
		{ name: 'José Luis Sánchez Vázquez' },
		{ name: 'Marco Antonio de Jesús Vázquez Noriega' },
		{ name: 'Marco Polo Muñoz Nájera' },
	],
	creator: 'José Luis Sánchez Vázquez',
	description:
		'Su fuente de información sobre ciberseguridad, soluciones antivirus y prevención de amenazas. Explore las últimas tendencias y proteja lo que más le importa con nosotros.',
	keywords: [
		'Amenaza Digital',
		'Antivirus',
		'Ciberseguridad',
		'Comunicación',
		'Contraseñas',
		'HTTPS',
		'Invasión',
		'Mantenimiento',
		'Navegacion Segura',
		'Noticias',
		'Privacidad',
		'Programas',
		'Protección',
		'Ransomware',
		'Redes Sociales',
		'Riesgo',
		'Seguridad',
		'Tecnologías',
		'Telegram',
		'Tranquilidad',
		'UPA',
		'Usuario',
		'Virus',
		'VPN',
		'WhatsApp',
	],
	title: 'UPA Security Warriors',
}

interface Props {
	children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="es">
			<body className={`${mulish.className} bg-base flex flex-col min-h-screen text-white`}>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
