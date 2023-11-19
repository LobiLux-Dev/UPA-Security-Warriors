import { Card, Section, Title } from '@/components'

const AntivirusandvirusAvastPage: React.FC = () => {
	return (
		<div>
			<Title image={{ alt: 'Avast', height: 1080, src: '/avast-title.png', width: 1920 }} title="Kaspersky" />
			<Section
				title="Kaspersky Antivirus: Protección Avanzada para tu Ciberseguridad"
				text="En un mundo cada vez más interconectado, la seguridad informática se ha convertido en una prioridad fundamental. Con la proliferación de amenazas cibernéticas, que van desde virus y malware hasta ataques de phishing, tener un software antivirus sólido es esencial para proteger nuestros dispositivos y datos. Avast Antivirus destaca como una opción popular y confiable en esta lucha constante contra las amenazas digitales."
			>
				<div>
					<h3 className="font-bold text-xl">Historia y Desarrollo</h3>
					<p>
						Avast, fundada en 1988 por Pavel Baudis y Eduard Kucera en la República Checa, ha evolucionado a lo largo de
						los años para convertirse en uno de los líderes en la industria de la seguridad cibernética. Comenzando como
						un proyecto de investigación, la compañía ha crecido hasta ofrecer una gama completa de soluciones de
						seguridad, con el antivirus Avast siendo su producto estrella.
					</p>
				</div>
				<div>
					<h3 className="font-bold text-xl">Interfaz de Usuario Intuitiva</h3>
					<p>
						La interfaz de Avast es conocida por su diseño amigable e intuitivo. Incluso para aquellos que no son
						expertos en tecnología, la navegación por las funciones y la comprensión de los informes de seguridad son
						tareas sencillas.
					</p>
				</div>
				<div>
					<h3 className="font-bold text-xl">Versiones Gratuita y de Pago</h3>
					<p>
						Avast ofrece una versión gratuita que proporciona una sólida protección contra malware básico. Para aquellos
						que buscan funciones adicionales, como un cortafuegos más avanzado, protección contra ransomware y opciones
						de privacidad mejoradas, la versión de pago, Avast Premium Security, podría ser la elección adecuada.
					</p>
				</div>
			</Section>
			<Section
				title={
					<>
						Conoce más de <span>Avast</span>
					</>
				}
				text="Conoce las ventajas, desventajas y el porque elegir  Avast"
				textCenter
			>
				<div className="container grid grid-cols-1 px-10 mx-auto gap-5 my-20 md:grid-cols-2">
					<Card title="Ventajas de Avast">
						<ul className="list-disc px-5">
							<li>Detecta y bloquea de virus y otro software malicioso.</li>
							<li>Encuentra puntos débiles en la seguridad de la Wi-Fi.</li>
							<li>Impide que los hackers cifren fotos y archivos personales.</li>
							<li>Protege tus contraseñas.</li>
							<li>Evita los sitios falsificados.</li>
							<li>Ejecuta de manera segura programas sospechosos.</li>
						</ul>
					</Card>
					<Card title="Desventajas de Avast">
						<ul className="list-disc px-5">
							<li>Escaso nivel de protección.</li>
							<li>Ralentización de equipos.</li>
							<li>Es muy invasivo.</li>
							<li>Bloquea aplicaciones legítimas (nuestro caso).</li>
							<li>Daña y elimina archivos del sistema.</li>
						</ul>
					</Card>
					<Card doubleColumn title="Porque elegir Avast?">
						Avast Antivirus es una opción sólida como mejor antivirus que brinda protección integral y personalizada
						contra malware, respaldada por un conjunto de funciones avanzadas y opciones de suscripción flexibles que se
						adaptan a sus necesidades de seguridad en línea.
					</Card>
				</div>
				<div className="flex items-center justify-center">
					<a
						className="bg-gradient-to-b from-primary to-secondary rounded-md py-2 px-32"
						href="https://www.avast.com"
						target="_blank"
					>
						Comprar
					</a>
				</div>
			</Section>
		</div>
	)
}

export default AntivirusandvirusAvastPage
