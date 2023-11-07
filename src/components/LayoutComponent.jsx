import PropTypes from 'prop-types'

import { FooterLayoutComponent, HeaderLayoutComponent, MainLayoutComponent } from './layout'

export const LayoutComponent = ({ page }) => {
	return (
		<>
			<HeaderLayoutComponent />
			<MainLayoutComponent>{page}</MainLayoutComponent>
			<FooterLayoutComponent />
		</>
	)
}

LayoutComponent.propTypes = {
	page: PropTypes.node.isRequired,
}
