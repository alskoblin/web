import Information from "../../Information";
import "./style.css"


const Transaction = () => {
    return (
        <>
            <div className="transaction-container">
                <Information pageName="Transactions" />
                <div className="transaction-history-container">
                    <div className="transaction-history-container-content">
                        Сюда будут тянуться с бекенда все операции с кошельком
                    </div>
                </div>
            </div>
        </>
    )
}
export default Transaction;