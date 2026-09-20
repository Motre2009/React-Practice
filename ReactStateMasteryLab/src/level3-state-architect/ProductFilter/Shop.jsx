import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import ProductList from './ProductList.jsx'

const products = [
    { id: 1, name: 'Charger', price: 10.99 },
    { id: 2, name: 'Headphones', price: 29.99 },
    { id: 3, name: 'Keyboard', price: 49.99 },
    { id: 4, name: 'Mouse', price: 19.99 },
]

export default function Shop() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ProductList filteredProducts={filteredProducts} />
        </div>
    )
}
