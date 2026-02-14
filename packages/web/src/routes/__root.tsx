import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar/Navbar";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
	return (
		<>
			<Container>
				<Container.Header>
					<Navbar />
				</Container.Header>

				<Container.Content>
					<Outlet />
				</Container.Content>
			</Container>
			<TanStackRouterDevtools />
		</>
	);
}
