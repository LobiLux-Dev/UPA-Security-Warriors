import PropTypes from 'prop-types'

function Card({ title, description, img }) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
}

export default Card
