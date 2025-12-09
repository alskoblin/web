import "./style.css"
import FaceLogo from "/logo/head.png"
import GoogleBlackLogo from "/logo/google.png"
import FacebookBlackLogo from "/logo/facebook.png"
import YoutubeBlackLogo from "/logo/youtube.png"
import GoogleLogo from "/logo/search-2.png"
import FacebookLogo from "/logo/facebook1.png"
import AppleLogo from "/logo/apple.png"

const Authentication = () => {
    return (
        <>
            <div className="authentication-container">
                <div className="review-container">
                    <div className="review">
                            <div className="review-photo">
                                <img src={FaceLogo}/>
                            </div>
                            <div className="review-title">CRYPTO CHANGED MY LIFE!</div>
                            <div className="review-text">
                                <p>
                                    This platform offers a seamless user experience and robust security features, making trading incredibly straightforward. I highly recommend it for both beginners and experienced traders looking for reliability and speed.
                                </p>
                            </div>
                            <div className="reviewer-information">
                                <p className="name">John Dow</p>
                                <p className="city">San Francisco</p>
                            </div>
                    </div>
                    <div className="trusted">
                        <div className="trusted-text">Trusted By</div>
                        <div className="trusted-company">
                            <div className="google">
                                <img src={GoogleBlackLogo} />
                            </div>
                            <div className="facbook">
                                <img src={FacebookBlackLogo} />
                            </div>
                            <div className="youtube">
                                <img src={YoutubeBlackLogo} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="authentication-form-container">
                    <div className="authentication-form-container-content">
                        <div className="authentication-form-container-text">Sign in with password</div>
                        <div className="authentication-forms">
                            <form id="user-data" className="user-data">
                                <input type="text" name="email" placeholder="Email"/>
                                <input type="text" name="password" placeholder="Password"/>
                                <div className="remember-checkbox">
                                    <input type="checkbox" id="remember" name="remember" value="yes"/>
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <button type="submit" form="user-data" id="sendAll">SIGN IN</button>
                            </form>
                        </div>
                        <div className="authentication-forms-continue-with">
                            <div className="authentication-forms-continue-with-text">
                                or continue with
                            </div>
                            <div className="authentication-forms-continue-with-company">
                                <div className="googlelogo">
                                    <button className="googleButton">
                                        <img src={GoogleLogo} />
                                    </button>
                                </div>
                                <div className="facebook">
                                    <button className="facebookButton">
                                        <img src={FacebookLogo} />
                                    </button>
                                </div>
                                <div className="apple">
                                    <button className="appleButton">
                                        <img src={AppleLogo} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="authentication-forms-signup">
                            <p>Do not have an account? <a href="#">Sign up</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication;