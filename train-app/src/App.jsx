import { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { Content } from "./components/Content/Content.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>Train App | React</title>
      </Helmet>
      <main>
        <Content ></Content>
      </main>
    </>
  );
}

export default App;
