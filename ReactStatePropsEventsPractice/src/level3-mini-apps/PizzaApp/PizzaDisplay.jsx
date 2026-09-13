export default function PizzaDisplay({ pizza }) {
    return (
        <div className="pizza-display">
            <h3>{pizza.name}</h3>
            <ul className="pizza-ingredients">
                {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p className="pizza-price">Ціна: {pizza.price.toFixed(2)} $</p>
        </div>
    )
}
