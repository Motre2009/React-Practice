import { useState } from 'react'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'

const products = [
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Orange', price: 0.8 },
]

export default function ShopWithCart() {
    const [cartItems, setCartItems] = useState([])

    return (
        <div>
            <Shop
                products={products}
                onAddToCart={(product) => {
                    setCartItems((prevCartItems) => {
                        const existingItem = prevCartItems.find((item) => item.id === product.id)

                        if (existingItem) {
                            return prevCartItems.map((item) => {
                                if (item.id === product.id) {
                                    return { ...item, quantity: item.quantity + 1 }
                                }
                                return item
                            })
                        }
                        return [...prevCartItems, { ...product, quantity: 1 }]
                    })
                }}
            />
            <Cart cartItems={cartItems} />
        </div>
    )
}
