import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import SearchBar from './Components/SearchBar/SearchBar';
import Home from './Components/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path="/search/:query" element={<SearchResults/>} />
    </Routes>
    </div>
  );
}

export default App;
