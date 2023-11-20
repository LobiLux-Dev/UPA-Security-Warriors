import { v4 as uuid } from 'uuid'

import { ExternalLink, FooterSection, LogoLink } from './'
import type { ExternalLinkProps, LogoLinkProps } from '@/interfaces/layout/footer'

const DesignerNames: string[] = ['Diego Vera Guerra', 'Jessica Ximena Medina Gutiérrez']

const ProgrammerNames: string[] = [
	'Erik Rafael Martínez Ponce',
	'José Luis Sánchez Vázquez',
	'Marco Antonio de Jesús Vázquez Noriega',
	'Marco Polo Muñoz Nájera',
]

const logoLinks: LogoLinkProps[] = [
	{ href: 'https://upa.edu.mx', img: { alt: 'UPA', src: '/UPA-Logo.png' } },
	{ href: 'https://upa.edu.mx/oferta-educativa/convocatoria-2023', img: { alt: 'ISC', src: '/ISC-Logo.png' } },
]

const externalLinks: ExternalLinkProps[] = [
	{ href: 'https://www.nextjs.org', text: 'Made with', img: { alt: 'Next', src: '/next.svg' } },
	{ href: 'https://www.vercel.com', text: 'Deployed on', img: { alt: 'Vercel', src: '/vercel.svg' } },
]

export const Footer: React.FC = () => {
	return (
		<footer className="bg-white text-gray-900">
			<div className="lg:py-8 max-w-screen mx-auto p-4 w-full">
				<div className="gap-8 grid grid-cols-1 lg:grid-cols-4 sm:gap-6 sm:grid-cols-2">
					<FooterSection names={DesignerNames} title="Diseñado por:" />
					<FooterSection names={ProgrammerNames} title="Programado por:" />
					{logoLinks.map(logoLink => (
						<LogoLink {...logoLink} key={uuid()} />
					))}
				</div>
				<hr className="border-gray-200 lg:my-8 my-6 sm:mx-auto" />
				<div className="flex flex-col gap-2 text-center">
					{externalLinks.map(externalLink => (
						<ExternalLink {...externalLink} key={uuid()} />
					))}
				</div>
			</div>
		</footer>
	)
}
