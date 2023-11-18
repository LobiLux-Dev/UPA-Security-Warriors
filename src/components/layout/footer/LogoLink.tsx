import Image from 'next/image'

interface Props {
	alt: string
	href: string
	src: string
}

export const LogoLink: React.FC<Props> = ({ alt, href, src }) => {
	return (
		<section>
			<div>
				<a href={href}>
					<Image alt={alt} height={150} src={src} title={alt} width={250} />
				</a>
			</div>
		</section>
	)
}
