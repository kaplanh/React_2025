import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
    const [count, setcount] = useState(0);
    function handleDecrement() {
        if (count >= 1) {
            setcount(count - 1);
        }
    }
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </>
    );
}
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
