import { Card, CardContainer } from '@/components/card'
import { Section, Title } from '@/components'

const PreventiveMaintenancePage: React.FC = () => {
	return (
		<div>
			<Title title="Mantenimiento preventivo" />
			<CardContainer>
				<Card
					title="Mantenimiento de hadware"
					img={{ alt: 'Hardware', height: 219, src: '/img/png/hardware.png', width: 408 }}
				>
					<p>
						El mantenimiento del hardware implica principalmente la limpieza regular para eliminar el polvo acumulado
						debido al uso de la computadora. Se recomienda apagar el equipo cuando no esté en uso para este fin. Además,
						se llevan a cabo una serie de tareas y procedimientos que incluyen la inspección de posibles anomalías,
						limpieza y reemplazo de piezas, materiales y sistemas. Estas acciones ayudan a prevenir fallas en el equipo
						de cómputo y aseguran su funcionamiento óptimo, de acuerdo con sus capacidades.
					</p>
				</Card>
				<Card
					title="Mantenimiento de software"
					img={{ alt: 'Software', height: 310, src: '/img/png/software.png', width: 380 }}
				>
					<p>
						Mantener el software de una computadora es fundamental para su eficiencia y seguridad. Esto abarca la
						actualización del sistema operativo y el software, mantener programas antivirus y antimalware al día,
						limpiar y desfragmentar el disco duro, realizar copias de seguridad, monitorear el rendimiento, desinstalar
						software innecesario, actualizar controladores y estar atento a las advertencias de seguridad. Al seguir
						estas pautas, se garantiza el óptimo funcionamiento de la computadora.
					</p>
				</Card>
			</CardContainer>
			<Section
				text="Descubre qué implica el mantenimiento, cómo se aplica y cuál es la frecuencia recomendada para llevarlo a cabo."
				textCenter
				title={
					<>
						Aprende más sobre el <span>mantenimiento preventivo</span>
					</>
				}
			/>
			<CardContainer>
				<Card title="¿Qué es el mantenimiento preventivo?">
					<p>
						El mantenimiento preventivo en informática abarca acciones regulares como limpieza física, actualización de
						software, creación de copias de seguridad y supervisión del rendimiento. Su propósito es prevenir problemas
						en equipos y sistemas informáticos, evitando fallos, mejorando la disponibilidad y fiabilidad de los
						equipos, y disminuyendo los costos relacionados con el mantenimiento correctivo.
					</p>
				</Card>
				<Card title="¿Cómo y cuándo se emplea el mantenimiento?">
					<p>
						El mantenimiento preventivo se realiza mediante tareas como la limpieza física de los equipos, la
						actualización de software, la realización de copias de seguridad, la optimización del sistema operativo y la
						monitorización del rendimiento de forma regular y conforme a un calendario establecido previamente.
					</p>
				</Card>
			</CardContainer>
		</div>
	)
}

export default PreventiveMaintenancePage
