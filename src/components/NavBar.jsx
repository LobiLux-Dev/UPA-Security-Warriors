import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export function NavBar() {
	return (
		<>
			<div className="navbar sticky top-0 z-10">
				<div className="flex-1">
					<img src={logo} alt="logo" className="w-20" />
					<Link to={"/"} className="btn btn-ghost text-lg">UPA Security Warriors</Link>
				</div>
				<div className="flex-none">
					<div className="drawer drawer-end">
						<input id="my-drawer" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content">
							{/* Page content here */}
							<label htmlFor="my-drawer" className="btn drawer-button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-5 h-5 stroke-current"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</label>
						</div>
						<div className="drawer-side">
							<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
							<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
								{/* Sidebar content here */}
								<li>
									<Link to={'/passwords'}>Contraseñas</Link>
								</li>
								<li>
									<Link to={'/antivirus-virus'}>Antivirus y virus</Link>
								</li>
								<li>
									<Link to={'/navegacion-segura'}>Navegación segura</Link>
								</li>
								<li>
									<Link to={'/redes-sociales'}>Riesgo en redes sociales</Link>
								</li>
								<li>
									<Link to={"/mantenimiento"}>Mantenimiento a equipos</Link>
								</li>
								<li>
									<Link to={'/casos-reales'}>Casos reales</Link>
								</li>
								<li>
									<Link to={'/responsabilidades'}>Responsabilidades</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
