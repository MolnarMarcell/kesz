import { createContext, useContext, useDebugValue, useId, useState } from 'react';
import './App.css';

const AppContext = createContext("panel-dark");

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <AppContext value={theme}>
      < Form />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Nyomj meg</button>
    </AppContext >
  )
}

function debuggerHook() {
  const appContxt = useContext(AppContext);
  useDebugValue(appContxt === "panel-dark" ? "Dark Theme" : "Light Theme")
}

function Form() {
  const theme = useContext(AppContext);
  debuggerHook();
  const id = useId();
  const id2 = useId();
  return (
    <div id={id} className={theme === "light" ? "panel-light" : "panel-dark"}>
      {" "}
      {id} {id2}
      <div>Welcome to the form</div>
    </div>
  )
}

export default App
