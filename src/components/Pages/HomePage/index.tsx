import Information from "../../Information";
import "./style.css"
import TotalBalanceCard from "../../TotalBalanceCard";
import CryptoMiniChart from "../../CryptoMiniChart";
import BigChart from "../../BigChart/index.jsx";
import MarketsList from "../../MarketsList";


const HomePage = () => {
    const btcData = [
        { time: "10:00", value: 43000 },
        { time: "11:00", value: 43200 },
        { time: "12:00", value: 43150 },
        { time: "13:00", value: 43300 },
    ];

    const ethData = [
        { time: "10:00", value: 2300 },
        { time: "11:00", value: 2320 },
        { time: "12:00", value: 2315 },
        { time: "13:00", value: 2330 },
    ];

    const solData = [
        { time: "10:00", value: 95 },
        { time: "11:00", value: 96 },
        { time: "12:00", value: 94 },
        { time: "13:00", value: 95.5 },
    ];

    const trumpData = [
        { time: "10:00", value: 0.33 },
        { time: "11:00", value: 0.34 },
        { time: "12:00", value: 0.32 },
        { time: "13:00", value: 0.34 },
    ];


    return (
        <>
            <div className = "home-page-container">
                <Information pageName="Home" />
                <div className="home-page-container-content">
                    <div className="assets-crypto-grafics">
                        <div className="assets">
                            <TotalBalanceCard/>
                        </div>
                        <div className="crypto-grafics">
                            <div className="first-blok">
                                <div className="crypto-metric">
                                    <CryptoMiniChart data={btcData} pair="BTC/USDT"/>
                                </div>
                                <div className="crypto-metric">
                                    <CryptoMiniChart data={ethData} pair="USDT/ETH"/>
                                </div>
                            </div>
                            <div className="second-blok">
                                <div className="crypto-metric">
                                    <CryptoMiniChart data={trumpData} pair="USDT/SOLANA"/>
                                </div>
                                <div className="crypto-metric">
                                    <CryptoMiniChart data={solData} pair="USDT/TRUMPCOIN"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-grafic-markets">
                        <div className="big-grafic-сustom">
                            <BigChart/>
                        </div>
                        <div className="Markets">
                            <MarketsList/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;