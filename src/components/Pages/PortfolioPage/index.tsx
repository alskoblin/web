

import Information from "../../Information";
import "./style.css";

const Portfolio = () => {
    const assets = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            amount: 0.42,
            price: 43000,
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            amount: 3.1,
            price: 2300,
        },
        {
            name: "Solana",
            symbol: "SOL",
            amount: 25,
            price: 95,
        },
    ];

    const totalBalance = assets.reduce(
        (sum, asset) => sum + asset.amount * asset.price,
        0
    );

    return (
        <div className="portfolio-container">
            <Information pageName="Portfolio" />

            <div className="portfolio-container-content">
                <div className="portfolio-summary">
                    <span>Total balance</span>
                    <h2>${totalBalance.toLocaleString()}</h2>
                </div>

                <div className="portfolio-table">
                    <div className="portfolio-table-header">
                        <span>Asset</span>
                        <span>Amount</span>
                        <span>Price</span>
                        <span>Value</span>
                    </div>

                    {assets.map((asset) => (
                        <div className="portfolio-table-row" key={asset.symbol}>
                            <div className="asset-name">
                                <span className="asset-symbol">{asset.symbol}</span>
                                <span className="asset-fullname">{asset.name}</span>
                            </div>
                            <span>{asset.amount}</span>
                            <span>${asset.price.toLocaleString()}</span>
                            <span className="asset-value">
                ${(asset.amount * asset.price).toLocaleString()}
              </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;