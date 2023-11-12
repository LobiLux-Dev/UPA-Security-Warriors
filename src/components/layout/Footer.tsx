import { Mulish } from 'next/font/google'
import Image from 'next/image'

const mulish = Mulish({
	subsets: ['latin'],
})

export const Footer = () => {
	return (
		<footer className="bg-white footer items-center justify-between px-10 text-neutral-content">
			<div className={`font-bold ${mulish.className}`}>
				<div>
					<span>Creado por Diego y Jessica. </span>
					<span className="font-normal">Derechos reservados © {new Date().getFullYear()}</span>
				</div>
				<div className="ms-9">
					<ul>
						<li className="text-black/[.5]">Creado por:</li>
						<li>José Luis Sánchez Vázquez</li>
						<li>Marco Antonio de Jesús Vázquez Noriega</li>
						<li>Marco Polo Muñoz Nájera</li>
						<li>Erik Rafael Martínez Ponce</li>
						<li>Jessica Ximena Medina Gutiérrez</li>
						<li>Diego Vera Guerra</li>
					</ul>
				</div>
			</div>
			<div className="flex gap-5 items-center">
				<a href="https://upa.edu.mx/" target="_blank">
					<Image alt="UPA Logo" height={185} src="/UPA-Logo.png" width={279} />
				</a>
				<a href="https://upa.edu.mx/oferta-educativa/convocatoria-2023/" target="_blank">
					<Image alt="ISC Logo" height={157} src="/ISC-Logo.png" width={265} />
				</a>
			</div>
		</footer>
	)
}
