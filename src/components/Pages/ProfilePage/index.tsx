import Information from "../../Information";
import "./style.css"
import Logo1 from "/logo/head.png"
import Logo2 from "/logo/head.png"
import Logo3 from "/logo/head.png"
import Logo4 from "/logo/head.png"
import Logo5 from "/logo/head.png"
import Logo6 from "/logo/head.png"
import Logo7 from "/logo/head.png"
import Logo8 from "/logo/head.png"
import Logo9 from "/logo/head.png"
import FaceLogo from "/logo/head.png"
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div className="profile-container">
            <Information pageName="Profile" />
            <div className="profile-container-content">
                <div className="main-information">
                    <div className="main-information-image">
                        <img src={FaceLogo}/>
                    </div>
                    <div className="main-information-name">
                        <p>John Dow</p>
                    </div>
                    <div className="main-information-contacts">
                        <div className="email-number">
                            <div>youremail@domain.com</div>|
                            <div>8 800 555 35 35</div>
                        </div>
                    </div>
                </div>
                <div className="first-settings">
                    <div className="profile-information">
                        <img src={Logo1} alt=""/>
                        <Link to="/set-profile-information">Edit profile information</Link>
                    </div>
                    <div className="settings-notifications">
                        <div className="notifications">
                            <img src={Logo2} alt=""/>
                            <button className="edit-notifications">Notifications</button>
                        </div>
                        <button className="current-notifications-state">On</button>
                    </div>
                    <div className="language">
                        <div className="language-settigs">
                            <img src={Logo3} alt=""/>
                            <button className="edit-language">Language</button>
                        </div>
                        <button className="current-language-state">English</button>
                    </div>
                </div>
                <div className="second-settings">
                    <div className="security">
                        <img src={Logo4} alt=""/>
                        <Link to="/security">Security</Link>
                    </div>
                    <div className="theme-settigs">
                        <div className="theme">
                            <img src={Logo5} alt=""/>
                            <button className="edit-theme">Theme</button>
                        </div>
                        <button className="current-theme">Light Mode</button>
                    </div>
                </div>
                <div className="third-settings">
                    <div className="help">
                        <img src={Logo6} alt=""/>
                        <Link to="/help">Help & Support</Link>
                    </div>
                    <div className="contact">
                        <img src={Logo7} alt=""/>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="privacy">
                        <img src={Logo8} alt=""/>
                        <Link to="/privacy">Privacy policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;