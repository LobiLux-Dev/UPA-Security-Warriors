import Link from 'next/link'

interface Props {
	href: string
	text: string
	handleMenu: () => void
}

export const MenuItem: React.FC<Props> = ({ href, text, handleMenu }) => {
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
