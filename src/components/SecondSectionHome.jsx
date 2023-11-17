import { CardHome } from './CardHome'
import first from '../assets/first.svg'
import second from '../assets/second.svg'

function Gradients() {
	return (
		<div className="relative">
			<img src={first} alt="first" />
			<img src={second} alt="second" className="absolute top-16 left-10" />
		</div>
	)
}

export function SecondSectionHome() {
	return (
		<section className="container h-screen flex flex-col items-center justify-center p-10 bg-[#111111] relative">
			<div className="absolute left-20 top-10">
				<Gradients />
			</div>

			<h2 className="text-4xl">
				Tenemos los mejores antivirus <span className="text-[#FE3051]">a tu disposición</span>
			</h2>
			<div className="grid grid-cols-3 mt-16 gap-5">
				<CardHome
					title={'Karspersky'}
					description={'Proteccion de identidad y amenazas'}
					checks={['Navegacion  privada y ininterrumpida', 'Proteccion de pagos en linea', 'Optimiza el rendimiento']}
					site={'https://acortar.link/mhr1oi'}
				/>

				<CardHome
					title={'Avast'}
					description={'Cuida y manten limpia tu PC'}
					checks={['Bloqueo de software malicioso', 'Evade sitios falsificados', 'Manager de contraseñas']}
					site={'https://acortar.link/8244Kh'}
				/>

				<CardHome
					title={'Avira'}
					description={'Proteccion de ataques Zero Day'}
					checks={['Escaneos desde la nube', 'No consume recursos del equipo', 'Control parental']}
					site={'https://www.avira.com/es/free-antivirus-windows'}
				/>
			</div>

			<div className="absolute right-20 bottom-28">
				<Gradients />
			</div>
		</section>
	)
}
