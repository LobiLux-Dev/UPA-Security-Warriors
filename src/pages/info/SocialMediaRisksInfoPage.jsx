import { NavBar } from '../../components/NavBar'
import { HeaderTitle } from '../../components/HeaderTitle'

export const SocialMediaRisksInfoPage = () => {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title="Riesgo de las redes sociales" />
			<div className="w-4/5 flex flex-col items-center m-auto py-10 gap-y-5">
				<h2 className="font-bold text-xl">¿Que riesgo hay en las redes sociales?</h2>
				<p className="text-justify">
					Uno de los mayores riesgos en redes sociales es el acceso no autorizado a las cuentas y los perfiles. Cuando
					se crea una brecha de seguridad, los hackers pueden acceder a la información confidencial del perfil,
					incluyendo las conversaciones con clientes y proveedores.
				</p>
				<h3 className="font-bold text-xl">Recomendaciones</h3>
				<p>
					No creer todo lo que se publica, y no compartir cualquier información, ya que Internet está lleno de bulos y
					noticias falsas y es indispensable contrastarlas. Además, es fundamental no publicar fotos o comentarios que
					puedan atacar o molestar a terceros.
				</p>

				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th className="text-white">Telegram</th>
								<th className="text-white">WhatsApp</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							<tr className="bg-base-200">
								<th>Dispositivos remotos</th>
								<td>Si</td>
								<td>Si</td>
							</tr>
							{/* row 2 */}
							<tr>
								<th>Es gratuita</th>
								<td>Si</td>
								<td>Si</td>
							</tr>
							{/* row 3 */}
							<tr>
								<th>Cifrado</th>
								<td>Si, end to end</td>
								<td>Si, end to end</td>
							</tr>

							{/* row 4 */}
							<tr className="bg-base-200">
								<th>Eliminar mensajes</th>
								<td>Si</td>
								<td>Si</td>
							</tr>
							{/* row 3 */}
							<tr>
								<th>Compatibilidad en sistemas operativos</th>
								<td>Si</td>
								<td>Si</td>
							</tr>
							{/* row 4 */}
							<tr>
								<th>Importar contactos</th>
								<td>Si</td>
								<td>Si</td>
							</tr>

							{/* row 5 */}
							<tr className="bg-base-200">
								<th>Límite de participantes (grupos)</th>
								<td>200,000</td>
								<td>256</td>
							</tr>
							{/* row 6 */}
							<tr>
								<th>Autodestrucción de Chats</th>
								<td>Si (en los chats secretos)</td>
								<td>No</td>
							</tr>
							{/* row 7 */}
							<tr>
								<th>Traducciones Integradas</th>
								<td>Si</td>
								<td>No</td>
							</tr>

							{/* row 8 */}
							<tr className="bg-base-200">
								<th>Autenticación Biométrica</th>
								<td>Si (Huella digital reconocimiento facial)</td>
								<td>No</td>
							</tr>
							{/* row 9 */}
							<tr>
								<th>Sistema de bots</th>
								<td>Si</td>
								<td>Si</td>
							</tr>
							{/* row 10 */}
							<tr>
								<th>Es la más utilizada</th>
								<td>No</td>
								<td>Si</td>
							</tr>

							{/* row 11 */}
							<tr className="bg-base-200">
								<th>Es necesario tu numero de telefono</th>
								<td>No, hay sistema de nicks</td>
								<td>Si</td>
							</tr>
							{/* row 12 */}
							<tr>
								<th>Copias de seguridad</th>
								<td>No</td>
								<td>Si (Google drive o icloud</td>
							</tr>
							{/* row 13 */}
							<tr>
								<th>Publicidad</th>
								<td>No</td>
								<td>No</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
