import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const style = css`
  color: hotpink;
`;

const nestedStyle = css`
  color: red;

  span {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  color: turquoise;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div css={style}>Hello Vite + React!</div>
        <div css={nestedStyle}>
          testing out <span>nested style</span>. Isn't this cool?
        </div>
        <div>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </div>
        <div>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </div>
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
