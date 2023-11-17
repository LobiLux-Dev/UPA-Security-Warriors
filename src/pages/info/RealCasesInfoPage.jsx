import { HeaderTitle } from "../../components/HeaderTitle"
import { NavBar } from "../../components/NavBar"
import Card from "../casos/Card"
import malware from '../../assets/malware.png'
import password from '../../assets/password.png'

export const RealCasesInfoPage = () => {
	return (
		<div className="bg-black">
			<NavBar />
			<HeaderTitle title={'Casos reales'}/>
			<div className="container flex flex-col items-center gap-5 mt-10">
				<h2>Casos reales: Casos de ciberseuridad, privacidad, fraudes...</h2>
				<p>Lee los casos reales sobre ciberseguridad, mantenimiento, contraseñas y mas... en nuestros artículos y descubre la importancia de contar con una buena seguridad en tu dispositivo electrónico</p>
				<div className="flex gap-20">
					<Card
						title={'Malware Tech'}
						description={'Una simple acción de un joven de 22 años, conocido en internet con el nombre de MalwareTech, logró contener parte del ransomware (el virus troyano que literalmente secuestra la información de una computadora y exige un pago para liberarla).MalwareTech se encontraba la noche del viernes analizando el código detrás del programa malicioso cuando hizo un descubrimiento que resultaba evidentemente extraño. El software, llamado WannaCry, se estaba esparciendo al usar una extraña dirección de internet, que por seguridad de los lectores no mencionamos, pero notó que esa dirección no llevaba a ningún sitio. Eso se debía a que nadie había registrado ese dominio, es decir, la página base en la red la cual funcionaba como base para esparcir el virus y activar su daño.'}
						img={malware}
					/>
					<Card
						title={'Contraseña vulnerable'}
						description={'La  experiencia que sucedió con un usuario fue con la aplicación de Instagram, tenía la mala costumbre de mantener las mismas contraseñas por un largo periodo de tiempo o en algunos casos no cambiarla, el problema aquí es que dejando lo anterior de lado su contraseña era muy vulnerable y lograron acceder a su cuenta con éxito. Este caso fue algo muy esperado ya que se decidió optar por instalar juegos de manera no tan legal, la vía fue Utorrent, al momento de ejecutar el archivo dió acceso a su PC y consiguió un virus'}
						img={password}
					/>
				</div>
			</div>
		</div>
	)
}
