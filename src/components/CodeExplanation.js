import React from 'react';

function CodeExplanation({ title, items }) {
  return (
    <div className="code-explanation">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <code>{item.code}</code>
            <p>{item.explanation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CodeExplanation; 