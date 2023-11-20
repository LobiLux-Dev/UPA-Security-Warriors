import Image from 'next/image'

import type { ExternalLinkProps } from '@/interfaces/layout/footer'

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, img, text }) => {
	return (
		<span title={`${text} ${img.alt}`}>
			<a href={href} target="_blank">
				<div className="flex gap-2 items-center justify-center">
					<p>{text}</p>
					<Image alt={img.alt} className="inline" height={img.height} src={img.src} width={75} />
				</div>
			</a>
		</span>
	)
}
