export default function Card() {
    return (
        <>
            <UserCard name="Alex" age={25} />
            <UserCardProps name="John" age={23} />
        </>
    )
}

function UserCard({ name, age }) {
    return (
        <div>
            Name: {name}, Age: {age}
        </div>
    )
}

function UserCardProps(props) {
    return (
        <div>
            Name: {props.name}, Age: {props.age}
        </div>
    )
}
