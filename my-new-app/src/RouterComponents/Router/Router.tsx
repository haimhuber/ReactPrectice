import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetails } from '../ProductDetails/ProductDetails';
import { Home } from '../../Components/Home/Home';
import { AboutUs } from '../../Components/AboutUs/AboutUs';
import { ProductsGallery } from '../ProductsGallery/ProductsGallery';

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/products" element={<ProductsGallery />} />
    <Route path="/products/:id" element={<ProductDetails />} />
</Routes>
