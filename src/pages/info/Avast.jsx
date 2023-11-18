import { HeaderTitle } from '../../components/HeaderTitle'
import { NavBar } from '../../components/NavBar'
import Card from '../mantenimiento/Card'

export function Avast() {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Avast'} />
			<div className="flex flex-col w-3/5 mx-auto items-center gap-5 mt-10">
				<h2 className="text-xl font-bold">Avast Antivirus!: Protegiendo tu mundo digital</h2>
				<p className="text-justify">
					En un mundo cada vez más interconectado, la seguridad informática se ha convertido en una prioridad
					fundamental. Con la proliferación de amenazas cibernéticas, desde virus y malware hasta ataques de phishing,
					contar con un sólido software antivirus es esencial para salvaguardar nuestros dispositivos y datos. Avast
					Antivirus se destaca como una opción popular y confiable en esta lucha constante contra las amenazas
					digitales.
				</p>
				<p>Historia y Desarrollo</p>
				<p className="text-justify">
					Avast, fundada en 1988 por Pavel Baudis y Eduard Kucera en la República Checa, ha evolucionado a lo largo de
					los años para convertirse en uno de los líderes en la industria de la seguridad cibernética. Comenzando como
					un proyecto de investigación, la compañía ha crecido hasta ofrecer una gama completa de soluciones de
					seguridad, con el antivirus Avast siendo su producto estrella.
				</p>

				<p>Interfaz de Usuario Intuitiva</p>
				<p className="text-justify">
					La interfaz de Avast es conocida por su diseño amigable e intuitivo. Incluso para aquellos que no son expertos
					en tecnología, la navegación por las funciones y la comprensión de los informes de seguridad son tareas
					sencillas.
				</p>

				<p>Versiones Gratuita y de Pago</p>
				<p className="text-justify">
					Avast ofrece una versión gratuita que proporciona una sólida protección contra malware básico. Para aquellos
					que buscan funciones adicionales, como un cortafuegos más avanzado, protección contra ransomware y opciones de
					privacidad mejoradas, la versión de pago, Avast Premium Security, podría ser la elección adecuada.
				</p>

				<p className="text-2xl font-bold">
					Conoce mas de <span className="text-[#FE3051]">Avast</span>
				</p>
				<p>Conoce las ventajas, desventajas y el porque elegir Avast y descubrela</p>
				<div className="flex container justify-between gap-5">
					<Card
						title={'Ventajas de Avast'}
						description={
							'Detecta y bloquea de virus y otro software malicioso, encuentra puntos débiles en la seguridad de la Wi-Fi, impide que los hackers cifren fotos y archivos personales, protege tus contraseñas, evita los sitios falsificados y ejecuta de manera segura programas sospechosos.'
						}
					/>
					<Card
						title={'Desventajas de Avast'}
						description={
							'Escaso nivel de protección, ralentización de equipos, es muy invasivo, bloquea aplicaciones legítimas (nuestro caso) y daña y elimina archivos del sistema.'
						}
					/>
					<Card
						title={'¿Porque elegir Avast?'}
						description={
							'Avast Antivirus es una opción sólida como mejor antivirus que brinda protección integral y personalizada contra malware, respaldada por un conjunto de funciones avanzadas y opciones de suscripción flexibles que se adaptan a sus necesidades de seguridad en línea.'
						}
					/>
				</div>

				<a href="https://acortar.link/8244Kh" target="blank" className="btn bg-[#FE3051] w-full my-10">
					Comprar
				</a>
			</div>
		</div>
	)
}
