import type { PropsWithChildren } from "react";

import classes from "./Container.module.css";

export function Container({ children }: PropsWithChildren) {
	return <main className={classes.container}>{children}</main>;
}

Container.Header = function ContainerHeader({ children }: PropsWithChildren) {
	return <header>{children}</header>;
};

Container.Content = function ContainerContent({ children }: PropsWithChildren) {
	return <div className={classes.content}>{children}</div>;
};
