import Information from "../../Information";
import "./style.css"
import Logo from "/logo/toncoin-ton-logo.png"


const HelpPage = () => {
    return (
        <>
            <div className="help-container">
                <Information pageName="Help" />
                <div className="help-container-content">
                    <p>You can contact us by : babidjon@mail.ru</p>
                    <div className="help-logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HelpPage;