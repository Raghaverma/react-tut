import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Register languages
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', html);

function CodeBlock({ code, language = 'jsx', fileName }) {
  const [copyStatus, setCopyStatus] = useState(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus(null), 2000);
    } catch (err) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus(null), 2000);
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span>{fileName}</span>
        <div className="copy-container">
          {copyStatus && (
            <span className={`copy-notification ${copyStatus}`}>
              {copyStatus === 'success' ? 'Copied!' : 'Failed to copy'}
            </span>
          )}
          <button 
            className="copy-button"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 4px 4px',
          padding: '1rem',
          fontSize: '0.9rem',
          lineHeight: '1.5'
        }}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock; 