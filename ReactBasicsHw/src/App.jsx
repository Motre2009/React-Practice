import MyCity from './MyCity.jsx'
import MyCityClass from './MyCityClass.jsx'
import Book from './Book.jsx'
import BookClass from './BookClass.jsx'
import './App.css'

function App() {
    return (
        <div className="app">
            <MyCity />
            <MyCityClass />
            <hr className="divider" />
            <Book />
            <BookClass />
        </div>
    )
}

export default App
