import { useState } from 'react'

export default function Greeting() {
    const [message, setMessage] = useState('')

    return (
        <>
            <input
                placeholder="Ведіть ваше ім'я..."
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value)
                }}
            />
            <h2>Привіт, {message || 'Незнайомець'}!</h2>
        </>
    )
}
