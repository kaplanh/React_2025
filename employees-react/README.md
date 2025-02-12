# State

```

import { useState } from "react";

function App() {
    const [count, setcount] = useState(0);
    //1.weg
    function handleDecrement() {
        if (count >= 1) {
            setcount(count - 1);
        }
    }
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => setcount(count + 1)}>increment</button>
            //2.weg
            <button onClick={handleDecrement}>decrement</button>
        </>
    );
}


```
