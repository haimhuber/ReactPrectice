
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { POIsGallery } from '../POIsGallery/POIsGallery'
import { POIDetails } from '../POIDetails/POIDetails'

export const POIRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
    // ...
                    <Route path="/pois" element={<POIsGallery />}>
                        <Route path=":poiId" element={<POIDetails />} />
                    </Route>
    // ...
                </Routes>
            </BrowserRouter>
        </div>
    )
}
