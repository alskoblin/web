import "./style.css"
import {useEffect, useRef} from "react";

interface SearchPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchPanel = ({ isOpen, onClose }: SearchPanelProps) => {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div
            ref={panelRef}
            className={`search-panel ${isOpen ? "open" : ""}`}
        >
            <h3>Search</h3>
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
        </div>
    );
};
export default SearchPanel;