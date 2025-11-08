import './EmployeesGallery.css';
import { employees } from '../../types/Employee/Employee';

import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

export const EmployeesGallery = () => {
    const allEmployees = [...employees];
    return (
        <div>
            {allEmployees.map((emp, index) => {
                return (
                    <div className='employee-gallery' key={index}>
                        <EmployeeCard
                            id={emp.id}
                            name={emp.name}
                            job={emp.job}
                            address={emp.address}
                            imageUrl={emp.imageUrl}
                        ></EmployeeCard>
                    </div>
                )
            })}
        </div>
    )
}
