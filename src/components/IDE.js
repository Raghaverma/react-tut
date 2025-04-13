import React, { useState, useCallback, memo } from 'react';
import Editor from '@monaco-editor/react';
import { FaPlay, FaRedo, FaCopy } from 'react-icons/fa';
import CodeBlock from './CodeBlock';

const IDE = memo(({ initialCode, height = '400px', instructions, fileName = 'example.jsx' }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleEditorChange = useCallback((value) => {
    setCode(value);
  }, []);

  const runCode = useCallback(() => {
    try {
      const func = new Function('React', code);
      const result = func(React);
      setOutput(result);
      setError('');
    } catch (err) {
      setError(err.message);
      setOutput('');
    }
  }, [code]);

  const resetCode = useCallback(() => {
    setCode(initialCode);
    setOutput('');
    setError('');
  }, [initialCode]);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
    fontLigatures: true,
    lineNumbers: 'on',
    lineNumbersMinChars: 3,
    glyphMargin: false,
    folding: false,
    renderLineHighlight: 'all',
    scrollBeyondLastLine: false,
    fixedOverflowWidgets: true,
    tabSize: 2,
    wordWrap: 'on',
    padding: { top: 12, bottom: 12 },
    scrollbar: {
      vertical: 'visible',
      horizontal: 'visible',
      useShadows: false,
      verticalScrollbarSize: 10,
      horizontalScrollbarSize: 10
    }
  };

  const beforeMount = (monaco) => {
    monaco.editor.defineTheme('vs-dark-custom', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.lineHighlightBackground': '#2d2d2d',
        'editorLineNumber.foreground': '#858585',
        'editorLineNumber.activeForeground': '#c6c6c6',
        'editor.selectionBackground': '#264f78',
        'editor.inactiveSelectionBackground': '#3a3d41'
      }
    });
  };

  return (
    <div className="ide-container">
      <div className="ide-header">
        <div className="ide-title">
          <span className="file-name">{fileName}</span>
        </div>
        <div className="ide-buttons">
          <button onClick={copyCode} className="copy-button" aria-label="Copy code">
            <FaCopy className="button-icon" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button onClick={runCode} className="run-button" aria-label="Run code">
            <FaPlay className="button-icon" />
            <span>Run</span>
          </button>
          <button onClick={resetCode} className="reset-button" aria-label="Reset code">
            <FaRedo className="button-icon" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {instructions && (
        <div className="ide-instructions">
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>
      )}

      <div className="ide-editor">
        <Editor
          height={height}
          defaultLanguage="javascript"
          value={code}
          onChange={handleEditorChange}
          beforeMount={beforeMount}
          theme="vs-dark-custom"
          options={editorOptions}
          className="monaco-editor"
        />
      </div>

      {(output || error) && (
        <div className="ide-output">
          {error ? (
            <div className="error-message">
              <h4>Error</h4>
              <pre>{error}</pre>
            </div>
          ) : (
            <div className="output-result">
              <h4>Output</h4>
              <CodeBlock code={output} />
            </div>
          )}
        </div>
      )}
    </div>
  );
});

IDE.displayName = 'IDE';

export default IDE; 