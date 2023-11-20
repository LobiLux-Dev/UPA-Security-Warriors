import Image from 'next/image'

import type { SectionProps } from '@/interfaces/section'

export const Section: React.FC<SectionProps> = ({ children, img, text, textCenter, title }) => {
	return (
		<section className="container mx-auto my-20 px-5">
			<h2 className="text-center font-bold my-10 text-3xl [&>span]:text-secondary">{title}</h2>
			<div className="grid grid-cols-2 items-center">
				{img && (
					<Image alt={img.alt} className="mx-auto w-0 md:w-fit" height={img.height} src={img.src} width={img.width} />
				)}
				<p className={`${textCenter && 'text-center'} ${img && 'md:col-span-1'} col-span-2 my-10`}>{text}</p>
			</div>
			{children}
		</section>
	)
}
