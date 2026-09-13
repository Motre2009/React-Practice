import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter(counter + 1)
    }
    console.log(counter)

    return <button onClick={handleClick}>Кліків: {counter}</button>
}
