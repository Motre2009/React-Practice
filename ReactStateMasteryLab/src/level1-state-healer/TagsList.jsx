import { useState } from 'react'

export default function TagsList() {
    const [tags, setTags] = useState(['React', 'JS'])
    const hasCSS = tags.includes('CSS')

    return (
        <div>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <button onClick={() => setTags([...tags, 'CSS'])} disabled={hasCSS}>
                Add CSS
            </button>
        </div>
    )
}
