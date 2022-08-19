//import logo from './logo.svg';
import './App.css';
import Navbar from './App/Components/Navbar';
import StackNavigation from './App/Pages/StackNavigation';
import Footer from './App/Components/Footer';

function App() {
  return (
   <div style={{flex:1}}>
   <Navbar/>
   <StackNavigation/>
   <Footer/>

   </div>
  );
}

export default App;
