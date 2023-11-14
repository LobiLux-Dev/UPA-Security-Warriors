import { usePage } from '../../hooks'

export const MainLayoutComponent = () => {
	const page = usePage()

	return <main>{page}</main>
}
