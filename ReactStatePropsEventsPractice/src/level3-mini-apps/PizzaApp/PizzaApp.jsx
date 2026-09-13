import { useState } from 'react'
import PizzaDisplay from './PizzaDisplay.jsx'
import PizzaControls from './PizzaControls.jsx'

export default function PizzaApp() {
    const [pizza, setPizza] = useState({
        name: 'Маргарита',
        ingredients: ['томатний соус', 'моцарела', 'базилік'],
        price: 5.99,
    })

    const hasMeat = pizza.ingredients.includes('м’ясо')
    const hasCheese = pizza.ingredients.includes('сир')

    function handleAddMeat() {
        setPizza((currentPizza) => {
            return {
                ...currentPizza,
                ingredients: [...currentPizza.ingredients, 'м’ясо'],
                price: currentPizza.price + 2.99,
            }
        })
    }
    function handleAddCheese() {
        setPizza((currentPizza) => {
            return {
                ...currentPizza,
                ingredients: [...currentPizza.ingredients, 'сир'],
                price: currentPizza.price + 1.99,
            }
        })
    }

    return (
        <div className="pizza-app">
            <PizzaDisplay pizza={pizza} />
            <PizzaControls
                onAddMeat={handleAddMeat}
                onAddCheese={handleAddCheese}
                hasMeat={hasMeat}
                hasCheese={hasCheese}
            />
        </div>
    )
}
