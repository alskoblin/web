import Information from "../../Information";
import "./style.css";
import FaceLogo from "/logo/head.png";

const EditeProfile = () => {
    return (
        <div className="edit-profile-container">
            <Information pageName="Edit profile" />

            <div className="edit-profile-container-content">
                <div className="profile-card">
                    <img src={FaceLogo} alt="Profile" className="profile-avatar" />

                    <h2 className="profile-title">Edit profile</h2>

                    <form className="profile-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Insert name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone number</label>
                            <input
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                            />
                        </div>

                        <button type="submit" className="save-button">
                            Save changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditeProfile;