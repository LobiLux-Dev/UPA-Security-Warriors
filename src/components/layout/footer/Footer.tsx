import { Mulish } from 'next/font/google'

import { FooterSection, LogoLink } from './'

const mulish = Mulish({
	subsets: ['latin'],
})

const ProgrammersList = [
	'José Luis Sánchez Vázquez',
	'Marco Antonio de Jesús Vázquez Noriega',
	'Marco Polo Muñoz Nájera',
	'Erik Rafael Martínez Ponce',
]

const DesignersList = ['Jessica Ximena Medina Gutiérrez', 'Diego Vera Guerra']

const Footer = () => (
	<footer className="bg-white footer items-center justify-between px-10 text-neutral-content">
		<div className={`${mulish.className} flex font-bold gap-5`}>
			<FooterSection title="Programado por:" items={ProgrammersList} />
			<FooterSection title="Diseñado por:" items={DesignersList} />
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
