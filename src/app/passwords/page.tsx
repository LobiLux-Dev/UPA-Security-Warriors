import { Card, Section, Title } from '@/components'

const PasswordsPage: React.FC = () => {
	return (
		<div>
			<Title title="Contraseñas seguras" />
			<Section
				text="La seguridad de las contraseñas es un componente crucial en la protección de cuentas y datos personales. Para mantener tus contraseñas seguras, deben ser lo suficientemente complejas para resistir ataques. Esto significa que deben incluir una combinación de letras mayúsculas y minúsculas, números y símbolos. Es importante que cada cuenta en línea tenga una contraseña única. Reutilizar contraseñas aumenta el riesgo de que, si una cuenta se ve comprometida, otras también puedan estar en peligro."
				title="La Seguridad de Contraseñas: Protegiendo Cuentas y Datos Personales"
			/>
			<div className="container grid grid-cols-1 px-10 mx-auto gap-5 my-20 md:grid-cols-2">
				<Card
					title="¿Qué es una contraseña segura?"
					image={{ alt: 'Hacker', height: 500, src: '/hacker.png', width: 500 }}
				>
					<p>
						Es la principal barrera que impide que te hackeen la mayoría de tus cuentas en línea. Sin prácticas
						actualizadas, es probable que estés utilizando contraseñas que los estafadores cibernéticos pueden adivinar
						fácilmente en cuestión de horas.
					</p>
				</Card>
				<Card title="Recomendaciones">
					<ul className="list-disc px-5">
						<li>Utilizar 12 caracteres o más, combinando letras, números y símbolos para mayor fortaleza.</li>
						<li>Evitar información personal o palabras comunes y predecibles.</li>
						<li>No reutilizar contraseñas en múltiples cuentas. Es mejor crear una única para cada cuenta.</li>
						<li>Cambiar las contraseñas regularmente, al menos cada pocos meses.</li>
						<li>Usar administradores de contraseñas para generar y almacenar credenciales únicas.</li>
						<li>
							Activar la autenticación de dos factores cuando esté disponible para agregar una capa adicional de
							protección.
						</li>
						<li>Nunca compartir las contraseñas con otras personas, para prevenir accesos no autorizados.</li>
					</ul>
				</Card>
				<Card doubleColumn title="¿Dónde deberías almacenar tus contraseñas?">
					<p>
						Existen gestores de contraseñas como LastPass o 1Password, que almacenan y cifran tus credenciales. También
						están las opciones integradas en navegadores, aunque su nivel de seguridad puede ser menor. Algunas personas
						eligen almacenar contraseñas en documentos encriptados, cuadernos físicos o cajas de seguridad. Otra
						alternativa es crear contraseñas memorables basadas en información personal. Sin importar el método, es
						crucial seguir buenas prácticas de seguridad, como cambiar las contraseñas regularmente y activar la
						autenticación de dos factores. Mantener actualizado el software es igualmente fundamental.
					</p>
				</Card>
			</div>
		</div>
	)
}

export default PasswordsPage
