import { useState } from "react";

import Header from "./components/Header";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EmployeeList from "./components/EmployeeList";
import EditEmployeeModal from "./components/EditEmployeeModal";

function App() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "David Hardy",
            email: "thomashardy@mail.com",
            address: "89 Chiaroscuro Rd, Portland, USA",
            phone: "(171) 555-2222",
        },
        {
            id: 2,
            name: "Ricardo Quaresma",
            email: "ricody@mail.com",
            address: "89 Chiaroscuro Rd, Portland, USA",
            phone: "(171) 555-2222",
        },
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    function addEmployee(newEmployee) {
        setEmployees((prevEmployees) => [
            ...prevEmployees,
            {
                ...newEmployee,
                id: Math.max(...prevEmployees.map((emp) => emp.id), 0) + 1,
            },
        ]);
    }

    function editEmployee(updatedEmployee) {
        // console.log("updatedEmployee", updatedEmployee);
        setEmployees((prevEmployees) => {
            return prevEmployees.map((emp) => {
                return emp.id === updatedEmployee.id ? updatedEmployee : emp;
            });
        });

        // ?asagidaki sekilde süslü kullanmazsak return yazmaya gerek kalmadanda yazabiliriz

        // setEmployees((prevEmployees) =>
        //     prevEmployees.map((emp) =>
        //         emp.id === updatedEmployee.id ? updatedEmployee : emp
        //     )
        // );
    }

    function editClick(employee) {
        setIsEditModalOpen(true);
        setSelectedEmployee(employee);
    }
    function deleteClick(employee) {
        console.log("deletedEmployee", employee);
        const confirmed = window.confirm(
            "Are you sure you want to delete this employee?"
        );
        if (confirmed) {
            setEmployees((prevEmployees) =>
                prevEmployees.filter((emp) => emp.id !== employee.id)
            );
            setSelectedEmployees([]);
        }
    }
    function deleteSelectedEmployees(employee) {
        const confirmed = window.confirm(
            "Are you sure you want to delete the employees?"
        );
        if (confirmed) {
            setEmployees((prevEmployees) =>
                prevEmployees.filter(
                    (emp) => !selectedEmployees.includes(emp.id)
                )
            );
            setSelectedEmployees([]);
        }
    }

    function closeEditModal() {
        setIsEditModalOpen(false);
        setSelectedEmployee(null);
    }

    return (
        <div className="container">
            <div className="table-wrapper">
                <Header
                    onOpenAddModal={() => setIsAddModalOpen(true)}
                    onDeleteSelected={deleteSelectedEmployees}
                />
                <EmployeeList
                    employees={employees}
                    onEditClick={editClick}
                    onDeleteClick={deleteClick}
                    selectedEmployees={selectedEmployees}
                    setSelectedEmployees={setSelectedEmployees}
                />
                <AddEmployeeModal
                    isOpen={isAddModalOpen}
                    onCloseAddModal={() => setIsAddModalOpen(false)}
                    onAddEmployee={addEmployee}
                />
                <EditEmployeeModal
                    isOpen={isEditModalOpen}
                    employee={selectedEmployee}
                    onCloseEditModal={closeEditModal}
                    // ? bu sekildede yazilabilir birden fazla satir icin süslü lazim unutma
                    // onCloseEditModal={() => {
                    //     setisEditModalOpen(false);
                    //     setSelectedEmployee(null);
                    // }}
                    onEditEmployee={editEmployee}
                />
            </div>
        </div>
    );
}

export default App;
