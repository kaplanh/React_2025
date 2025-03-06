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

### Form data in state

```

function AddEmployeeModal({ setisAddModalOpen, onAddEmployee }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); //auto refresh cclosed
        // console.log("formData", formData);
        onAddEmployee(formData); //state lifting up
        setisAddModalOpen(false); //model closed
        setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
            //form input fields reset
        });
    }
    return (
        <>
            <div id="addEmployeeModal" className="modal fade show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button
                                    onClick={() => setisAddModalOpen(false)}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea
                                        className="form-control"
                                        required
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-backgrop fade show"></div>
        </>
    );
}


```

# LocalStorage

```

function App() {

### for getting
 const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

### for adding

     useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees])


    return (
        <div className="container">
        ...
        </div>)
    }

```

### for deleting

```
useEffect(() => {
localStorage.removeItem("employees")
}, []);
```

### drived state(computed state)

```
    const indexOfLastEmployee = currentPage * itemsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
    const currentEmployees=employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
```

### drived state(computed state) function hali

```
    function getCurrentEmployees() {
        const indexOfLastEmployee = currentPage * itemsPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
        return employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    }
```

her state degistiginde render edildiginden bunun yerine sadece bagli olunan stateler degistiginde render olsundiye useMemo hook'u kullanilir

### useMemo

useMemo yeniden render işlemleri arasında bir hesaplamanın sonucunu önbelleğe almanızı sağlayan bir React Hook’udur.

```
const currentEmployees = useMemo(() => {
        const indexOfLastEmployee = currentPage * itemsPerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
        return employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    }, [employees, currentPage]);



```
