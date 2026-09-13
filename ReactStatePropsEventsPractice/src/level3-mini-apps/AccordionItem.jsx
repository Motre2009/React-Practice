import { useState } from 'react'

export default function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h3>{question}</h3>
            {isOpen && <p>{answer}</p>}
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Приховати' : 'Показати'}</button>
        </div>
    )
}
