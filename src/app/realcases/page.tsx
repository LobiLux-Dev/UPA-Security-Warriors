import { Card, Section, Title } from '@/components'

const RealCasesPage: React.FC = () => {
	return (
		<div>
			<Title title='Casos reales' />
			<Section
				title="Casos reales: Casos de ciberseguridad, privacidad, fraudes..."
				text="Lee sobre casos reales de ciberseguridad, mantenimiento, contraseñas y más en nuestros artículos, descubre la importancia de contar con una sólida seguridad en tus dispositivos electrónicos."
			/>
			<div className="container grid grid-cols-1 px-10 mx-auto gap-5 my-20 md:grid-cols-2">
				<Card title="Malware Tech" image={{ alt: 'Malware', height: 500, src: '/malware.png', width: 500 }}>
					<p>
						Una acción simple llevada a cabo por un joven de 22 años, conocido en internet como MalwareTech, logró
						contener parte del ransomware, un virus troyano que secuestra la información de una computadora y demanda un
						pago para liberarla.
						<br />
						MalwareTech estaba analizando el código del programa malicioso llamado WannaCry una noche de viernes cuando
						hizo un descubrimiento sorprendente. El software se propagaba utilizando una dirección de internet inusual,
						que por razones de seguridad no revelamos, pero notó algo extraño: esa dirección no llevaba a ningún lugar.
						<br />
						El motivo era que nadie había registrado ese dominio, es decir, la página base en la red que actuaba como
						centro para esparcir el virus y desencadenar su daño.
					</p>
				</Card>
				<Card title="Contraseña vulnerable" image={{ alt: 'Password', height: 500, src: '/password.png', width: 500 }}>
					<p>
						Un usuario experimentó un incidente con su cuenta de Instagram debido a su práctica de mantener las mismas
						contraseñas durante periodos prolongados o, en algunos casos, de no cambiarlas. El problema radicaba en la
						vulnerabilidad de su contraseña, lo que permitió que alguien accediera exitosamente a su cuenta.
						<br />
						Este episodio era bastante previsible, ya que el usuario había optado por instalar juegos de manera no
						oficial, utilizando Utorrent. Al ejecutar un archivo, el cual parecía otorgar acceso al juego, en realidad
						infectó su PC con un virus.
					</p>
				</Card>
			</div>
		</div>
	)
}

export default RealCasesPage
