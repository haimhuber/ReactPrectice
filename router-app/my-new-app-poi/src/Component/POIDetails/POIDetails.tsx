import './POIDetails.css';
import { useParams } from "react-router-dom";
import { allPois } from "../../types/POIData";

export const POIDetails = () => {
    const { poiId } = useParams();
    const poi = allPois.find(p => p.id === poiId);

    if (!poi) return <p>POI not found</p>;

    return (
        <div className="poi-details">
            <h3>{poi.name}</h3>
            <p>{poi.description}</p>
            <img src={poi.imageUrl} alt={poi.name} style={{ width: "100%" }} />
        </div>
    );
};