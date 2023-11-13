import { Mulish } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import { Footer } from '@/components/layout'

import './globals.css'

const mulish = Mulish({
	subsets: ['latin'],
})

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
			<body className={`${mulish.className} flex flex-col min-h-screen`}>
				<header className="navbar flex-col sm:flex-row">
					<div className="flex-1">
						<Link className="btn btn-ghost font-bold normal-case text-white text-xl" href="/">
							<Image alt="Logo" height={32} src="/favicon.ico" width={32} /> UPA Security Warriors
						</Link>
					</div>
					<div className="flex-none">
						<nav>
							<ul className="flex flex-col gap-5 items-center md:flex-row">
								<li>
									<Link className="btn btn-ghost normal-case text-info text-xl" href="#home">
										Inicio
									</Link>
								</li>
								<li>
									<Link className="btn btn-ghost normal-case text-info text-xl" href="#antivirus">
										Antivirus
									</Link>
								</li>
								<li>
									<Link className="btn btn-ghost normal-case text-info text-xl" href="#news">
										Noticias
									</Link>
								</li>
								<li>
									<Link className="btn btn-ghost normal-case text-info text-xl" href="#contact-us">
										Contáctanos
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
