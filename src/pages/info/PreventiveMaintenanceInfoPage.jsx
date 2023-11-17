import { HeaderTitle } from '../../components/HeaderTitle'
import { NavBar } from '../../components/NavBar'
import Card from '../mantenimiento/Card'
import hardware from '../../assets/hardware.png'
import software from '../../assets/software.png'

export const PreventiveMaintenanceInfoPage = () => {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title="Mantenimiento Preventivo" />

			<div className="grid grid-cols-2 grid-rows-2 p-5 place-items-center">
				<Card
					title="Mantenimiento de hadware"
					description="El mantenimiento del hardware se trata principalmente de estar limpiando constantemente el polvo generado por el uso de la computadora, también por eso se procura tener apagado el equipo cuando no este usándose.

					También se realizan una serie de tareas y procedimientos que consisten en la inspección de anomalías, limpieza y sustitución de piezas, materiales y sistemas usados, que ayuden a evitar fallos en el equipo de cómputo y garantizar que se encuentran funcionando de acuerdo a sus capacidades.
					"
					img={hardware}
				/>

				<Card
					title="Mantenimiento de software"
					description="El mantenimiento del software de una computadora es crucial para su eficiencia y seguridad. Esto incluye actualizar el sistema operativo y el software, mantener programas antivirus y antimalware actualizados, limpiar y desfragmentar el disco duro, realizar copias de seguridad, monitorear el rendimiento, eliminar software innecesario, actualizar controladores y prestar atención a las advertencias de seguridad. Al seguir estas pautas, se puede mantener la computadora en óptimas condiciones."
					img={software}
				/>

				<div className="col-span-2 container">
					<div className="flex flex-col items-center gap-y-5">
						<h2 className="text-4xl">
							Aprende mas sobre el <span className="text-[#FE3051]">mantenimiento preventivo</span>
						</h2>
						<p>Descubre que es un mantenimiento, como se emplea y cada cuando se debe de hacer</p>
						<div className="container flex justify-around">
							<Card
								title={'¿Que es el mantenimiento preventivo?'}
								description={
									'El mantenimiento preventivo en informática consiste en realizar tareas periódicas, como limpieza física, actualización de software, copias de seguridad y monitorización del rendimiento, para prevenir problemas en los equipos y sistemas informáticos. El objetivo es evitar fallos, maximizar la disponibilidad y fiabilidad de los equipos, y reducir los costos asociados con el mantenimiento correctivo.'
								}
							/>
							<Card
								title={'¿Como y cuando se emplea el mantenimiento?'}
								description={
									'El mantenimiento preventivo se realiza llevando a cabo tareas como la limpieza física de los equipos, la actualización de software, la realización de copias de seguridad, la optimización del sistema operativo y la monitorización del rendimiento de manera regular y de acuerdo a un calendario predefinido.'
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
