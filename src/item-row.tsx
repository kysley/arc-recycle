import type { Item } from "./types";

interface ItemRowProps {
	item: Item;
	showDetails: boolean;
}

function ItemRow({ item, showDetails }: ItemRowProps) {
	const questCount = item.used_in?.quests?.quantity || 0;
	const projectCount = item.used_in?.projects?.quantity || 0;
	const workshopCount = item.used_in?.workshop_upgrades?.length || 0;

	const shouldShowAdditionalInfo =
		showDetails && !item.safe_to_recycle && item.used_in;

	return (
		<>
			<tr className={item.safe_to_recycle ? "item-row recyclable" : "item-row"}>
				<td className="item-name">{item.name}</td>
				<td className="item-weight">{item.weight ?? "N/A"}</td>
				<td className="item-value">{item.value}</td>
				<td className="item-usage">{questCount}</td>
				<td className="item-usage">{projectCount}</td>
				<td className="item-usage">{workshopCount}</td>
			</tr>
			{shouldShowAdditionalInfo && (
				<tr className="item-details-row">
					<td colSpan={6} className="item-details">
						<div className="usage-details">
							{questCount && (
								<div className="detail-section detail-quests">
									<strong>Quests:</strong>
									<ul>
										<li>{questCount} required for quests</li>
									</ul>
								</div>
							)}
							{projectCount && (
								<div className="detail-section detail-projects">
									<strong>Projects:</strong>
									<ul>
										<li>{projectCount} required for projects</li>
									</ul>
								</div>
							)}
							{workshopCount && (
								<div className="detail-section detail-workshop">
									<strong>Workshop Upgrades:</strong>
									<ul>
										{item.used_in?.workshop_upgrades?.map((upgrade, idx) => (
											<li key={idx}>
												{upgrade.station} (Level {upgrade.level}) -{" "}
												{upgrade.quantity}x
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</td>
				</tr>
			)}
		</>
	);
}

export { ItemRow };
