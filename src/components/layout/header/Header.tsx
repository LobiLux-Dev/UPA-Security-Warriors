import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

import { MenuItem } from './'
import { CloseSVG, MenuSVG } from '@/components/svg'

const menuItems = [
	{ text: 'Antivirus y Virus', href: '/antivirusandvirus' },
	{ text: 'Contraseñas', href: '/passwords' },
	{ text: 'Mantenimiento preventivo', href: '/preventivemaintenance' },
	{ text: 'Casos reales', href: '/realcases' },
	{ text: 'Responsabilidades del usuario', href: '/responsibilities' },
	{ text: 'Navegación segura', href: '/safenavigation' },
	{ text: 'Riesgo en redes sociales', href: '/socialmediarisks' },
]

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className="text-white text-xl">
			<nav className="relative">
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-between my-4">
						<Link
							className="flex focus:text-gray-400 focus:outline-none font-bold gap-2 hover:text-gray-400 items-center"
							href="/"
						>
							<Image alt="Logo" height={32} src="/favicon.ico" width={32} /> <span>UPA Security Warriors</span>
						</Link>
						<div className="flex">
							<button className="focus:text-gray-400 focus:outline-none hover:text-gray-400" onClick={handleToggle}>
								{!isOpen ? <MenuSVG /> : <CloseSVG />}
							</button>
						</div>
					</div>
					<div
						className={`absolute bg-accent duration-300 ease-in-out inset-x-0 px-6 py-4 transition-all w-full z-20 ${
							isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
						}`}
					>
						<div className="flex flex-col">
							{menuItems.map(({ href, text }) => (
								<MenuItem handleMenu={handleToggle} href={href} key={uuid()} text={text} />
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
