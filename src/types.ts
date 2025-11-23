export interface Item {
	id: string;
	name: string;
	categories: string[];
	weight: number | null;
	value: number;
	safe_to_recycle?: boolean;
	used_in?: {
		quests?: { quantity: number };
		projects?: { quantity: number };
		workshop_upgrades?: Array<{
			station: string;
			level: number;
			quantity: number;
		}>;
	};
}
