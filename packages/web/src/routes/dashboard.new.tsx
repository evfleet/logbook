import { createFileRoute } from "@tanstack/react-router";

import { DashboardForm } from "../components/DashboardForm";

export const Route = createFileRoute("/dashboard/new")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DashboardForm />;
}
