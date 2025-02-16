function EmployeeItem({ employee }) {
    // console.log(employee);
    const { name, email, address, phone, gender, department } = employee; //Destructuring
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
            <td>{gender}</td>
            <td>{department}</td>
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

export default EmployeeItem;
