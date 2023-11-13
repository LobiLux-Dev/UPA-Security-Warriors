import Image from 'next/image'
import Saly from '../../../assets/saly.svg'
import { BsFillCheckCircleFill } from "react-icons/bs";

export function MainContent() {
	return (
		<div className="w-full flex h-main">
			<div className="flex flex-col justify-center p-10 w-1/2 gap-10">
				<h1 className="text-white text-6xl font-bold">
					Somos expertos en tu <span className="text-primary">seguridad</span>
				</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo architecto rem, deserunt accusamus,
					consequuntur reiciendis recusandae ipsa eveniet ab culpa voluptatum corrupti fuga at nostrum aperiam aut ex
					esse.
				</p>
				<div>
					<div className="btn btn-secondary"> Conocer más</div>
				</div>

				<div className="w-full flex gap-5 text-primary">
					<div className="flex items-center gap-2">
						<BsFillCheckCircleFill />
						<p>Antivirus</p>
					</div>
					<div className="flex items-center gap-2">
						<BsFillCheckCircleFill />
						<p>Anti-Malware</p>
					</div>
					<div className="flex items-center gap-2">
						<BsFillCheckCircleFill />
						<p>Tips & Consejos</p>
					</div>
				</div>
			</div>
			<div className="w-1/2">
				<Image src={Saly} alt="Saly"/>
			</div>
		</div>
	)
}
