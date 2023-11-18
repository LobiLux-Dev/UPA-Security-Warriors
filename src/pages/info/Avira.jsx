import { HeaderTitle } from '../../components/HeaderTitle'
import { NavBar } from '../../components/NavBar'
import Card from '../mantenimiento/Card'

export function Avira() {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Avira'} />
			<div className="flex flex-col w-3/5 mx-auto items-center gap-5 mt-10">
				<h2 className="text-xl font-bold">Avira: Navegando la Ciberseguridad con Confianza</h2>
				<p className="text-justify">
					Todos tus dispositivos, tu privacidad y tus datos personales, tus búsquedas, tus programas, tus compras y tus
					actividades bancarias; incluso tu red doméstica. Avira los mantiene todos a salvo.
				</p>
				<p>Historia y Desarrollo</p>
				<p className="text-justify">
					La historia de Avira es la de una empresa que comenzó en 1986 con la creación de un programa antivirus llamado
					Luke Filewalker por Tjark Auerbach en Turingia, Alemania. En 1988, Auerbach fundó H+BEDV Datentechnik GmbH y
					lanzó su producto antiviral AntiVirus.
				</p>

				<p>Interfaz de Usuario Intuitiva</p>
				<p className="text-justify">
					La interfaz de usuario de Avira es conocida por su diseño intuitivo y amigable. Presenta paneles fáciles de
					navegar que permiten acceder rápidamente a las diferentes funciones de seguridad y configuraciones. La
					interfaz suele incluir secciones claramente identificadas para escaneos, protección en tiempo real, firewall,
					herramientas de rendimiento y privacidad, entre otras funciones.
				</p>

				<p>Versiones Gratuita y de Pago</p>
				<p className="text-justify">
					Avira ofrece una versión gratuita que proporciona protección antivirus básica, protección de navegación y
					herramientas de rendimiento. La versión de pago, como Avira Prime, incluye una protección más completa contra
					malware, firewall, funciones de privacidad, opciones de personalización y soporte técnico prioritario.
				</p>

				<p className="text-2xl font-bold">
					Conoce mas de <span className="text-[#FE3051]">Avira</span>
				</p>
				<p>Conoce las ventajas, desventajas y el porque elegir Avira y descubrela</p>
				<div className="flex container justify-between gap-5">
					<Card
						title={'Ventajas de Avira'}
						description={
							'Detecta y bloquea de virus y otro software malicioso, encuentra puntos débiles en la seguridad de la Wi-Fi, impide que los hackers cifren fotos y archivos personales, protege tus contraseñas, evita los sitios falsificados y ejecuta de manera segura programas sospechosos.'
						}
					/>
					<Card
						title={'Desventajas de Avira'}
						description={
							'Escaso nivel de protección, ralentización de equipos, es muy invasivo, bloquea aplicaciones legítimas (nuestro caso) y daña y elimina archivos del sistema.'
						}
					/>
					<Card
						title={'¿Porque elegir Avira?'}
						description={
							'Avast Antivirus es una opción sólida como mejor antivirus que brinda protección integral y personalizada contra malware, respaldada por un conjunto de funciones avanzadas y opciones de suscripción flexibles que se adaptan a sus necesidades de seguridad en línea.'
						}
					/>
				</div>

				<a
					href="https://www.avira.com/es/free-antivirus-windows"
					target="blank"
					className="btn bg-[#FE3051] w-full my-10"
				>
					Comprar
				</a>
			</div>
		</div>
	)
}
