import { Section, Table, Title } from '@/components'

const tableHeaders = ['', 'Telegram', 'WhatsApp']

const tableRows = [
	['Dispositivos remotos', 'Sí', 'Sí'],
	['Es gratuita', 'Sí', 'Sí'],
	['Cifrado', 'Sí, End to end', 'Sí, End to end'],
	['Eliminar mensajes', 'Sí', 'Sí'],
	['Compatibilidad en SO', 'Sí', 'Sí'],
	['Importar contactos', 'Sí', 'Sí'],
	['Autenticación biométrica', 'Sí', 'Sí'],
	['Sistema de bots', 'Sí (en los chats secretos)', 'No'],
	['Es la más utilizada', 'No', 'Sí'],
	['Es necesario tu número de teléfono', 'No, hay sistema de nicks', 'Sí'],
	['Copias de seguridad', 'No', 'Sí (Google Drive o iCloud)'],
	['Publicidad', 'No', 'No'],
]

const SocialMediaRisksPage: React.FC = () => {
	return (
		<div>
			<Title title="Riesgo de las redes sociales" />
			<Section
				text="En las redes sociales, el acceso no autorizado a cuentas y perfiles representa uno de los riesgos más significativos. Cuando se produce una vulnerabilidad de seguridad, los hackers pueden obtener información confidencial de los perfiles, como conversaciones con clientes y proveedores."
				title="¿Cuáles son los riesgos asociados a las redes sociales?"
			/>
			<Section
				text="Es esencial no creer ciegamente todo lo publicado y abstenerse de compartir información indiscriminadamente. Internet está repleto de bulos y noticias falsas, por lo que contrastar la información es fundamental. Asimismo, es importante abstenerse de publicar fotos o comentarios que puedan afectar o incomodar a terceros."
				title="Recomendaciones"
			/>
			<Section
				text="Este cuadro compara algunas características principales de Telegram y WhatsApp, pero ten en cuenta que ambas aplicaciones pueden actualizar y cambiar sus funcionalidades con el tiempo."
				textCenter
				title={
					<>
						Cuadro comparativo entre <span>Telegram</span> y <span>WhatsApp</span>
					</>
				}
			>
				<Table headers={tableHeaders} rows={tableRows} />
			</Section>
		</div>
	)
}

export default SocialMediaRisksPage
