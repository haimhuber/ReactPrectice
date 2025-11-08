import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { EmployeesGallery } from '../EmployeesGallery/EmployeesGallery';
import { EmployeeDetails } from '../EmployeeDetails/EmployeeDetails';

export const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EmployeesGallery></EmployeesGallery>}></Route>
                    <Route path='/employee/:id' element={<EmployeeDetails></EmployeeDetails>}></Route>
                    <Route path='/about-employee/:id' element={<EmployeeDetails></EmployeeDetails>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
