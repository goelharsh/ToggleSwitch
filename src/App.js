import logo from './logo.svg';
import './App.css';
import useState from "react"
function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div>
      <p>
        {toggle ? "True" : "False"}
      </p>

      <button onClick={()=>setToggle(!toggle)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
