
export type FAQItem = {
    id: string;
    question: string;
    answer: string;
};

export const faqItems: FAQItem[] = [
    {
        id: "q1",
        question: "What is the return policy?",
        answer: "You can return any item within 30 days of purchase with the original receipt."
    },
    {
        id: "q2",
        question: "How long does shipping take?",
        answer: "Standard shipping usually takes 3-5 business days, while express shipping takes 1-2 business days."
    },
    {
        id: "q3",
        question: "Do you offer international shipping?",
        answer: "Yes, we ship internationally. Shipping times and fees vary depending on the destination."
    },
    {
        id: "q4",
        question: "How can I track my order?",
        answer: "After placing an order, you will receive an email with a tracking number and link."
    },
    {
        id: "q5",
        question: "Can I change or cancel my order?",
        answer: "You can change or cancel your order within 1 hour of placing it by contacting customer support."
    }
];
