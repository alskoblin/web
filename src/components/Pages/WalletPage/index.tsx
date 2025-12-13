import Information from "../../Information";
import "./style.css"
import ReceiveAmountImg  from "/logo/free-icon-receive-amount-7023614.png";
import SendImg  from "/logo/free-icon-send-3106856.png";
import DepositImg  from "/logo/free-icon-download-8208106.png";
import Invoicing  from "/logo/free-icon-atm-machine-5941316.png";
import Checkout  from "/logo/free-icon-eye-test-17977150.png";
import BuyImg   from "/logo/free-icon-shopping-cart-760524.png";
import MoreImg  from "/logo/free-icon-social-media-15051161.png";


const Wallet = () => {
    return (
        <>
            <div className="wallet-container">
                    <Information pageName="Wallet" />
                <div className="wallet-container-content">
                    <div className="balance-and-limit-information">
                        <div className="total-balance">
                            Total balance
                        </div>
                        <div className="card-list">
                            Card list
                        </div>
                        <div className="limitation">
                            Limitation
                        </div>
                    </div>
                    <div className="order-wallet-infromation">
                        <div className="markets">
                            <span className="HIGHLIGHT">Markets</span>
                            <nav className="markets-options">
                                <ol className="markets-options-list">
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={DepositImg} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Deposit
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={SendImg} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Send
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={ReceiveAmountImg} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Receive
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={Invoicing} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Invoicing
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={Checkout} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Checkout
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={BuyImg} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            Buy
                                        </div>
                                    </div></li>
                                    <li> <div className="markets-options-list-block">
                                        <button className="markets-options-block">
                                            <img src={MoreImg} alt=""/>
                                        </button>
                                        <div className="markets-options-block-name">
                                            More
                                        </div>
                                    </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="day-statystic">
                            <div className="last-days-information">
                                Last x days
                            </div>
                            <div className="statistics">
                                Statistics
                            </div>
                        </div>
                        <div className="currency-due-container">
                                <div className="currency">
                                    Currency
                                </div>
                            <div className="due">
                                Due
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wallet;