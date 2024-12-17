import "./App.css";
import Nav from "./components/navComponent/Nav";
import LogoGroup from "./components/logoGroup/LogoGroup";
import ObjectMenu from "./components/objectMenu/ObjectMenu";
import {useState,useEffect } from "react";
import useLocalStorage from "./storage/Storage";

function App() {
  // const [html, setHtml] = useState("");
  // const [css, setCSS] = useState("");
  // const [js, setJS] = useState("");
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCSS] = useLocalStorage("css","");
  const [js, setJS] = useLocalStorage("js","");

  const [activeObject, setActiveObject] = useState("html");
  const [inputRef, setInputRef] = useState(html);
  const [isManually, setIsManually] = useLocalStorage("runType",false);
  const [render, setRender] = useState("");

  const objectMenuHandler = (object) => {
    if (object === "html") {
      setActiveObject("html");
      setInputRef(html);
    } else if (object === "css") {
      setActiveObject("css");
      setInputRef(css);
    } else if (object === "js") {
      setActiveObject("js");
      setInputRef(js);
    }
  };
  const changeCodeHandler = (e) => {
    const data = e.target.value;
    setInputRef(data);
    if (activeObject === "html") {
      setHtml(data);
    } else if (activeObject === "css") {
      setCSS(data);
    } else if (activeObject === "js") {
      setJS(data);
    }
  };

  const runHandler = () => {
    setRender(`
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>Let's Learn Editor</title>
                    <style>${css}</style>
                  </head>
                  <body>
                      ${html}
                      <script>${js}</script>
                  </body>
                </html>
              `);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isManually) {
        runHandler()
      }
    }, 200)
    return () => clearTimeout(timeout);
  }, [html, css, js, isManually]);
  return (
    <div className="container">
      <header className="header-container">
        <div className="header">
          <LogoGroup />
          <Nav />
        </div>
        <ObjectMenu
          onPress={(e) => objectMenuHandler(e)}
          activeButton={activeObject}
          manually={isManually}
          changeRunStatus={setIsManually}
          runHandler={runHandler}
        />
      </header>
      <main className="main-container">
        <div className="code-container">
          <textarea
            className="code"
            value={inputRef}
            onChange={changeCodeHandler}
          />
        </div>
        <div className="view-container">
          <iframe
            title="view"
            className="iframe"
            srcDoc={render}
            sandbox="allow-scripts"
          ></iframe>
        </div>
      </main>
      <footer className="footer">
        <p>Copyright @2025</p>
      </footer>
    </div>
  );
}

export default App;
