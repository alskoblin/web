import Information from "../../Information";
import "./style.css"


const Transaction = () => {
    return (
        <>
            <div className="transaction-container">
                <Information pageName="Transactions" />
                <div className="transaction-history-container">
                    <div className="transaction-history-container-content">
                       <div className="transaction-history-container-content-name"><span className="HIGHLIGHT">Name</span></div>
                        <div className="transaction-history-container-content-date"><span className="HIGHLIGHT">Date</span></div>
                        <div className="transaction-history-container-content-amount"><span className="HIGHLIGHT">Amount</span></div>
                        <div className="transaction-history-container-content-fee"><span className="HIGHLIGHT">Fee</span></div>
                        <div className="transaction-history-container-content-channel"><span className="HIGHLIGHT">Channel</span></div>
                        <div className="transaction-history-container-content-name">Car loans</div>
                        <div className="transaction-history-container-content-date">18.01.2026</div>
                        <div className="transaction-history-container-content-amount">120$</div>
                        <div className="transaction-history-container-content-fee">1.2$</div>
                        <div className="transaction-history-container-content-channel">Offline</div>
                        <div className="transaction-history-container-content-name">Buy Bitcoin</div>
                        <div className="transaction-history-container-content-date">19.01.2026</div>
                        <div className="transaction-history-container-content-amount">1200$</div>
                        <div className="transaction-history-container-content-fee">20$</div>
                        <div className="transaction-history-container-content-channel">Online</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Transaction;