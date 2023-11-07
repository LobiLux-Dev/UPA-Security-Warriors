import PropTypes from 'prop-types'

export const MainLayoutComponent = ({ children }) => {
	return <main>{children}</main>
}

MainLayoutComponent.propTypes = {
	children: PropTypes.node.isRequired,
}
