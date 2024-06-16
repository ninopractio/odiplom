import React, { useState } from 'react';
import styles from '../module/QuestionForm.module.css'

const QuestionForm = () => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Ваш вопрос: ${question}`);
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
          placeholder="Введите ваш вопрос"
        />
        <button type="submit" className={styles.button}>Задать вопрос</button>
      </form>
    </div>
  );
};

export default QuestionForm;
