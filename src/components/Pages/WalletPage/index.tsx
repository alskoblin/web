import Information from "../../Information";
import "./style.css"


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
                            Markets
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