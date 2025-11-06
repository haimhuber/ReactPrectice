import './App.css';
import './Components/DigitalPanel/DigitalPanel';
import React from 'react'
import { BookList } from './Components/BookList/BookList';
import { FamousPlace } from './Components/FamousPlace/FamousPlace';
import { TourismScreen } from './screens/TourismScreen';
import { ProductList } from './Components/ProductList/ProductList';
import { ArticleList } from './Components/ArticleList/ArticleList';
import { ProductListRevised } from './Components/ProductListRevised/ProductListRevised';
export const App = () => {
  return (
    <div>
      <ProductListRevised></ProductListRevised>
    </div>
  )
}
