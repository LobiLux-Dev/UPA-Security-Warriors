import { NavBar } from '../../components/NavBar'
import { HeaderTitle } from '../../components/HeaderTitle'
import Card from '../mantenimiento/Card'
import img1 from '../../assets/antivirus.png'
import img2 from '../../assets/antivirus2.png'
import { Link } from 'react-router-dom'

export const AntivirusAndVirusInfoPage = () => {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Antivirus'} />
			<div className="flex flex-col items-center w-3/5 mx-auto mt-10 gap-5">
				<h2 className="text-xl font-bold">Conoce mas sobre los Antivirus</h2>
				<p>
					Tener un antivirus en tu computadora es crucial para protegerla contra una amplia gama de amenazas
					cibernéticas, como virus, malware, spyware, ransomware y otras formas de software malicioso. Estas amenazas
					pueden comprometer la seguridad de tus datos, robar información personal, ralentizar el rendimiento de tu
					computadora e incluso causar daños graves. El uso de un buen antivirus es una parte fundamental de practicar
					la ciberseguridad y mantener tu computadora y tus datos seguros.
				</p>
				<div className="flex justify-between w-full">
					<Card
						title={'¿Que es un antivirus?'}
						description={
							'Un antivirus es un sistema de seguridad informática diseñado para proteger a las computadoras de posibles ataques de softwares maliciosos. Esto lo hace mediante el escaneo de los códigos y scripts que ingresan a tu computador.'
						}
						img={img1}
					/>
					<Card
						title={'¿Porque tener un antivirus?'}
						description={
							'El antivirus ayuda a detectar y eliminar estos programas maliciosos antes de que causen daños. También puede proporcionar protección en tiempo real al monitorear constantemente la actividad en tu computadora y bloquear intentos de ataques cibernéticos. Sin él, estás dejando tu dispositivo expuesto a posibles ataques y comprometiendo tu privacidad y seguridad en línea.'
						}
						img={img2}
					/>
				</div>

				<p>Te recomendamos los mejores antivirus</p>

				<div className="flex container mb-20 justify-evenly">
					<Link
						to={'/antivirus-virus/karspersky'}
						className="btn bg-green-400 hover:bg-green-400 hover:border-green-400 py-2 px-4 rounded-lg text-black"
					>
						Karspersky
					</Link>
					<Link
						to={'/antivirus-virus/avast'}
						className="btn bg-green-400 hover:bg-green-400 hover:border-green-400 py-2 px-4 rounded-lg text-black"
					>
						Avast
					</Link>
					<Link
						to={'/antivirus-virus/avira'}
						className="btn bg-green-400 hover:bg-green-400 hover:border-green-400 py-2 px-4 rounded-lg text-black"
					>
						Avira
					</Link>
				</div>
				<p>Los Virus más comunes</p>
				<ul className="flex container mb-20 justify-evenly list-disc">
					<li>Nimda</li>
					<li>Stuxnet</li>
					<li>SQL Slammer</li>
					<li>Gusanos (La propagación descontrolada)</li>
					<li>Troyanos</li>
				</ul>
			</div>
		</div>
	)
}
