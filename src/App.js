import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import HomePage from './components/home/homePage'

function App() {
  return (
    <div className='container-fluid '>
      <div className="row align-items-start ">
        <NavBar/> 
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
