export const Card = () => {
    return (
        <div style={{
            padding: 12 + "px",
            margin: 12 + "px",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: 4 + "px",
            width: 200 + "px",
            height: 200 + "px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Card</h1>
            <p>Drag me!</p>
        </div>
    )
}