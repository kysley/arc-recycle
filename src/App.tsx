import { useMemo, useState } from "react";
import "./App.css";
import lootData from "./arc_raiders_loot_normalized.json";
import { ItemsTable } from "./items-table";
import { SearchBar } from "./search-bar";
import type { Item } from "./types";

// To array and sort alpha
const itemsArray = Object.values(lootData.items).sort((a, b) =>
	a.name.localeCompare(b.name),
) as Item[];

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredItems = useMemo(() => {
		let filtered = itemsArray;

		if (searchTerm.trim()) {
			filtered = itemsArray.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}

		// no recyclable prio if there is no filter term
		if (!searchTerm) return filtered;

		// prioritize recyclable items first
		return filtered.sort((a, b) => {
			if (a.safe_to_recycle && !b.safe_to_recycle) return -1;
			if (!a.safe_to_recycle && b.safe_to_recycle) return 1;
			return 0;
		});
	}, [searchTerm]);

	return (
		<div className="app">
			<header className="app-header">
				<h1 className="app-title">ARC RAIDERS RECYCLE GUIDE</h1>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<div className="item-count">
					{filteredItems.length} / {itemsArray.length} items
				</div>
			</header>

			<main>
				<ItemsTable
					items={filteredItems}
					showDetails={searchTerm.trim().length > 0}
				/>
			</main>
		</div>
	);
}

export default App;
