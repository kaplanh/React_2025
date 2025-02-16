import { useState } from "react";
import AddEmployeeModal from "./components/AddEmployeeModal.jsx";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";

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

    function addEmployee(newEmployee) {
        setEmployees((prevEmployees) => [
            ...prevEmployees,

            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map((emp) => emp.id), 0) + 1, //https://www.npmjs.com/package/uuid ilede olusturulabilir
            },
        ]);
    }

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header setisAddModalOpen={setisAddModalOpen} />
                <EmployeeList
                    employees={employees}
                    setisAddModalOpen={setisAddModalOpen}
                />
                {isAddModalOpen ? (
                    <AddEmployeeModal
                        setisAddModalOpen={setisAddModalOpen}
                        onAddEmployee={addEmployee}
                    />
                ) : null}
            </div>
        </div>
    );
}
export default App;
