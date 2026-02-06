import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Dashboard } from "../components/Dashboard";

export const Route = createFileRoute("/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Dashboard />

			<div>
				<Outlet />
			</div>
		</div>
	);
}
