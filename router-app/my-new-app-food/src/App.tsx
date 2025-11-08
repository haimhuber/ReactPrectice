import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AllFoodCategoriesGallery } from './Components/AllFoodCategoriesGallery/AllFoodCategoriesGallery'
import { OneCategoryDishesGallery } from './Components/OneCategoryDishesGallery/OneCategoryDishesGallery'
import { PrepareDishInstructions } from './Components/PrepareDishInstructions/PrepareDishInstructions'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Main gallery */}
          <Route path="/" element={<AllFoodCategoriesGallery />} />

          {/* Category page with right-side instructions */}
          <Route path="/food-category/:categoryName" element={<OneCategoryDishesGallery />}>
            <Route index element={<OneCategoryDishesGallery />} />
            <Route path="food-instruction/:idMeal" element={<PrepareDishInstructions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
