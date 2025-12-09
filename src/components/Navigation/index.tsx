import {Link} from "react-router-dom";
import HomeLogo from "/logo/home.png";
import PanelLogo from "/logo/panel.png";
import PieLogo from "/logo/pie.png";
import WalletLogo from "/logo/wallet.png";
import HelpLogo from "/logo/help-call.png";
import LogOutLogo from "/logo/logout.png";


function Navigation() {
    return (
        <>
                    <div className= "navigation">
                        <nav className="page-navigation">
                            <div className="page-navigation__home__link">
                                <img src={HomeLogo} />
                                <Link to="/home">Home</Link>
                            </div>
                            <div className="page-navigation__transaction__link">
                                <img src={PanelLogo} />
                                <Link to="/transactions">Transactions</Link>
                            </div>
                            <div className="page-navigation__portfolio__link">
                                <img src={PieLogo} />
                                <Link to="/portfolio">Portfolio</Link>
                            </div>
                            <div className="page-navigation__wallet__link">
                                <img src={WalletLogo} />
                                <Link to="/wallet">Wallet</Link>
                            </div>
                        </nav>
                        <nav className="settings-navigation">
                            <div className="page-navigation__help__link">
                                <img src={HelpLogo} />
                                <Link to="/help">Help</Link>
                            </div>
                            <div className="page-navigation__logout__link">
                                <img src={LogOutLogo} />
                                <Link to="/login">Log out</Link>
                            </div>
                        </nav>
                    </div>
        </>
    )
}
export default Navigation