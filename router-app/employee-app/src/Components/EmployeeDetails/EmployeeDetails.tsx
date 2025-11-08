import { Navigate, useParams, useNavigate } from 'react-router-dom';
import './EmployeeDetails.css';
import { employees } from '../../types/Employee/Employee';


export const EmployeeDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const currentEmployee = employees.find((emp => emp.id === params.id));
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className='employee-details'>
            <h4>Name:{currentEmployee?.name}</h4>
            <p>Job: {currentEmployee?.job}</p>
            <p>Address: {currentEmployee?.address}</p>
            <img src={currentEmployee?.imageUrl} alt="" />
            <button onClick={goBack}>Back to employees list</button>
        </div>
    )
}
