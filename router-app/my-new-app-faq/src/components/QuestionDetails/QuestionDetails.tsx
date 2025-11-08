import { useNavigate, useParams } from 'react-router-dom';
import './QuestionDetails.css';
import { faqItems } from '../../types/questions';

export const QuestionDetails = () => {
    const params = useParams();
    const currentQuery = faqItems.find((query) => query.id === params.id)
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='question-details'>
            <p>Question: {currentQuery?.question}</p>
            <p>Answer: {currentQuery?.answer}</p>
            <button onClick={goBack}>Back to questions</button>
        </div>
    )
}
