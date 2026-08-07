import { myCity } from './data/myCityData.jsx'

export default function MyCity() {
    return (
        <div className="card">
            <p className="info">Created on Functional Component</p>
            <h1>My city is {myCity.name}</h1>
            <h2>It is located in {myCity.nameOfCountry}</h2>
            <p className="info">Year of foundation: {myCity.yearOfFoundation}</p>
            <div className="gallery">
                {myCity.imageOfAttractions.map((url, index) => (
                    <img key={index} src={url} alt={`Attraction ${index + 1}`} />
                ))}
            </div>
        </div>
    )
}
