export default function AlertButton() {
    return (
        <>
            <button
                onClick={() => {
                    alert('Привіт!')
                }}
            >
                Натисни мене
            </button>
        </>
    )
}
