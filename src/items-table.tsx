import { ItemRow } from "./item-row";
import type { Item } from "./types";

interface ItemsTableProps {
	items: Item[];
	showDetails: boolean;
}

function ItemsTable({ items, showDetails }: ItemsTableProps) {
	return (
		<table className="items-table">
			<thead className="table-header">
				<tr>
					<th className="table-header-cell">NAME</th>
					<th className="table-header-cell">WEIGHT</th>
					<th className="table-header-cell">VALUE</th>
					<th className="table-header-cell">QUESTS</th>
					<th className="table-header-cell">PROJECTS</th>
					<th className="table-header-cell">WORKSHOP</th>
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
