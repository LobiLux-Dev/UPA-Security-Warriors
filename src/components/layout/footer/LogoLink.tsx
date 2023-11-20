import Image from 'next/image'

import type { LogoLinkProps } from '@/interfaces/layout/footer'

export const LogoLink: React.FC<LogoLinkProps> = ({ img, href }) => {
	return (
		<section className="mx-auto" title={img.alt}>
			<div>
				<a href={href} target="_blank">
					<Image alt={img.alt} height={150} src={img.src} title={img.alt} width={250} />
				</a>
			</div>
		</section>
	)
}
