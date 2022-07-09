import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='m-3 p-3'>
      <Link className='link-secondary text-decoration-none' to="/about" >About</Link>
      <h2>PLEASE SHOW UP</h2>
      <h3>Deploying React to Github</h3>
    </div>
  );
 }
 export default App;
