import Link from 'next/link'

interface NavigationLinkProps {
	href: string
	text: string
}

export const NavigationLink = ({ href, text }: NavigationLinkProps) => {
	return (
		<li>
			<Link className="btn btn-ghost normal-case text-info text-xl hover:text-white" href={href}>
				{text}
			</Link>
		</li>
	)
}
