import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";

interface SearchBarProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	useHotkeys(
		"/",
		() => {
			setSearchTerm("");
			inputRef.current?.focus();
		},
		{
			enableOnFormTags: true,
			useKey: true,
			preventDefault: true,
		},
	);

	return (
		<div className="search-bar">
			<input
				ref={inputRef}
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder='Press "/" to search items...'
				autoFocus
			/>
		</div>
	);
}

export { SearchBar };
