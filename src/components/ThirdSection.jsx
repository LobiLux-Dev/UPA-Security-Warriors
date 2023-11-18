import first from '../assets/first.svg'
import second from '../assets/second.svg'
import { BsClock, BsArrowRight } from 'react-icons/bs'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Gradients() {
	return (
		<div className="relative">
			<img src={first} alt="first" />
			<img src={second} alt="second" className="absolute top-16 left-10" />
		</div>
	)
}

function Card({ title, description, link }) {
	const style = { fontSize: '3em' }
	return (
		<div className="card bg-[#111111] w-96 shadow-xl text-white">
			<div className="card-body">
				<div className="w-16 h-16 rounded-full bg-[#FE3051] grid place-items-center">
					<BsClock style={style} />
				</div>
				<p className="card-title text-3xl mb-5">{title}</p>
				<p className="mb-5">{description}</p>

				<div className="card-actions">
					<Link to={link} className="btn btn-ghost text-[#FE3051]">
						Conocer más <BsArrowRight />{' '}
					</Link>
				</div>
			</div>
		</div>
	)
}

function ThirdSection() {
	return (
		<section className="container h-screen flex flex-col items-center justify-center p-10 bg-black relative">
			<div className="absolute left-20 top-10">
				<Gradients />
			</div>

			<h2 className="text-4xl">
				Tu portal de <span className="text-[#FE3051]">seguridad informática</span>
			</h2>
			<p className="text-xl">
				Tenemos la ultima información sobre antivirus, la importancia de una contraseña segura y navegación segura...
			</p>
			<div className="grid grid-cols-3 mt-16 gap-5">
				<Card
					title={'¿Que es un antivirus?'}
					description={
						'Es un sistema de seguridad informatica diseñada para proteger las computadoras o dispositivos electronicos de posibles ataques de softwares maliciosos.'
					}
					link={'/antivirus-virus'}
				/>

				<Card
					title={'Elije una contraseña segura'}
					description={
						'Las contraseñas seguras sirven para defenderte de ciberataques y reducir el riesgo de una vulneracion de seguridad y evita el robo de identidad.'
					}
					link={'/passwords'}
				/>

				<Card
					title={'Navegacion segura'}
					description={
						'Llega impedir que alguien acceda a informacion personal guardada como el historial de navegacion los datos que se usasn para autocompletar formularios entre otros.'
					}
					link={'/navegacion-segura'}
				/>
			</div>

			<div className="absolute right-20 bottom-28">
				<Gradients />
			</div>
		</section>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
}

export default ThirdSection
