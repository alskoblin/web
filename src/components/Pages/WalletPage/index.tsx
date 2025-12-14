import Information from "../../Information";
import "./style.css";

import ReceiveAmountImg from "/logo/free-icon-receive-amount-7023614.png";
import SendImg from "/logo/free-icon-send-3106856.png";
import DepositImg from "/logo/free-icon-download-8208106.png";
import Invoicing from "/logo/free-icon-atm-machine-5941316.png";
import Checkout from "/logo/free-icon-eye-test-17977150.png";
import BuyImg from "/logo/free-icon-shopping-cart-760524.png";
import MoreImg from "/logo/free-icon-social-media-15051161.png";

import TotalBalanceCard from "../../TotalBalanceCard";
import CardsList, {type CardItem } from "../../CardsList";
import Limitations from "../../Limitations";
import TransactionsSummary from "../../TransactionsSummary";
import Currency from "../../Currency";
import Due from "../../Due";

import { useState } from "react";
import FinanceChart from "../../FinanceChart";

const Wallet = () => {
    /* ---------------- MOCK DATA ---------------- */

    const cards: CardItem[] = [
        {
            id: "1",
            name: "Main Card",
            type: "VISA",
            balance: 2450,
            last4: "4281",
        },
        {
            id: "2",
            name: "Savings",
            type: "MASTERCARD",
            balance: 5320,
            last4: "9934",
        },
    ];

    const [period, setPeriod] = useState<number>(30);
    const transactionsStats = {
        count: 48,
        spent: 1820,
        cashback: 64,
    };

    const currencyItems = [
        { code: "USD", amount: 1240.5 },
        { code: "EUR", amount: 540.2 },
        { code: "BTC", amount: 0.052 },
        { code: "ETH", amount: 1.34 },
    ];

    const dueItems = [
        {
            category: "Food",
            amount: 24.5,
            time: "Today 14:32",
        },
        {
            category: "Transport",
            amount: 8.2,
            time: "Today 09:10",
        },
        {
            category: "Subscriptions",
            amount: 12.99,
            time: "Yesterday",
        },
        {
            category: "Shopping",
            amount: 120,
            time: "Yesterday",
        },
    ];

    /* ---------------- RENDER ---------------- */

    return (
        <div className="wallet-container">
            <Information pageName="Wallet" />

            <div className="wallet-container-content">
                {/* LEFT BLOCK */}
                <div className="balance-and-limit-information">
                    <div className="total-balance">
                        <TotalBalanceCard />
                    </div>

                    <div className="card-list">
                        <CardsList cards={cards} />
                    </div>

                    <div className="limitation">
                        <Limitations limit={3000} spent={1820} />
                    </div>
                </div>

                {/* RIGHT BLOCK */}
                <div className="order-wallet-infromation">
                    {/* MARKETS */}
                    <div className="markets">
                        <span className="HIGHLIGHT">Markets</span>

                        <nav className="markets-options">
                            <ol className="markets-options-list">
                                {[
                                    { img: DepositImg, label: "Deposit" },
                                    { img: SendImg, label: "Send" },
                                    { img: ReceiveAmountImg, label: "Receive" },
                                    { img: Invoicing, label: "Invoicing" },
                                    { img: Checkout, label: "Checkout" },
                                    { img: BuyImg, label: "Buy" },
                                    { img: MoreImg, label: "More" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <div className="markets-options-list-block">
                                            <button className="markets-options-block">
                                                <img src={item.img} alt={item.label} />
                                            </button>
                                            <div className="markets-options-block-name">
                                                {item.label}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>

                    {/* DAY STATISTIC */}
                    <div className="day-statystic">
                        <div className="last-days-information">
                            <TransactionsSummary
                                period={period}
                                stats={transactionsStats}
                                onPeriodChange={setPeriod}
                            />
                        </div>

                        <div className="statistics">
                            <FinanceChart transactions={[]} />
                        </div>
                    </div>

                    {/* CURRENCY + DUE */}
                    <div className="currency-due-container">
                        <div className="currency">
                            <Currency items={currencyItems} />
                        </div>

                        <div className="due">
                            <Due items={dueItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet;