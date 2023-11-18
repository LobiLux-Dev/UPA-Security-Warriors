import { NavBar } from '../../components/NavBar'
import { HeaderTitle } from '../../components/HeaderTitle'
import candado from '../../assets/candado.svg'
import Card from '../mantenimiento/Card'
import redes from '../../assets/redes.png'

export const SafeNavigationInfoPage = () => {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Navegación segura'} />
			<div className="grid grid-cols-2 grid-rows-3 w-4/5 m-auto py-10">
				<img src={candado} alt="candado" />
				<div className="flex flex-col items-center">
					<h2 className="text-xl font-bold">¿Que es un sitio seguro?</h2>
					<p className="text-base text-justify mt-5">
						Un sitio seguro en el contexto de Internet suele referirse a un sitio web que ha implementado medidas de
						seguridad para proteger la información de los usuarios y garantizar su privacidad y seguridad al interactuar
						con él. Además, un sitio seguro generalmente se esfuerza por proteger la integridad de los datos, evitando
						la manipulación o alteración de la información transmitida entre el usuario y el servidor.{' '}
					</p>
				</div>
				<div className="mx-auto">
					<Card
						title={'¿Como identificarlo?'}
						description={
							'Verificar que los sitios web utilicen conexiones  HTTPS en lugar de HTTP. La “s” indica que la comunicacion esta encriptda y protegida. Buscar el icono de un candado en la barra de direccion del navegado, lo cual tambien señala que la conexion es segura'
						}
						img={redes}
					/>
				</div>

				<div className="mx-auto">
					<Card
						title={'Importancia de una navegacion segura'}
						description={
							'Estar protegido mientras navegas por internet ha pasado a ser esencial hoy en dia debido a las diversas amenazas ciberneticas. Identificar una navegación segura en Internet es fundamental para proteger tu privacidad, seguridad y datos personales.'
						}
						img={redes}
					/>
				</div>

				<div className="flex flex-col items-center col-span-2">
					<h3>Recomendaciones</h3>
					<ul className="list-disc">
						<li>
							Abtenerse de ingresar informacion confidencial o hacer transacciones en paginas que no tengan certificado
							SSL (HTTPS).
						</li>
						<li>
							Instalar extenciones en el navegador (ej. HTTPS Everywhere) que encriptan comunicaciones de forma
							automatica.
						</li>
						<li>Evitar hacer click o acceder a enlaces sospechosos o provenientes de correo no solicitados.</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
