import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/card'
import { Section, Title } from '@/components'
import type { LogoLinkProps } from '@/interfaces/layout/footer'

const links: LogoLinkProps[] = [
	{
		href: '/antivirusandvirus/kaspersky',
		img: {
			alt: 'Kaspersky',
			src: '/img/png/kaspersky.png',
		},
	},
	{
		href: '/antivirusandvirus/avast',
		img: {
			alt: 'Avast',
			src: '/img/png/avast.png',
		},
	},
	{
		href: '/antivirusandvirus/avira',
		img: {
			alt: 'Avira',
			src: '/img/png/avira.png',
		},
	},
]

const AntiVirusAndVirusPage: React.FC = () => {
	return (
		<div>
			<Title title="Antivirus" />
			<Section
				text="Contar con un antivirus en tu computadora es crucial para salvaguardarla de una amplia variedad de amenazas cibernéticas, como virus, malware, spyware, ransomware y otras formas de software malicioso. Estas amenazas pueden comprometer la seguridad de tus datos, robar información personal, disminuir el rendimiento de tu computadora e incluso causar daños significativos. El uso de un antivirus de calidad es una parte esencial para garantizar la ciberseguridad y mantener tanto tu computadora como tus datos seguros."
				title="Conoce más sobre los Antivirus"
			/>
			<div className="container grid grid-cols-1 px-10 mx-auto gap-5 my-20 md:grid-cols-2">
				<Card title="¿Qué es un antivirus?">
					<p>
						Un antivirus es un sistema de seguridad informática diseñado para proteger las computadoras contra posibles
						ataques de software malicioso. Su función principal consiste en escanear los códigos y scripts que ingresan
						al dispositivo.
					</p>
				</Card>
				<Card title="¿Por qué es importante tener un antivirus?">
					<p>
						El antivirus ayuda a detectar y eliminar programas maliciosos antes de que causen daños. Además, ofrece
						protección en tiempo real al monitorear constantemente la actividad en tu computadora y bloquear intentos de
						ataques cibernéticos. Sin él, tu dispositivo queda expuesto a posibles ataques, comprometiendo tu privacidad
						y seguridad en línea.
					</p>
				</Card>
			</div>
			<div className="container mx-auto">
				<h3 className="font-bold text-lg text-center mb-10">Te recomendamos los mejores antivirus</h3>
				<div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-5">
					{links.map(({ href, img }) => (
						<div className="mx-auto" key={uuid()}>
							<Link href={href}>
								{/* eslint-disable-next-line jsx-a11y/alt-text */}
								<Image {...img} height={57} width={206} />
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className="container mx-auto my-20">
				<h3>Virus mas comunes:</h3>
				<ul className="list-disc px-5">
					<li>Nimda</li>
					<li>Stuxnet</li>
					<li>SQL Slammer</li>
					<li>Gusanos (La propagación descontrolada)</li>
					<li>Troyanos</li>
				</ul>
			</div>
		</div>
	)
}

export default AntiVirusAndVirusPage
