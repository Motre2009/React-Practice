function ShowMyPet({ name, type, breed, age, weight, character, img }) {
    return (
        <div className="card">
            <img src={img} alt={name} />
            <h2 className="card_title">{name}</h2>
            <div className="card_info">
                <p>
                    <span>Type:</span> {type}
                </p>
                <p>
                    <span>Breed:</span> {breed}
                </p>
                <p>
                    <span>Age:</span> {age}
                </p>
                <p>
                    <span>Weight:</span> {weight}
                </p>
                <p>
                    <span>Character:</span> {character}
                </p>
            </div>
        </div>
    )
}

export default function MyPet() {
    return (
        <>
            <ShowMyPet
                name="Барсик"
                type="Кіт"
                breed="Британська короткошерста"
                age={3}
                weight="4.5 кг"
                character="Ласкавий, любить спати на клавіатурі"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfU26uFEQWRGNPYR0Hn4RB06bVETzA2MC-89nkdx2fA&s=10"
            />
        </>
    )
}
