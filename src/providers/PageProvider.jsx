import PropTypes from 'prop-types'

import { PageContext } from '../contexts'
import { LayoutComponent } from '../components'

export const PageProvider = ({ page }) => {
	return (
		<PageContext.Provider value={page}>
			<LayoutComponent />
		</PageContext.Provider>
	)
}

PageProvider.propTypes = {
	page: PropTypes.element.isRequired,
}
