import { useState } from 'react'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
    return (
        <div
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
                padding: '15px',
                borderRadius: '8px',
            }}
        >
            <p style={{ opacity: 1 }}>
                The rain stopped. The city became quiet, and the moon appeared between the clouds. Somewhere in the
                distance, a dog barked.
            </p>
            <button
                onClick={() => {
                    setIsDark(!isDark)
                }}
            >
                {isDark ? '🌑' : '☀️'}
            </button>
        </div>
    )
}
