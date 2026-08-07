import { myCity } from './data/myCityData.jsx'
import React from 'react'

export default class MyCityClass extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="info">Created on Class Component</p>
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
}
