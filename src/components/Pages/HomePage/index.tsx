import Information from "../../Information";
import "./style.css"


const HomePage = () => {
    return (
        <>
            <div className="home-page-container">
                <Information pageName="Home" />
                <div className="home-page-container-content">
                    <div className="assets-crypto-grafics">
                        <div className="assets">
                            Your total balance(все летит с бекенда)
                        </div>
                        <div className="crypto-grafics">
                            <div className="first-blok">
                                <div className="crypto-metric">
                                    График USDT/BTC(Данные идут с бекенда)
                                </div>
                                <div className="crypto-metric">
                                    График USDT/ETH(Данные идут с бекенда)
                                </div>
                            </div>
                            <div className="second-blok">
                                <div className="crypto-metric">
                                    График USDT/SOLANA(Данные идут с бекенда)
                                </div>
                                <div className="crypto-metric">
                                    График USDT/TRUMPCOIN(Данные идут с бекенда)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="big-grafic-markets">
                        <div className="big-grafic">
                            Большой подробный график(цена время, период можно будет выбрать) USDT/BTC(Данные идут с бекенда)
                        </div>
                        <div className="Markets">
                            Тут будет список основных крипто пар с ценами и их логотипами(Данные идут с бекенда)
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;