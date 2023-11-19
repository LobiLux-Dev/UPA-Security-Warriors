import { Card, Section, Title } from '@/components'

const SafeNavigationPage: React.FC = () => {
	return (
		<div>
			<Title title="Navegación segura" />
			<Section
				image={{ alt: 'Candado', height: 500, src: '/lock.png', width: 500 }}
				title="¿Qué define a un lugar como seguro?"
				text="Un sitio seguro en el ámbito de Internet se caracteriza por haber adoptado medidas de protección que resguardan los datos de los usuarios, asegurando su privacidad y seguridad durante su interacción. Además, busca preservar la integridad de la información, evitando cualquier manipulación o alteración de los datos transmitidos entre el usuario y el servidor."
			/>
			<div className="container grid grid-cols-1 px-10 mx-auto gap-5 my-20 md:grid-cols-2">
				<Card
					title="Importancia de una navegación segura"
					image={{ alt: 'Hacker', height: 500, src: '/hacker.png', width: 500 }}
				>
					<p>
						Estar protegido al navegar por internet se ha vuelto esencial debido a las diversas amenazas cibernéticas.
						Identificar una navegación segura es fundamental para resguardar tu privacidad, seguridad y datos
						personales.
					</p>
				</Card>
				<Card
					title="¿Cuáles son las formas de identificarlo?"
					image={{ alt: 'Hacker', height: 500, src: '/hacker.png', width: 500 }}
				>
					<ul className="list-disc px-5">
						<li>
							Comprobar el uso de conexiones HTTPS en lugar de HTTP en los sitios web. La {'"s"'} indica que la
							comunicación está encriptada y protegida.
						</li>
						<li>
							Buscar el icono de un candado en la barra de direcciones del navegador, el cual indica también que la
							conexión es segura.
						</li>
					</ul>
				</Card>
				<Card doubleColumn title="Recomendaciones">
					<ul className="list-disc px-5">
						<li>
							Evitar ingresar información confidencial o realizar transacciones en páginas sin certificado SSL (HTTPS).
						</li>
						<li>
							Instalar extensiones en el navegador (por ejemplo, HTTPS Everywhere) que encripten automáticamente las
							comunicaciones.
						</li>
						<li>
							Abstenerse de hacer clic o acceder a enlaces sospechosos, especialmente aquellos provenientes de correos
							no solicitados.
						</li>
					</ul>
				</Card>
			</div>
		</div>
	)
}

export default SafeNavigationPage
