import { NavigationLink } from '.'

export const NavigationLinks = () => {
	return (
		<ul className="flex flex-col gap-5 items-center md:flex-row">
			<NavigationLink href="#home" text="Inicio" />
			<NavigationLink href="#antivirus" text="Antivirus" />
			<NavigationLink href="#news" text="Noticias" />
			<NavigationLink href="#contact-us" text="Contáctanos" />
		</ul>
	)
}
