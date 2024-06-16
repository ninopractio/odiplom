import React, { useState } from 'react';
import styles from '../module/QuestionForm.module.css'

const Otziv = () => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Оставить отзыв: ${question}`);
    setQuestion('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          className={styles.input}
          
        />
        <button type="submit" className={styles.button}>Оставить отзыв</button>
      </form>
    </div>
  );
};

export default Otziv;
