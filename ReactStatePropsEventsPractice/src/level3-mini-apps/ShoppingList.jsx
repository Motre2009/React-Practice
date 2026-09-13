import { useState } from 'react'

export default function ShoppingList() {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')

    return (
        <>
            <input
                placeholder="Ведіть предмети в списку..."
                type="text"
                value={newItem}
                onChange={(e) => {
                    setNewItem(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    if (newItem.trim() !== '') {
                        setItems([...items, newItem])
                        setNewItem('')
                    }
                }}
            >
                Додати
            </button>
            <ul>
                {items.map((item, index) => {
                    return (
                        <>
                            <li key={index}>
                                {item}
                                <button
                                    className="item-delete-btn"
                                    onClick={() => {
                                        setItems(items.filter((item, i) => i != index))
                                    }}
                                >
                                    X
                                </button>
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}
