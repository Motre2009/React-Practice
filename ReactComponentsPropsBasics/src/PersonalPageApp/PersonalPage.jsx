function ShowPersonalPage({ name, number, email, address, workExperience, img }) {
    return (
        <div className="card">
            <img src={img} alt={name} />
            <h2 className="card_title">{name}</h2>
            <div className="card_info">
                <p>
                    <span>Number:</span> {number}
                </p>
                <p>
                    <span>Email:</span> {email}
                </p>
                <p>
                    <span>Address:</span> {address}
                </p>
                <p>
                    <span>Work experience:</span> {workExperience}
                </p>
            </div>
        </div>
    )
}

export default function PersonalPage() {
    return (
        <>
            <ShowPersonalPage
                name="Мотре Крістіан Юрійович"
                number="+380 97 94..."
                email="tirianukr@icloud.com"
                address="Somewhere"
                workExperience="I'm student for 3 years"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SH_wF8or6fob5uQpZuxYKxvHs1DJQagJfosPiEb-qQ&s=10"
            />
        </>
    )
}
