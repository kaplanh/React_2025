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

### 1- prop ile string gönderebiliriz

```
function App() {
    return (
        <div className="container">
            <div className="table-wrapper">
                <Header title='Manage Employees'/>
            </div>
        </div>
    );
}


function Header({ title }) {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                <h2>
                        {title.split(" ")[0]}
                        <b> {title.split(" ")[1]}</b>
                </h2>

                </div>
            </div>
        </div>
    );

}



```

### 2- prop ile jsx gönderebiliriz

```
function App() {
    return (
        <div className="container">
            <div className="table-wrapper">
                <Header title={
                        <h2>
                            Manage <b>Employees</b>
                        </h2>
                }/>
            </div>
        </div>
    );
}


function Header({ title }) {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                   {title}
                </div>
            </div>
        </div>
    );

}



```

### 3- prop ile bir fonksiyonda gönderebiliriz(Lifting State Up)

```
function App() {
    const [title, setTitle] = useState("Default Title");

    function updateTitle() {
        setTitle("New Title");
    }

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header title={title} onUpdateTitle={updateTitle} />

            </div>
        </div>
    );
}

function Header({ title, onUpdateTitle }) {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>
                        {title.split(" ")[0]}
                        <b> {title.split(" ")[1]}</b>
                    </h2>
                </div>
                <div className="col-sm-6">
                    <button onClick={onUpdateTitle} className="btn btn-success">
                        Click Me
                    </button>

                </div>
            </div>
        </div>
    );
}


```
