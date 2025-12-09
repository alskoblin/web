import Information from "../../Information";
import "./style.css"


const Portfolio = () => {
    return (
        <>
            <div className="portfolio-container">
                <Information pageName="Portfolio" />
                <div className="portfolio-container-content">
                    Сюда тянется с бекенда текуший статус портфеля(текущие купленные монеты)
                </div>
            </div>
        </>
    )
}
export default Portfolio;