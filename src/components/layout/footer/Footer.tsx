import { ExternalLink, FooterSection, LogoLink } from './'

const DesignerList: string[] = ['Diego Vera Guerra', 'Jessica Ximena Medina Gutiérrez']

const ProgrammerList: string[] = [
	'Erik Rafael Martínez Ponce',
	'José Luis Sánchez Vázquez',
	'Marco Antonio de Jesús Vázquez Noriega',
	'Marco Polo Muñoz Nájera',
]

export const Footer: React.FC = () => {
	return (
		<footer className="bg-white">
			<div className="lg:py-8 max-w-screen mx-auto p-4 w-full">
				<div className="gap-8 grid grid-cols-1 lg:grid-cols-4 sm:gap-6 sm:grid-cols-2">
					<FooterSection title="Diseñado por:" items={DesignerList} />
					<FooterSection title="Programado por:" items={ProgrammerList} />
					<LogoLink alt="UPA" href="https://upa.edu.mx" src="/UPA-Logo.png" />
					<LogoLink alt="ISC" href="https://upa.edu.mx/oferta-educativa/convocatoria-2023" src="/ISC-Logo.png" />
				</div>
				<hr className="border-gray-200 lg:my-8 my-6 sm:mx-auto" />
				<div className="flex flex-col gap-2 text-center">
					<ExternalLink alt="Next" href="https://www.nextjs.org" src="/next.svg" text="Made with" />
					<ExternalLink alt="Vercel" href="https://www.vercel.com" src="/vercel.svg" text="Deployed on" />
				</div>
			</div>
		</footer>
	)
}
