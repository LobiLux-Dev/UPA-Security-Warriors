import type { CardContainerProps } from '@/interfaces/card'

export const CardContainer: React.FC<CardContainerProps> = ({ children, cols = 2, rows = 1 }) => {
	return (
		<div className={`container gap-5 grid grid-cols-1 md:grid-cols-${cols} md:grid-rows-${rows} mx-auto my-20 px-10`}>
			{children}
		</div>
	)
}
