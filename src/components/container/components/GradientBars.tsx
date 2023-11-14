import { GradientBar } from './'

interface GradientBarsProps {
	right: '0' | 'full'
	top: '0' | 'full'
}

export const GradientBars = ({ right, top }: GradientBarsProps) => {
	return (
		<div
			className={`-rotate-45 -translate-y-1/2 absolute flex flex-col gap-6 right-${right} top-${top} translate-x-1/2 w-40 z-0`}
		>
			<GradientBar direction="left" />
			<GradientBar direction="right" />
		</div>
	)
}
