import { useState } from 'react'
import InputBox from './InputBox.jsx'
import DisplayBox from './DisplayBox.jsx'

export default function InputApp() {
    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <InputBox value={inputValue} onChange={setInputValue} />
            <DisplayBox value={inputValue} />
        </div>
    )
}
