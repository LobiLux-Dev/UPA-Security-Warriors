import logo from '../assets/logo.svg'

export function NavBar() {
	return (
		<>
			<div className="navbar sticky top-0 z-10">
				<div className="flex-1">
					<img src={logo} alt="logo" className="w-20" />
					<a className="btn btn-ghost text-lg">UPA Security Warriors</a>
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
									<a>Contraseñas</a>
								</li>
								<li>
									<a>Antivirus y virus</a>
								</li>
								<li>
									<a>Navegación segura</a>
								</li>
								<li>
									<a>Riesgo en redes sociales</a>
								</li>
								<li>
									<a>Mantenimiento a equipos</a>
								</li>
								<li>
									<a>Casos reales</a>
								</li>
								<li>
									<a>Responsabilidades</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
