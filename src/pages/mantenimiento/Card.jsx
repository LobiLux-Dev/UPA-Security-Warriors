import PropTypes from 'prop-types'
import { BsClock } from 'react-icons/bs'

function Card({ title, description, img }) {
	const style = { fontSize: '3em' }
	return (
		<div className="card w-96 bg-[#111111] shadow-xl">
			<div className="card-body">
			<div className="w-16 h-16 rounded-full bg-[#FE3051] grid place-items-center">
					<BsClock style={style} />
				</div>
				<h2 className="card-title text-xl">{title}</h2>
				<p className='text-sm'>{description}</p>
			</div>
			<figure>
				{img ? (
        <img src={img} alt={img}/>
      ) : (
        ''
      )}
			</figure>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}

export default Card
