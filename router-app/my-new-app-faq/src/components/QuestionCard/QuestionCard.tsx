import { Link } from 'react-router-dom';
import './QuestionCard.css';
import React from 'react'

export const QuestionCard = (props: { question: string; id: string; }) => {
    return (
        <div className='question-card'>
            <Link to={`/question/${props.id}`}>
                <p>Question: {props.question}</p>
            </Link>
        </div>
    )
}

