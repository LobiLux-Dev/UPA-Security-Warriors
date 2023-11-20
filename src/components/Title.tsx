import Image from 'next/image'

import type { TitleProps } from '@/interfaces/title'

export const Title: React.FC<TitleProps> = ({ img, title }) => {
	return (
		<>
			{img ? (
				<Image alt={img.alt} className="w-full" height={img.height} src={img.src} width={img.width} />
			) : (
				<div className="bg-secondary flex font-bold h-48 items-center justify-center text-6xl text-white">
					<h1>{title}</h1>
				</div>
			)}
		</>
	)
}
