import { Card } from '.'
import { Forms } from './Forms'


export function SecondSection() {
	return (
		<section className="w-full min-h-screen flex flex-col items-center p-10 relative bg-neutral-900">
			<div className="absolute top-0 left-20">
				<Forms />
			</div>
			<h1 className="text-2xl mt-16">
				Tenemos los mejores antivirus <span className="text-primary">a tu disposición</span>
			</h1>
			<div className="container mt-20 grid grid-cols-3 gap-5 z-10">
				<Card />
				<Card />
				<Card />
			</div>

			<div className="absolute bottom-40 right-20">
				<Forms />
			</div>
		</section>
	)
}
