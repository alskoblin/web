import "./style.css";

export interface CardItem {
    id: string;
    name: string;
    type: "VISA" | "MASTERCARD" | "MIR";
    balance: number;
    last4: string;
}

interface CardsListProps {
    cards: CardItem[];
}

const CardsList = ({ cards }: CardsListProps) => {
    return (
        <div className="cards-list">
            {cards.map((card) => (
                <div className="card-item" key={card.id}>
                    <div className="card-header">
                        <span>{card.name}</span>
                        <span className="card-type">{card.type}</span>
                    </div>

                    <div className="card-balance">${card.balance}</div>
                    <div className="card-number">**** {card.last4}</div>
                </div>
            ))}
        </div>
    );
};

export default CardsList;