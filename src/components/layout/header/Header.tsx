import Image from 'next/image'
import Link from 'next/link'

import { NavigationLinks } from './'

export const Header = () => {
	return (
		<header className="navbar flex-col sm:flex-row">
			<div className="flex-1">
				<Link className="btn btn-ghost font-bold normal-case text-white text-xl" href="/">
					<Image alt="Logo" height={32} src="/favicon.ico" width={32} /> UPA Security Warriors
				</Link>
			</div>
			<div className="flex-none">
				<nav>
					<NavigationLinks />
				</nav>
			</div>
		</header>
	)
}
