import Information from "../../Information";
import "./style.css"
import FaceLogo from "/logo/head.png"
import {Link} from "react-router-dom";
import {ChangeMode} from "../../../js/changeMode.tsx";

const Index = () => {
    return (
        <div className="profile-container" >
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
                        <Link to="/set-profile-information">Edit profile information</Link>
                    </div>
                    <div className="settings-notifications">
                        <div className="notifications">
                            <button className="edit-notifications">Notifications</button>
                        </div>
                        <button className="current-notifications-state">On</button>
                    </div>
                </div>
                <div className="second-settings">
                    <div className="security">
                        <Link to="/security">Security</Link>
                    </div>
                    <div className="theme-settigs">
                        <div className="theme">
                            <button className="edit-theme">Theme</button>
                        </div>
                        <button id="current-theme" onClick={ChangeMode}>Change</button>
                    </div>
                </div>
                <div className="third-settings">
                    <div className="help">
                        <Link to="/help">Help & Support</Link>
                    </div>
                    <div className="contact">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="privacy">
                        <Link to="/privacy">Privacy policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;