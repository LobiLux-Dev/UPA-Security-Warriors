import { Card, CardContainer } from '@/components/card'
import { Section, Title } from '@/components'

const AntivirusandvirusKasperskyPage: React.FC = () => {
	return (
		<div>
			<Title img={{ alt: 'Kaspersky', height: 239, src: '/img/png/kaspersky-title.png', width: 1440 }} />
			<Section
				title="Kaspersky Antivirus: Protección Avanzada para tu Ciberseguridad"
				text="En un entorno cada vez más interconectado y tecnológicamente dependiente, la seguridad cibernética se ha convertido en una preocupación crítica tanto para individuos como para empresas. Las amenazas en línea, que van desde virus y malware hasta ataques de phishing y ransomware, representan riesgos para la privacidad y la integridad de los datos. Kaspersky Antivirus, desarrollado por la reconocida empresa rusa Kaspersky Lab, ha sido durante mucho tiempo una de las soluciones más confiables para contrarrestar estas amenazas. En este artículo, exploraremos en detalle Kaspersky Antivirus y analizaremos por qué se ha consolidado como una opción popular en el ámbito de la seguridad informática."
			>
				<div className="my-2">
					<h3 className="font-bold text-xl">Historia de Kaspersky Lab</h3>
					<p className="mx-5">
						En 1997, Eugene Kaspersky, reconocido experto en seguridad informática, estableció Kaspersky Lab. A lo largo
						de su trayectoria, la empresa ha evolucionado desde sus inicios modestos hasta convertirse en un líder
						mundial en la lucha contra el cibercrimen. La firme dedicación a la investigación y al desarrollo de
						tecnologías de seguridad avanzadas ha sido fundamental para proteger a millones de usuarios en todo el
						mundo.
					</p>
				</div>
			</Section>
			<Section
				title={
					<>
						Conoce más de <span>Kaspersky</span>
					</>
				}
				text="Conoce las ventajas, desventajas y el porque elegir Kaspersky"
				textCenter
			>
				<CardContainer>
					<Card title="Ventajas de Kaspersky">
						<div>
							<h4 className="font-bold text-lg">1.Protección Integral</h4>
							<p className="mx-5">
								Kaspersky ofrece una amplia gama de soluciones que van desde antivirus básicos hasta medidas avanzadas
								de seguridad, cubriendo dispositivos y redes.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">2.Investigación Avanzada</h4>
							<p className="mx-5">
								Su enfoque en la investigación de amenazas cibernéticas les permite estar a la vanguardia en la
								detección y neutralización de nuevos riesgos.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">3.Reputación y Confianza</h4>
							<p className="mx-5">
								Ganó reconocimiento global debido a su experiencia, años en la industria y reputación por brindar
								soluciones de seguridad confiables.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">4.Actualizaciones Constantes</h4>
							<p className="mx-5">
								Se destaca por su capacidad para detectar y neutralizar nuevas amenazas de manera rápida y efectiva
								mediante actualizaciones frecuentes, manteniendo así la protección de sus usuarios al día.
							</p>
						</div>
					</Card>
					<Card title="Desventajas de Avast">
						<div>
							<h4 className="font-bold text-lg">1.Controversias de Privacidad</h4>
							<p className="mx-5">
								Ha habido preocupaciones y controversias en torno a la seguridad de los datos y la relación de la
								empresa con el gobierno ruso, lo que ha llevado a restricciones de uso en ciertos entornos
								gubernamentales.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">2.Posible Impacto en el Rendimiento</h4>
							<p className="mx-5">
								En algunos casos, las soluciones de seguridad pueden afectar el rendimiento del dispositivo, aunque
								Kaspersky se esfuerza por minimizar este impacto.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">3.Costo Relativo</h4>
							<p className="mx-5">
								Comparado con algunas alternativas, el precio de las suscripciones de Kaspersky podría ser considerado
								relativamente alto por algunos usuarios.
							</p>
						</div>
						<div>
							<h4 className="font-bold text-lg">4.Interfaz Compleja</h4>
							<p className="mx-5">
								Para algunos usuarios, la interfaz de usuario puede resultar compleja o abrumadora, especialmente para
								aquellos menos familiarizados con tecnología o seguridad informática.
							</p>
						</div>
					</Card>
					<Card doubleColumn title="¿Cuáles son las razones para optar por Kaspersky?">
						<p>
							Kaspersky es una opción popular por varias razones. Ofrece una sólida protección contra una amplia gama de
							amenazas cibernéticas, como virus, malware, ransomware y phishing. Además, se destaca por:
						</p>
						<div className="px-5">
							<div>
								<h4 className="font-bold text-lg">1.Eficacia en la detección</h4>
								<p className="mx-5">
									Su motor de detección es reconocido por su eficacia para identificar y neutralizar amenazas.
								</p>
							</div>
							<div>
								<h4 className="font-bold text-lg">2.Funciones adicionales</h4>
								<p className="mx-5">
									Ofrece características como control parental, protección de la privacidad en línea y herramientas de
									optimización del sistema.
								</p>
							</div>
							<div>
								<h4 className="font-bold text-lg">3.Interfaz amigable</h4>
								<p className="mx-5">
									Su interfaz es intuitiva y fácil de usar, lo que facilita la navegación y configuración para usuarios
									de distintos niveles de experiencia.
								</p>
							</div>
							<div>
								<h4 className="font-bold text-lg">4.Actualizaciones regulares</h4>
								<p className="mx-5">
									Kaspersky se actualiza periódicamente para mantenerse al día con las últimas amenazas y tendencias en
									seguridad cibernética.
								</p>
							</div>
							<div>
								<h4 className="font-bold text-lg">5.Compatibilidad</h4>
								<p className="mx-5">
									Funciona en múltiples plataformas (Windows, macOS, Android, iOS) y tiene versiones adaptadas para
									diferentes dispositivos.
								</p>
							</div>
						</div>
					</Card>
				</CardContainer>
				<div className="flex items-center justify-center">
					<a
						className="bg-gradient-to-b from-primary to-secondary rounded-md py-2 px-32"
						href="https://latam.kaspersky.com/"
						target="_blank"
					>
						Comprar
					</a>
				</div>
			</Section>
		</div>
	)
}

export default AntivirusandvirusKasperskyPage
