export default function PostsList({ filteredProducts }) {
    return (
        <div>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Ціна: ${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}
