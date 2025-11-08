
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewNavBar } from '../NewNavBar/NewNavBar';
import { arrForNav } from '../../NavBarInfo';
import { Home } from '../Home/Home';
import { AboutUs } from '../AboutUs/AboutUs';
import { Products } from '../Products/Products';
import React from 'react'
import { ProductDetails } from '../../Components2/ProductDetails/ProductDetails';
import { ProductsGallery } from '../../Components2/ProductsGallery/ProductsGallery';


export const LearnRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <NewNavBar theArr={arrForNav}></NewNavBar>
                <Routes>
                    <Route path='/' element={<Home></Home>} ></Route>
                    <Route path='/about' element={<AboutUs></AboutUs>}></Route>
                    <Route path='/products' element={<ProductsGallery></ProductsGallery>}></Route>
                    <Route path="/products/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}
