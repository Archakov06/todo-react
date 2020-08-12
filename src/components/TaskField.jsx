import React from 'react';

export const TaskField = ({ onAddTask }) => {
  const [text, setText] = React.useState('');

  const handleInputChange = (event) => {
    const value = event.currentTarget.value;
    setText(value);
  };

  const addTask = () => {
    if (text) {
      onAddTask(text);
      setText('');
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="todo__add-field">
      <input
        value={text}
        onChange={handleInputChange}
        type="text"
        placeholder="Введите текст задачи..."
        onKeyUp={handleKeyUp}
      />
      <button onClick={addTask} className="todo__add-field-button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.875 7.875H10.125V1.125C10.125 0.826631 10.0065 0.540484 9.79549 0.329505C9.58452 0.118527 9.29837 0 9 0C8.70163 0 8.41548 0.118527 8.20451 0.329505C7.99353 0.540484 7.875 0.826631 7.875 1.125V7.875H1.125C0.826631 7.875 0.540484 7.99353 0.329505 8.20451C0.118527 8.41548 0 8.70163 0 9C0 9.29837 0.118527 9.58452 0.329505 9.79549C0.540484 10.0065 0.826631 10.125 1.125 10.125H7.875V16.875C7.875 17.1734 7.99353 17.4595 8.20451 17.6705C8.41548 17.8815 8.70163 18 9 18C9.29837 18 9.58452 17.8815 9.79549 17.6705C10.0065 17.4595 10.125 17.1734 10.125 16.875V10.125H16.875C17.1734 10.125 17.4595 10.0065 17.6705 9.79549C17.8815 9.58452 18 9.29837 18 9C18 8.70163 17.8815 8.41548 17.6705 8.20451C17.4595 7.99353 17.1734 7.875 16.875 7.875Z"
            fill="#C7C7C7"
          />
        </svg>
      </button>
    </div>
  );
};
