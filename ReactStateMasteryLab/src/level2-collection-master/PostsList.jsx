import { useState } from 'react'

export default function PostsList() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Hello', likes: 0 },
        { id: 2, title: 'React', likes: 5 },
        { id: 3, title: 'World', likes: 2 },
    ])

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title} - Likes: {post.likes}
                    <button
                        style={{ marginLeft: '10px' }}
                        onClick={() => {
                            setPosts(posts.map((p) => (p.id === post.id ? { ...p, likes: p.likes + 1 } : p)))
                        }}
                    >
                        Like
                    </button>
                </li>
            ))}
        </ul>
    )
}
