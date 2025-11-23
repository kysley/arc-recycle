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
			<tr className={item.safe_to_recycle ? "item-row item-row--recyclable" : "item-row"}>
				<td className="table-cell cell--name">{item.name}</td>
				<td className="table-cell cell--weight">{item.weight ?? "N/A"}</td>
				<td className="table-cell cell--value">{item.value}</td>
				<td className="table-cell cell--usage">{questCount}</td>
				<td className="table-cell cell--usage">{projectCount}</td>
				<td className="table-cell cell--usage">{workshopCount}</td>
			</tr>
			{shouldShowAdditionalInfo && (
				<tr className="item-details-row">
					<td colSpan={6} className="table-cell cell--details">
						<div className="usage-details">
							{questCount > 0 && (
								<div className="detail-section detail-section--quests">
									<strong className="detail-section__title">Quests:</strong>
									<ul className="detail-section__list">
										<li className="detail-section__item">{questCount} required for quests</li>
									</ul>
								</div>
							)}
							{projectCount > 0 && (
								<div className="detail-section detail-section--projects">
									<strong className="detail-section__title">Projects:</strong>
									<ul className="detail-section__list">
										<li className="detail-section__item">{projectCount} required for projects</li>
									</ul>
								</div>
							)}
							{workshopCount > 0 && (
								<div className="detail-section detail-section--workshop">
									<strong className="detail-section__title">Workshop Upgrades:</strong>
									<ul className="detail-section__list">
										{item.used_in?.workshop_upgrades?.map((upgrade, idx) => (
											<li key={idx} className="detail-section__item">
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
