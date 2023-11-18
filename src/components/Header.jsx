import { BsCheckCircleFill } from 'react-icons/bs'
import saly from '../assets/saly.svg'
import { Link } from 'react-router-dom'

export function Header() {
	return (
		<header className="container grid grid-cols-2 bg-black h-header">
			<div className="flex flex-col justify-center p-10 gap-10">
				<h1 className="text-6xl">
					Somos expertos en tu <span className="text-[#FE3051]">seguridad</span>
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, amet laboriosam exercitationem ut quae
					recusandae labore. Qui atque quod, repellendus id molestiae at, a, pariatur hic iste debitis itaque ut?
				</p>

				<div>
					<Link to={'/passwords'} className="btn bg-[#FE3051] text-black hover:bg-[#FE3051] hover:border-[#FE3051]">
						Conocer más
					</Link>
				</div>

				<div className="flex items-center container text-[#FE3051] gap-5">
					<div className="flex gap-2 items-center">
						<BsCheckCircleFill />
						<p>Antivirus</p>
					</div>
					<div className="flex gap-2 items-center">
						<BsCheckCircleFill />
						<p>Anti-Malware</p>
					</div>
					<div className="flex gap-2 items-center">
						<BsCheckCircleFill />
						<p>Tips & Consejos</p>
					</div>
				</div>
			</div>

			<img src={saly} alt="saly" />
		</header>
	)
}
