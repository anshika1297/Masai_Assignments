import React, { useState } from 'react';

function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={e => setText(e.target.value)} 
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;