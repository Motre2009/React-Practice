export function renderStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
