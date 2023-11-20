import Image from 'next/image'

import type { CardProps } from '@/interfaces/card'

export const Card: React.FC<CardProps> = ({ children, doubleColumn, title, img }) => {
	return (
		<div className={`${doubleColumn && 'md:col-span-2'} bg-accent p-6 rounded-lg shadow w-full`}>
			<Image alt="Card Icon" height={50} src="/img/svg/card-icon.svg" width={50} />
			<h5 className="font-bold mb-2 text-2xl tracking-tight">{title}</h5>
			<div className="mb-3 text-gray-400">{children}</div>
			{img && (
				<Image alt={img.alt} className="mx-auto w-full md:w-9/12" height={img.height} src={img.src} width={img.width} />
			)}
		</div>
	)
}
