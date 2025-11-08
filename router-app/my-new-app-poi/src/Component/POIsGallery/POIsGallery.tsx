import './POIsGallery.css';
import { allPois } from "../../types/POIData";
import { POICard } from "../POICard/POICard";
import { Outlet } from "react-router-dom";

export const POIsGallery = () => {

    return (
        <div className="poi-layout">
            <div className="poi-list">
                {allPois.map((poi) => (
                    <POICard key={poi.id} poi={poi} />
                ))}
            </div>

            <div className="poi-details">
                <Outlet />
            </div>
        </div>
    );

};
