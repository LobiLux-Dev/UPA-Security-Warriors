import { Card, CardContainer } from '@/components/card'
import { Section, Title } from '@/components'

const AntiVirusAndVirusAviraPage: React.FC = () => {
	return (
		<div>
			<Title img={{ alt: 'Avast', height: 239, src: '/img/png/avira-title.png', width: 1440 }} />
			<Section
				title="Avira: Mantiene tus programas y controladores al día"
				text="Avira protege todos tus dispositivos, tu privacidad, datos personales, búsquedas, programas, compras, actividades bancarias e incluso tu red doméstica, manteniéndolos seguros."
			>
				<div className="my-2">
					<h3 className="font-bold text-xl">Historia y Desarrollo</h3>
					<p>
						En 1986, la historia de Avira dio inicio con la creación de {'Luke Filewalker'}, un programa antivirus
						desarrollado por Tjark Auerbach en Turingia, Alemania. Dos años más tarde, en 1988, Auerbach fundó{' '}
						{'H+BEDV Datentechnik GmbH'} y presentó su producto antiviral, {'AntiVir'}.
					</p>
				</div>
				<div className="my-2">
					<h3 className="font-bold text-xl">Interfaz de Usuario Intuitiva</h3>
					<p>
						La interfaz de usuario de Avira destaca por su diseño intuitivo y amigable. Ofrece paneles de fácil
						navegación para acceder rápidamente a las diversas funciones de seguridad y configuraciones. Por lo general,
						presenta secciones claramente identificadas para escaneos, protección en tiempo real, firewall, herramientas
						de rendimiento, privacidad y otras funciones relevantes.
					</p>
				</div>
				<div className="my-2">
					<h3 className="font-bold text-xl">Versiones Gratuita y de Pago</h3>
					<p>
						Avira cuenta con una versión gratuita que ofrece protección antivirus básica, seguridad durante la
						navegación y herramientas de optimización del rendimiento. Por otro lado, la versión de pago, como Avira
						Prime, ofrece una protección más completa contra el malware, un firewall avanzado, funciones de privacidad
						adicionales, opciones de personalización y acceso a soporte técnico prioritario.
					</p>
				</div>
			</Section>
			<Section
				title={
					<>
						Conoce más de <span>Avira</span>
					</>
				}
				text="Conoce las ventajas, desventajas y el porque elegir Avira"
				textCenter
			>
				<CardContainer>
					<Card title="Ventajas de Avira">
						<div>
							<h4 className="font-bold text-lg">1.Protección Confiable</h4>
							<p className="mx-5">
								Avira ofrece una sólida defensa contra una amplia gama de amenazas cibernéticas, como virus, malware y
								phishing, asegurando la seguridad de tus dispositivos y datos.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">2.Interfaz Amigable</h4>
							<p className="mx-5">
								Su interfaz intuitiva y de fácil navegación facilita la configuración y el uso de las herramientas de
								seguridad, lo que la hace accesible para usuarios de todos los niveles de experiencia.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">3.Versiones Gratuitas y de Pago</h4>
							<p className="mx-5">
								La opción gratuita proporciona una protección básica, mientras que las versiones de pago, como Avira
								Prime, ofrecen una gama más amplia de funciones, como firewall avanzado, privacidad mejorada y soporte
								técnico prioritario.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">4.Herramientas de Rendimiento</h4>
							<p className="mx-5">
								Además de su enfoque en la seguridad, Avira también incluye herramientas de optimización del sistema que
								pueden mejorar el rendimiento general de tus dispositivos.
							</p>
						</div>
					</Card>
					<Card title="Desventajas de Avira">
						<div>
							<h4 className="font-bold text-lg">1.Publicidad en Versiones Gratuitas</h4>
							<p className="mx-5">
								En la versión gratuita, es común encontrar anuncios o promociones que pueden resultar intrusivos para
								algunos usuarios.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">2.Funcionalidades Limitadas en la Versión Gratuita</h4>
							<p className="mx-5">
								Aunque la versión gratuita ofrece protección básica, carece de características más avanzadas que se
								encuentran en las versiones de pago, como un firewall más robusto o herramientas de privacidad más
								sofisticadas.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">3.Posible Impacto en el Rendimiento</h4>
							<p className="mx-5">
								Algunos usuarios han experimentado que Avira puede ralentizar ligeramente el rendimiento de sus
								dispositivos, especialmente en equipos más antiguos o con recursos limitados.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">4.Soporte Limitado en la Versión Gratuita</h4>
							<p className="mx-5">
								La versión gratuita puede tener acceso limitado al soporte técnico en comparación con las versiones de
								pago, lo que podría dificultar la resolución de problemas específicos.
							</p>
						</div>
					</Card>
					<Card doubleColumn title="¿Cuáles son las razones para elegir Avira?">
						<p>
							Avira es una opción a considerar por su sólida protección contra amenazas cibernéticas como virus y
							malware, su interfaz intuitiva que facilita su uso para todo tipo de usuarios, la flexibilidad de contar
							con una versión gratuita y opciones de pago como Avira Prime con funciones avanzadas, y sus herramientas
							de rendimiento que mejoran el funcionamiento de los dispositivos. Sin embargo, la elección final depende
							de las necesidades específicas de seguridad y preferencias individuales.
						</p>
					</Card>
				</CardContainer>
				<div className="flex items-center justify-center">
					<a
						className="bg-gradient-to-b from-primary to-secondary rounded-md py-2 px-32"
						href="https://www.avira.com/es"
						target="_blank"
					>
						Comprar
					</a>
				</div>
			</Section>
		</div>
	)
}

export default AntiVirusAndVirusAviraPage
