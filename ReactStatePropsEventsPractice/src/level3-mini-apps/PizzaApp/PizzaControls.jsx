export default function PizzaControls({ onAddMeat, onAddCheese, hasMeat, hasCheese }) {
    return (
        <div className="pizza-controls">
            <button onClick={onAddMeat} disabled={hasMeat}>
                Додати м’ясо
            </button>
            <button onClick={onAddCheese} disabled={hasCheese}>
                Додати сир
            </button>
        </div>
    )
}
