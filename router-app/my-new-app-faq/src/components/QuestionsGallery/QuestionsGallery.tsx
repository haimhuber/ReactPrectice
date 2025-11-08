import './QuestionsGallery.css';
import { faqItems } from '../../types/questions';
import { QuestionCard } from '../QuestionCard/QuestionCard';


export const QuestionsGallery = () => {

    return (
        <div>
            {faqItems.map((question, index) => {
                return (

                    <div className='question-name' key={index}>
                        <QuestionCard
                            question={question.question}
                            id={question.id}></QuestionCard>
                    </div>

                )
            })}
        </div>
    )
}
