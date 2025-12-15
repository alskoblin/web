import { useState } from "react";
import Navigation from "../Navigation";
import Logo from "/logo/toncoin-ton-logo.png";
import "./style.css";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    if (location.pathname === "/login") return null;

    return (
        <>
            {/* БУРГЕР */}
            <button
                className={`burger ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* SIDEBAR */}
            <div className={`header-container ${open ? "active" : ""}`}>
                <div className="header__logo">
                    <img src={Logo} alt="" />
                    <div className="header__logo__name">Crypto</div>
                </div>
                <Navigation />
            </div>
        </>
    );
};

export default Header;