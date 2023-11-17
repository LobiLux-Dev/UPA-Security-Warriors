import FourthySection from '../FourthySection'
import { Header } from '../Header'
import { SecondSectionHome } from '../SecondSectionHome'
import ThirdSection from '../ThirdSection'

function HomeLayout() {
	return (
		<>
			<Header />
			<SecondSectionHome />
			<ThirdSection />
			<FourthySection />
		</>
	)
}

export default HomeLayout
