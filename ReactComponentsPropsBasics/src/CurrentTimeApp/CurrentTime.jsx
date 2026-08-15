import { useState, useEffect } from 'react'

function ShowCurrentTime({ hour, minute, second }) {
    return (
        <div className="time-display">
            {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}:{String(second).padStart(2, '0')}
        </div>
    )
}

export default function CurrentTime() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            <ShowCurrentTime hour={time.getHours()} minute={time.getMinutes()} second={time.getSeconds()} />
        </>
    )
}
