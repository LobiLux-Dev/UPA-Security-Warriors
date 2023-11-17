import PropTypes from 'prop-types'
import { BsCheckCircleFill } from "react-icons/bs";

export function CardHome({ title, description, checks, site }) {
	return (
		<div className="card bg-black w-96 shadow-xl text-white">
			<div className="card-body">
				<p className="text-[#FE3051]">Gratis</p>
				<p className="card-title text-3xl mb-5">{ title }</p>
				<p className="mb-5">{ description }</p>

				{
					checks.map((check, index) => (
						<div key={index} className="flex gap-5 items-center text-[#FE3051]">
							<BsCheckCircleFill />
							<p className="text-white">{ check }</p>
						</div>
					))
				}

				<div className="card-actions">
					<a href={site} target="blank" className="btn bg-[#FE3051] w-full mt-5">Comprar</a>
				</div>
			</div>
		</div>
	)
}

CardHome.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	checks: PropTypes.arrayOf(PropTypes.string).isRequired,
	site: PropTypes.string.isRequired,
}
