import PropTypes from 'prop-types'

export function HeaderTitle({ title }) {
	return (
		<article className="container h-20 bg-[#FE3051] flex justify-center items-center text-3xl font-bold">
			{title}
		</article>
	)
}

HeaderTitle.propTypes = {
	title: PropTypes.string.isRequired,
}
