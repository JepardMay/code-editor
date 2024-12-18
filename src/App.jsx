import React, { useState } from 'react'
import styled from 'styled-components';

import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/go/go';
import 'codemirror/mode/javascript/javascript';

import LanguageSelector from './components/LanguageSelector';
import Result from './components/Result';

import { mockServer } from './mockApi';

const languages = ['python', 'go', 'javascript'];

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const CodeBody = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: unset;
  }
`;

const App = () => {
  const [code, setCode] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [result, setResult] = useState({
    output: '',
    status: '',
  });

  const handleRun = async () => {
    setDisabled(true);
    const response = await mockServer({ language, code });
    setResult({ output: response.output || response.error, status: response.status });
    setDisabled(false);
  };

  return (
    <div className="container">
      <Title>Code Editor</Title>
      <p>Write some code in selected language and press "Run" button.</p>

      <CodeHeader>
        <LanguageSelector value={language} onChange={(e) => setLanguage(e.target.value)} />
        <button onClick={handleRun} disabled={disabled}>Run</button>
      </CodeHeader>
      <CodeBody>
        <CodeMirror
          value={code}
          options={{
            mode: language,
            theme: 'material',
            lineNumbers: true,
            autoCloseBrackets: true,
            autoCloseTags: true,
            lineWrapping: true,
            lint: true,
          }}
          onBeforeChange={(editor, data, value) => setCode(value)}
        />
        <Result result={result} />
      </CodeBody>
    </div>
  );
};

export default App;
