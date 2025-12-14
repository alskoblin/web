import './style.css'
const MarketsList = () => {
    const markets = [
        { name: "BTC", price: "43,120" },
        { name: "ETH", price: "2,315" },
        { name: "SOL", price: "95.42" },
        { name: "TRUMP", price: "0.34" },
    ];

    return (
        <div className="markets-custom">
            <span className="card-title">Markets</span>

            <div className="markets-list">
                {markets.map((m) => (
                    <div className="market-row" key={m.name}>
                        <span>{m.name}/USDT</span>
                        <span>${m.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketsList;