import Navigation from "../Navigation";
import Logo from "/logo/toncoin-ton-logo.png"
import './style.css'
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();

    const hideHeader = location.pathname === '/login';

    if (hideHeader) {
        return null;
    }
    return (
        <div className="header-container">
            <div className="header__logo">
                <img src={Logo} alt="" />
                <div className="header__logo__name">Crypto</div>
            </div>
            <Navigation />
        </div>
    )
}
export default Header;