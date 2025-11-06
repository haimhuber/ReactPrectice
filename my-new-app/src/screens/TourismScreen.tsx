import './TourismScreen.css';
import { FamousPlace } from '../Components/FamousPlace/FamousPlace';
import React from 'react'

export const TourismScreen = () => {
  return (
    <div className='tousizm'>
         <FamousPlace
             name='State'
             country='New york'
             imageUrl='https://images.pexels.com/photos/34302960/pexels-photo-34302960.jpeg'
        ></FamousPlace>
         <FamousPlace
             name='State2'
             country='New york2'
             imageUrl='https://images.pexels.com/photos/34190300/pexels-photo-34190300.jpeg'
        ></FamousPlace>
    </div>
  )
}
