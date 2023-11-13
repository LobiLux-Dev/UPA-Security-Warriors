import { BsFillCheckCircleFill } from 'react-icons/bs'

export function Card() {
	return (
		<div className="card w-96 h-[400px] bg-base-100 shadow-xl">
			<div className="card-body">
				<span className="text-primary text-xs">Gratis</span>
				<p className="card-title text-4xl mb-4">Karspersky</p>
				<p className="font-thin mb-4">Protección de identidad y amenazas</p>
				<div className="flex items-center gap-2 text-primary">
					<BsFillCheckCircleFill />
					<p className="font-thin text-neutral-300">Navegación privada e ininterrumpida</p>
				</div>
				<div className="flex items-center gap-2 text-primary">
					<BsFillCheckCircleFill />
					<p className="font-thin text-neutral-300">Protección de pagos en línea</p>
				</div>
				<div className="flex items-center gap-2 text-primary">
					<BsFillCheckCircleFill />
					<p className="font-thin text-neutral-300">Optimiza el rendimiento</p>
				</div>
				<div className="card-actions mt-4">
					<div className="btn btn-secondary w-full ">Comprar</div>
				</div>
			</div>
		</div>
	)
}
