import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Cads/Cards';
import Router from './Components/Router';
import SearchBar from './Components/SearchBar';
import ParkData from "./Data.json";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar placeholder ="Want to eplore a state..?" data ={ParkData}/>
      <Cards />
      <Router/>
      <Footer />
   </div>
  );
}
    
export default App;
