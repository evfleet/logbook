import { Link } from "@tanstack/react-router";

export function Navbar() {
	return (
		<div>
			<p>Navigation</p>
			<nav>
				<ul>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>

					<li>
						<Link to="/dashboard/new">New</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
