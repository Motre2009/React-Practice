export default function SearchBar({ searchTerm, onChange }) {
    return (
        <div>
            <input type="text" placeholder="Пошук товарів..." value={searchTerm} onChange={onChange} />
        </div>
    )
}
