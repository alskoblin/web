import "./style.css"
import SearchLogo from "/logo/search.png"
import NotoficationLogo from "/logo/notification.png"
import FaceLogo from "/logo/head.png"
import {Link} from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import SearchPanel from "../SerachPanel";

interface InformationProps {
    pageName: string;
}

interface NotificationPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
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
            className={`notification-panel ${isOpen ? "open" : ""}`}
        >
            <h3>Notifications</h3>
            <ul>
                <li>Hello</li>
                <li>Salam</li>
                <li>Novyi Soobsenie(тянем с бэка)</li>
            </ul>
        </div>
    );
};

const Information = ({ pageName }: InformationProps) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationOpen(prev => !prev);
        setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev);
        setIsNotificationOpen(false);
    };

    const closeNotifications = () => setIsNotificationOpen(false);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <div className="information-container">
            <SearchPanel
                isOpen={isSearchOpen}
                onClose={closeSearch}
            />
            <NotificationPanel
                isOpen={isNotificationOpen}
                onClose={closeNotifications}
            />

            <div className="page">{pageName}</div>

            <div className="userbar">
                <div className="userbar__searchbar">
                    <button
                        id="search"
                        onClick={toggleSearch}
                        className={isSearchOpen ? "active" : ""}
                    >
                        <img src={SearchLogo} />
                    </button>
                </div>

                <div className="userbar__notification">
                    <button
                        id="notification"
                        onClick={toggleNotifications}
                        className={isNotificationOpen ? "active" : ""}
                    >
                        <img src={NotoficationLogo} />
                    </button>
                </div>

                <Link to="/profile">
                    <div className="user-container">
                        <p>John Dow</p>
                        <img src={FaceLogo} />
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Information