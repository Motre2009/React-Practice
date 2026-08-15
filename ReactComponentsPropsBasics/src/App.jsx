import FavoriteMovie from './FavoriteMovieApp/FavoriteMovie.jsx'
import PersonalPage from './PersonalPageApp/PersonalPage.jsx'
import CurrentTime from './CurrentTimeApp/CurrentTime.jsx'
import MyPet from './MyPetApp/MyPet.jsx'
import './App.css'

function App() {
    return (
        <>
            <FavoriteMovie />
            <hr className="divider" />
            <PersonalPage />
            <hr className="divider" />
            <CurrentTime />
            <hr className="divider" />
            <MyPet />
        </>
    )
}

export default App
