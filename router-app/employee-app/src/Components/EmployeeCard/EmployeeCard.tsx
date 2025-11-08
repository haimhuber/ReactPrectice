import './EmployeeCard.css';
import { Link } from 'react-router-dom';


export const EmployeeCard = (props: { id: string; name: string; job: string, address: string; imageUrl: string }) => {
    return (
        <div className='employee-card'>
            <div>
                <Link to={`/employee/${props.id}`}>
                    <div>
                        <h2>Empolyee Name:{props.name}</h2>
                        <p>Empolee job: {[props.job]}</p>
                        <img src={props.imageUrl} alt="" />
                    </div>
                </Link>
                <Link to={`/about/${props.id}`}> Employee about</Link>
            </div>
        </div>
    )
}
