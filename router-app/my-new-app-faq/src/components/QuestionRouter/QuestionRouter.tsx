
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QuestionsGallery } from '../QuestionsGallery/QuestionsGallery'
import { QuestionDetails } from '../QuestionDetails/QuestionDetails'

export const QuestionRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<QuestionsGallery />} />
                    <Route path="/question/:id" element={<QuestionDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
