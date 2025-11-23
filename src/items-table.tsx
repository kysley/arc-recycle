import { ItemRow } from "./item-row";
import type { Item } from "./types";

interface ItemsTableProps {
	items: Item[];
	showDetails: boolean;
}

function ItemsTable({ items, showDetails }: ItemsTableProps) {
	return (
		<table className="items-table">
			<thead>
				<tr>
					<th>NAME</th>
					<th>WEIGHT</th>
					<th>VALUE</th>
					<th>QUESTS</th>
					<th>PROJECTS</th>
					<th>WORKSHOP</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<ItemRow key={item.id} item={item} showDetails={showDetails} />
				))}
			</tbody>
		</table>
	);
}

export { ItemsTable };
