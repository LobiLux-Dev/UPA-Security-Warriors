import { BiCheckCircle } from 'react-icons/bi'
import Image from 'next/image'

import { Card } from '@/components'
import { Container } from '@/components/container'

const HomePage = () => {
	return (
		<>
			<Container hideGradient={true}>
				<div className="w-full flex h-main">
					<div className="flex flex-col justify-center p-10 w-1/2 gap-10">
						<h1 className="text-white text-6xl font-bold">
							Somos expertos en tu <span className="text-primary">seguridad</span>
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis illo architecto rem, deserunt accusamus,
							consequuntur reiciendis recusandae ipsa eveniet ab culpa voluptatum corrupti fuga at nostrum aperiam aut
							ex esse.
						</p>
						<div>
							<div className="btn btn-secondary">Conocer más</div>
						</div>
						<div className="w-full flex gap-5 text-primary">
							<div className="flex items-center gap-2">
								<BiCheckCircle />
								<p>Antivirus</p>
							</div>
							<div className="flex items-center gap-2">
								<BiCheckCircle />
								<p>Anti-Malware</p>
							</div>
							<div className="flex items-center gap-2">
								<BiCheckCircle />
								<p>Tips & Consejos</p>
							</div>
						</div>
					</div>
					<div className="w-1/2">
						<Image src="/saly.svg" alt="Saly" width={750} height={750} />
					</div>
				</div>
			</Container>
			<Container accent>
				<h1 className="text-2xl">
					Tenemos los mejores antivirus <span className="text-primary">a tu disposición</span>
				</h1>
				<div className="container grid grid-cols-3 gap-5">
					<Card />
					<Card />
					<Card />
				</div>
			</Container>
		</>
	)
}

export default HomePage
