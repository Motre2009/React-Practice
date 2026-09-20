import { useState } from 'react'
import TodoItem from './TodoItem.jsx'

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isCompleted: false, isEditing: false },
        { id: 2, text: 'Build a Todo App', isCompleted: false, isEditing: false },
        { id: 3, text: 'Master State Management', isCompleted: false, isEditing: false },
        { id: 4, text: 'Deploy to Production', isCompleted: false, isEditing: false },
    ])

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={() =>
                        setTodos(
                            todos.map((t) => {
                                if (t.id === todo.id) {
                                    return {
                                        ...t,
                                        isEditing: !t.isEditing,
                                    }
                                }
                                return t
                            }),
                        )
                    }
                    onSave={(newText) => {
                        setTodos(
                            todos.map((t) => {
                                if (t.id === todo.id) {
                                    return {
                                        ...t,
                                        text: newText,
                                        isEditing: false,
                                    }
                                }
                                return t
                            }),
                        )
                    }}
                />
            ))}
        </div>
    )
}
