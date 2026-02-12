import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const data = [
	{
		task1: true,
		task2: false,
		task3: false,
	},
	{
		task1: true,
		task2: true,
	},
	{
		task1: true,
		task2: false,
	},
	{
		task1: false,
		task2: false,
	},
	{
		task1: true,
		task2: false,
	},
	{
		task1: true,
		task2: false,
	},
];

export function Dashboard() {
	const [columns, setColumns] = useState([
		{
			header: "Weekly",
			columns: [
				{
					accessorKey: "task1",
					name: "Task 1",
				},
			],
		},
		{
			header: "Daily",
			columns: [
				{
					accessorKey: "task2",
					name: "Task 2",
				},
				{
					accessorKey: "task3",
					name: "Task 3",
				},
			],
		},
	]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th key={header.id} colSpan={header.colSpan} tabIndex={0}>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						console.log("row", row);
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => {
									console.log("cell", cell);

									return (
										<td key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
