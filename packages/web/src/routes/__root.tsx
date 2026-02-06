import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
	return (
		<>
			<div>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/dashboard/new">New</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
