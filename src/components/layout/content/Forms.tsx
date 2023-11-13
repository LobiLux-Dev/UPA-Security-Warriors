import Image from 'next/image'
import First from '../../../assets/first.svg'
import Second from '../../../assets/second.svg'

export function Forms() {
	return (
		<div className="relative w-36">
			<Image src={First} alt="first" />
			<Image src={Second} alt="second" className="absolute top-10 left-10" />
		</div>
	)
}
