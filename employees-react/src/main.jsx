import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Fran Wilson",
            email: "franwilson@mail.com",
            address: "C/ Araquil, 67, Madrid, Spain",
            phone: "(204) 619-5731",
        },
    ]);
    const [isAddModalOpen, setisAddModalOpen] = useState(false);

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header setisAddModalOpen={setisAddModalOpen} />
                <EmployeeList
                    employees={employees}
                    setisAddModalOpen={setisAddModalOpen}
                />
                {isAddModalOpen ? (
                    <AddEmployeeModal setisAddModalOpen={setisAddModalOpen} />
                ) : null}
            </div>
        </div>
    );
}

function Header({ setisAddModalOpen }) {
    return (
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>
                        Manage <b>Employees</b>
                    </h2>
                </div>
                <div className="col-sm-6">
                    <button
                        onClick={() => setisAddModalOpen(true)}
                        className="btn btn-success"
                    >
                        <i className="material-icons">&#xE147;</i>{" "}
                        <span>Add New Employee</span>
                    </button>
                    <button className="btn btn-danger">
                        <i className="material-icons">&#xE15C;</i>{" "}
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

function AddEmployeeModal({ setisAddModalOpen }) {
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
        e.preventDefault();
        // console.log("formData", formData);
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
function EmployeeList({ employees }) {
    // console.log("emp", employees);

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="selectAll" />
                            <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <EmployeeItem key={employee.id} employee={employee} />
                ))}
            </tbody>
        </table>
    );
}

function EmployeeItem({ employee }) {
    // console.log(employee);
    const { name, email, address, phone } = employee; //Destructuring
    return (
        <tr>
            <td>
                <span className="custom-checkbox">
                    <input
                        type="checkbox"
                        id="checkbox1"
                        name="options[]"
                        value="1"
                    />
                    <label htmlFor="checkbox1"></label>
                </span>
            </td>

            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                <a
                    href="#editEmployeeModal"
                    className="edit"
                    data-toggle="modal"
                >
                    <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                    >
                        &#xE254;
                    </i>
                </a>
                <a
                    href="#deleteEmployeeModal"
                    className="delete"
                    data-toggle="modal"
                >
                    <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                    >
                        &#xE872;
                    </i>
                </a>
            </td>
        </tr>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
