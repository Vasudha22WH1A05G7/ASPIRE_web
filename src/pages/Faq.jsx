import React from 'react';
import '../styles/Faq.css';
import { FiPlus } from 'react-icons/fi';
import { FaQuestionCircle } from 'react-icons/fa';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-box">
        <FaQuestionCircle className="faq-icon" />
        <p className="faq-question">What is Aspire Club?</p>
        <FiPlus className="plus-icon" />
      </div>
    </div>
  );
};

export default Faq;
