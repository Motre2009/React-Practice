export default function Cart({ cartItems }) {
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <span style={{ fontWeight: 'bold' }}>{item.name} </span>
                            <br />
                            <span>${item.price.toFixed(2)} </span>
                            <br />
                            <span>
                                Quantity: {item.quantity} x ${item.price.toFixed(2)} = $
                                {(item.price * item.quantity).toFixed(2)}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
        </div>
    )
}
