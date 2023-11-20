import Link from 'next/link'

import type { MenuItemProps } from '@/interfaces/layout/header'

export const MenuItem: React.FC<MenuItemProps> = ({ handleMenu, href, text }) => {
	return (
		<Link
			className="duration-300 hover:text-gray-400 my-2 transition-colors transform"
			href={href}
			onClick={handleMenu}
			title={text}
		>
			{text}
		</Link>
	)
}
