import { NavBar } from '../../components/NavBar'
import { HeaderTitle } from '../../components/HeaderTitle'
import Card from '../mantenimiento/Card'
import img1 from '../../assets/redes.png'

import PropTypes from 'prop-types'
import { BsClock } from 'react-icons/bs'

function CardCustom({ title, description }) {
	const style = { fontSize: '3em' }
	return (
		<div className="card w-96 bg-[#111111] shadow-xl">
			<div className="card-body">
				<div className="w-16 h-16 rounded-full bg-[#FE3051] grid place-items-center">
					<BsClock style={style} />
				</div>
				<h2 className="card-title text-xl">{title}</h2>
				<ul className="text-sm list-disc">
					{description.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
			</div>
		</div>
	)
}

CardCustom.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired,
}

export const PasswordsInfoPage = () => {
	const recomendaciones = [
		'Utilizar 12 caracteres o más, combinando letras, números y símbolos para mayor fortaleza.',
		'Evitar información personal o palabras comunes y predecibles.',
		'No reutilizar contraseñas en múltiples cuentas. Es mejor crear una única para cada cuenta.',
		'Cambiar las contraseñas regularmente, al menos cada pocos meses.',
		'Usar administradores de contraseñas para generar y almacenar credenciales únicas.',
		'Activar la autenticación de dos factores cuando esté disponible para agregar una capa adicional de protección.',
		'Nunca compartir las contraseñas con otras personas, para prevenir accesos no autorizados.',
	]
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Contraseña segura'} />
			<div className="flex flex-col items-center w-3/5 mx-auto mt-10 gap-5">
				<h2 className="text-xl font-bold">La importancia de una contraseña segura</h2>
				<p>
					La seguridad de contraseñas es un componente crucial en la protección de cuentas y datos personales. Para
					mantener tus contraseñas seguras deben ser lo suficientemente complejas para resistir ataques. Esto significa
					que deben incluir una combinación de letras mayúsculas y minúsculas, números y símbolos. Cada cuenta en línea
					debe tener una contraseña única. Reutilizar contraseñas aumenta el riesgo de que si una cuenta se ve
					comprometida.
				</p>
				<div className="flex justify-between w-full gap-5 mb-20">
					<Card
						title={'¿Que es una contraseña segura?'}
						description={
							'Una contraseña segura es la principal barrera que impide que te hackeen la mayoría de tus cuentas en línea. Sin prácticas actualizadas, es probable que estés utilizando contraseñas que los estafadores cibernéticos pueden adivinar fácilmente en cuestión de horas.'
						}
						img={img1}
					/>
					<CardCustom title={'Recomendaciones'} description={recomendaciones} />
					<Card
						title={'¿Donde guardar tus contraseñas?'}
						description={
							'Puedes guardar tus contraseñas de forma segura utilizando gestores de contraseñas como LastPass o 1Password, que almacenan y cifran tus credenciales. También puedes optar por las opciones integradas en navegadores, aunque pueden ser menos seguras. Algunas personas eligen almacenar contraseñas localmente en documentos encriptados, en cuadernos físicos o cajas de seguridad. Otra opción es crear contraseñas memorables basadas en información personal. Independientemente del método, es crucial seguir buenas prácticas de seguridad, como cambiar contraseñas regularmente y habilitar la autenticación de dos factores. Mantener actualizado el software también es fundamental.'
						}
					/>
				</div>
			</div>
		</div>
	)
}
