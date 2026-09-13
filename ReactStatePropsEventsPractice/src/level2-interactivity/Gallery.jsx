import { useState } from 'react'

const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XWgnKOHRuDjBdhWKavy2Dof1V-Z7Z77Br_Fl2W-yAA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdU9ve8JF03gHeZ-847QP4VnSHqMHWdxpTSv_oYZLnmQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKuU0t939sv3plpAg-apNtQWDMYTHOj7yad7SFyWRSQ&s=10',
]

export default function Gallery() {
    const [index, setIndex] = useState(0)

    const hasPrev = index > 0
    const hasNext = index < images.length - 1

    return (
        <>
            <img src={images[index]} />
            <button
                disabled={!hasPrev}
                onClick={() => {
                    setIndex(index - 1)
                }}
            >
                Назад
            </button>
            <button
                disabled={!hasNext}
                onClick={() => {
                    setIndex(index + 1)
                }}
            >
                Вперед
            </button>
        </>
    )
}
