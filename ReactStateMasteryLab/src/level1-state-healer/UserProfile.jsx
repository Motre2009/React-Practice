import { useState } from 'react'

export default function UserProfile() {
    const [user, setUser] = useState({ name: 'Ivan', email: 'ivan@test.com', age: 25 })

    return (
        <div>
            <span>Enter your name: </span>
            <input
                placeholder="Enter name..."
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <br />
            <span>Enter your email: </span>
            <input
                placeholder="Enter email..."
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <span>Enter your age: </span>
            <input
                placeholder="Enter age..."
                value={user.age}
                onChange={(e) => setUser({ ...user, age: e.target.value })}
            />
            <hr />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}
