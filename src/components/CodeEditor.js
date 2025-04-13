import React, { useState } from 'react';

const CodeEditor = ({ initialCode, language = 'jsx', onRun }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    setError(null);
  };

  const handleRun = () => {
    try {
      const result = onRun ? onRun(code) : eval(code);
      setOutput(result?.toString() || 'Code executed successfully!');
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput('');
    setError(null);
  };

  return (
    <div className="ide-container">
      <div className="ide-header">
        <div className="ide-title">
          <span className="file-name">Live Editor</span>
        </div>
        <div className="ide-buttons">
          <button onClick={handleRun} className="run-button">
            <span className="button-icon">▶</span> Run
          </button>
          <button onClick={handleReset} className="reset-button">
            <span className="button-icon">↺</span> Reset
          </button>
        </div>
      </div>
      <div className="ide-editor">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-textarea"
          spellCheck="false"
        />
      </div>
      {(output || error) && (
        <div className="ide-output">
          {error ? (
            <div className="error-message">
              <h4>Error:</h4>
              <pre>{error}</pre>
            </div>
          ) : (
            <div className="output-result">
              <h4>Output:</h4>
              <pre>{output}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeEditor; 