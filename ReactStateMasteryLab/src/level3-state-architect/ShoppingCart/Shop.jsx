export default function Shop({ products, onAddToCart }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}
