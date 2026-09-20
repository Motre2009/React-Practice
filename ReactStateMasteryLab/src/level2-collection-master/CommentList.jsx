import { useState } from 'react'

export default function CommentList() {
    const [comments, setComments] = useState([
        { id: 1, text: 'Cool!' },
        { id: 2, text: 'Bad' },
        { id: 3, text: 'Good' },
    ])

    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                    {comment.text}
                    <button
                        style={{ marginLeft: '10px' }}
                        onClick={() => {
                            setComments(comments.filter((c) => c.id !== comment.id))
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}
