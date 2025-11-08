import { Link } from "react-router-dom";
import type { POI } from "../../types/POIData";
import './POICard.css';
export const POICard = ({ poi }: { poi: POI }) => {
    return (
        <div className="POICard">
            <img src={poi.imageUrl} alt={poi.name} />
            <h4>{poi.name}</h4>
            <Link to={poi.id}>View Details</Link>
        </div>
    );
};