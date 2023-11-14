interface GradientBarProps {
	direction: 'left' | 'right'
}

enum Direction {
	'left' = 'l',
	'right' = 'r',
}

export const GradientBar = ({ direction }: GradientBarProps) => {
	return <div className={`bg-gradient-to-${Direction[direction]} from-secondary to-black h-9`}></div>
}
