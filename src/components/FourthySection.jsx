import first         from '../assets/first.svg'
import second        from '../assets/second.svg'
import redes         from '../assets/redes.png'
import mantenimiento from '../assets/mantenimiento.png'
import casos         from '../assets/casos.png'

import PropTypes from 'prop-types'

function Gradients() {
	return (
		<div className="relative">
			<img src={first} alt="first" />
			<img src={second} alt="second" className="absolute top-16 left-10"/>
		</div>
	)
}

function Card({ title, description, img }) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure><img src={img} alt="Shoes" /></figure>
			<div className="card-body">
				<h2 className="card-title">{ title }</h2>
				<p>{ description }</p>
			</div>
		</div>
	)
}

function FourthySection() {
	return (
		<section className='container h-screen flex flex-col items-center justify-center p-10 bg-[#111111] relative'>
			<div className="absolute left-20 top-10">
				<Gradients />
			</div>

			<h2 className="text-4xl">Tu portal de  <span className="text-[#FE3051]">seguridad informática</span></h2>
			<p className="text-xl">Tenemos la ultima información sobre antivirus, la importancia de una contraseña segura y navegación segura...</p>
			<div className="grid grid-cols-3 mt-16 gap-5">
				<Card
					title={"Riesgo de las Redes Sociales"}
					description={"Uno de los mayores riesgos de las redes sociales es el acceso no autorizado a las cuentas y los perfiles."}
					img={redes}
				/>

				<Card
					title={"Mantenimiento preventivo"}
					description={"Permite a los equipos planificar acciones antes de que se produzcan daños en los equipos."}
					img={mantenimiento}
				/>

				<Card
					title={"Casos reales"}
					description={"Protege tu dispositivo electronico de una forma segura aplicando formas de ciberseguridad"}
					img={casos}
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
	img: PropTypes.any.isRequired,
}

export default FourthySection
