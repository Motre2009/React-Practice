import { useState } from 'react'

export default function TodoItem({ todo, onEdit, onSave }) {
    const [draft, setDraft] = useState(todo.text)

    return (
        <div>
            {todo.isEditing ? (
                <input type="text" value={draft} onChange={(e) => setDraft(e.target.value)} />
            ) : (
                <span>{todo.text}</span>
            )}
            {todo.isEditing ? (
                <button onClick={() => onSave(draft)}>Save</button>
            ) : (
                <button onClick={onEdit}>Edit</button>
            )}
        </div>
    )
}
