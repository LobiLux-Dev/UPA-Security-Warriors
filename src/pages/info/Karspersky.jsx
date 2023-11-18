import { HeaderTitle } from '../../components/HeaderTitle'
import { NavBar } from '../../components/NavBar'
import Card from '../mantenimiento/Card'

export function Karspersky() {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Karspersky'} />
			<div className="flex flex-col w-3/5 mx-auto items-center gap-5 mt-10">
				<h2 className="text-xl font-bold">Kaspersky Antivirus: Protección Avanzada para tu Ciberseguridad</h2>
				<p className="text-justify">
					En un mundo cada vez más interconectado y dependiente de la tecnología, la seguridad cibernética se ha
					convertido en una preocupación crítica para individuos y empresas por igual. Las amenazas en línea, que van
					desde virus y malware hasta ataques de phishing y ransomware, pueden poner en peligro la privacidad y la
					integridad de los datos. Kaspersky Antivirus, desarrollado por la respetada empresa rusa Kaspersky Lab, ha
					sido durante mucho tiempo una de las soluciones más confiables en la lucha contra estas amenazas. En este
					artículo, exploraremos en profundidad Kaspersky Antivirus y por qué es una elección popular en el mundo de la
					seguridad informática.
				</p>

				<p className="text-lg font-bold">La Historia de Kaspersky Lab</p>

				<p>
					Kaspersky Lab fue fundada en 1997 por Eugene Kaspersky, un experto en seguridad informática. Desde sus
					humildes comienzos, la empresa ha crecido y se ha convertido en un líder mundial en la lucha contra el
					cibercrimen. Su enfoque en la investigación y el desarrollo de tecnologías de seguridad avanzadas ha ayudado a
					proteger a millones de usuarios en todo el mundo.
				</p>

				<p className="text-2xl font-bold">
					Conoce mas de <span className="text-[#FE3051]">Kaspersky</span>
				</p>
				<p>Conoce las ventajas, desventajas y el porque elegir karspersky y descubrela</p>
				<div className="flex container justify-between gap-5">
					<Card
						title={'Ventajas de Kaspersky'}
						description={
							'Rendimiento eficiente, firewall y protección de identidad, interfaz intuitiva'
						}
					/>
					<Card
						title={'Desventajas de Kaspersky'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lorem sed congue pretium, nisi erat tempus mi, nec porta mi lorem vitae augue.'
						}
					/>
					<Card
						title={'¿Porque elegir Karspersky?'}
						description={
							'Es un sistema de seguridad informatica diseñada para proteger las computadoras o dispositivos electronicos de posibles ataques de softwares maliciosos.'
						}
					/>
				</div>

				<a href="https://acortar.link/mhr1oi" target="blank" className="btn bg-[#FE3051] w-full my-10">
						Comprar
					</a>
			</div>
		</div>
	)
}
