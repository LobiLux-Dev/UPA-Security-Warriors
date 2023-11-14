import { GradientBars } from './components'

interface ContainerProps {
	accent?: boolean
	children: React.ReactNode
	hideGradient?: boolean
}

export const Container = ({ accent = false, children, hideGradient = false }: ContainerProps) => {
	return (
		<div className={`${accent && 'bg-accent'} flex items-center min-h-screen py-10`}>
			<div className="container mx-auto relative">
				<div className="flex gap-10 items-center justify-center flex-col">
					{!hideGradient && <GradientBars top="0" right="full" />}
					{children}
					{!hideGradient && <GradientBars top="full" right="0" />}
				</div>
			</div>
		</div>
	)
}
