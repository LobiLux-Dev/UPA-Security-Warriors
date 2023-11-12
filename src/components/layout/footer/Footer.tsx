import { Mulish } from 'next/font/google'

import { LogoLink } from './LogoLink'

const mulish = Mulish({
	subsets: ['latin'],
})

const creators = [
	'José Luis Sánchez Vázquez',
	'Marco Antonio de Jesús Vázquez Noriega',
	'Marco Polo Muñoz Nájera',
	'Erik Rafael Martínez Ponce',
	'Jessica Ximena Medina Gutiérrez',
	'Diego Vera Guerra',
]

const Footer = () => (
	<footer className="bg-white footer items-center justify-between px-10 text-neutral-content">
		<div className={`font-bold ${mulish.className}`}>
			<div>
				<span>Creado por Diego y Jessica. </span>
				<span className="font-normal">Derechos reservados © {new Date().getFullYear()}</span>
			</div>
			<div className="ms-9">
				<ul>
					<li className="text-black/[.5]">Creado por:</li>
					{creators.map((creator, index) => (
						<li key={index}>{creator}</li>
					))}
				</ul>
			</div>
		</div>
		<div className="flex gap-5 items-center">
			<LogoLink href="https://upa.edu.mx/" src="/UPA-Logo.png" alt="UPA Logo" height={185} width={279} />
			<LogoLink
				href="https://upa.edu.mx/oferta-educativa/convocatoria-2023/"
				src="/ISC-Logo.png"
				alt="ISC Logo"
				height={157}
				width={265}
			/>
		</div>
	</footer>
)

export { Footer }
