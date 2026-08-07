import { book } from './data/bookData.jsx'
import { renderStars } from './renderStars.jsx'

export default function Book() {
    return (
        <div className="card">
            <p className="info">Created on Function Component</p>
            <h1>Book: {book.name}</h1>
            <h2>Author: {book.author}</h2>
            <p className="info">Genre: {book.genre}</p>
            <p className="info">Year of publication: {book.year}</p>
            <p className="info">Number of pages: {book.numberOfPages}</p>
            <div>
                <h3>Reviews:</h3>
                {book.reviews.map((review) => (
                    <div key={review.id} className="review">
                        <p>
                            <strong>{review.reviewer}</strong> - {renderStars(review.rating)}
                        </p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
